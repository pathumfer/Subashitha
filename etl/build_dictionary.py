#!/usr/bin/env python3
"""
Build dictionary SQLite database from JSON content files.
Validates JSON, normalizes Unicode (NFC), and builds full-text search index.
"""

import json
import sqlite3
import sys
from pathlib import Path
from jsonschema import validate, ValidationError

def load_schema():
    """Load the content JSON schema."""
    schema_path = Path(__file__).parent.parent / "spec" / "content.schema.json"
    if not schema_path.exists():
        raise FileNotFoundError(f"Schema not found: {schema_path}")
    with open(schema_path, encoding="utf-8") as f:
        return json.load(f)

def validate_content(data, schema):
    """Validate content against schema."""
    try:
        validate(instance=data, schema=schema)
        return True
    except ValidationError as e:
        print(f"Validation error: {e.message}", file=sys.stderr)
        return False

def normalize_sinhala(text: str) -> str:
    """Normalize Sinhala text to NFC form."""
    import unicodedata
    return unicodedata.normalize("NFC", text)

def build_database(output_path: str):
    """Build the dictionary database from content files."""
    content_dir = Path(__file__).parent.parent / "content"
    schema = load_schema()

    # Create database
    db = sqlite3.connect(output_path)
    cursor = db.cursor()

    # Create schema with FTS5
    cursor.execute("""
        CREATE TABLE entries (
            id INTEGER PRIMARY KEY,
            headword TEXT NOT NULL UNIQUE,
            pronunciation TEXT,
            part_of_speech TEXT,
            singlish_key TEXT
        )
    """)

    cursor.execute("""
        CREATE TABLE senses (
            id INTEGER PRIMARY KEY,
            entry_id INTEGER NOT NULL,
            sense_number INTEGER,
            meaning TEXT NOT NULL,
            example TEXT,
            FOREIGN KEY(entry_id) REFERENCES entries(id)
        )
    """)

    cursor.execute("""
        CREATE VIRTUAL TABLE entries_fts USING fts5(
            headword,
            meaning,
            content='entries'
        )
    """)

    # Load and insert content
    entry_count = 0
    for json_file in content_dir.glob("*.json"):
        try:
            with open(json_file, encoding="utf-8") as f:
                data = json.load(f)

            if not isinstance(data, list):
                data = [data]

            for entry in data:
                if not validate_content(entry, schema):
                    continue

                headword = normalize_sinhala(entry["headword"])
                pronunciation = entry.get("pronunciation", "")
                pos = entry.get("part_of_speech", "")
                singlish = entry.get("singlish_key", "")

                cursor.execute(
                    """INSERT INTO entries (headword, pronunciation, part_of_speech, singlish_key)
                       VALUES (?, ?, ?, ?)""",
                    (headword, pronunciation, pos, singlish)
                )
                entry_id = cursor.lastrowid

                for i, sense in enumerate(entry.get("senses", []), 1):
                    meaning = sense.get("meaning", "")
                    example = sense.get("example", "")
                    cursor.execute(
                        """INSERT INTO senses (entry_id, sense_number, meaning, example)
                           VALUES (?, ?, ?, ?)""",
                        (entry_id, i, meaning, example)
                    )

                entry_count += 1
        except Exception as e:
            print(f"Error processing {json_file}: {e}", file=sys.stderr)

    db.commit()
    db.close()
    print(f"✓ Built dictionary with {entry_count} entries at {output_path}")

if __name__ == "__main__":
    try:
        output = Path(__file__).parent.parent / "api" / "Subhashitha.App" / "App_Data" / "dictionary-v1.db"
        output.parent.mkdir(parents=True, exist_ok=True)

        # Remove old database if it exists
        if output.exists():
            output.unlink()

        build_database(str(output))

        # Write current.txt pointer
        current_file = output.parent / "current.txt"
        current_file.write_text("dictionary-v1.db")
        print(f"✓ Updated {current_file}")
    except Exception as e:
        print(f"Build failed: {e}", file=sys.stderr)
        sys.exit(1)
