# සුභාෂිත (Subhashitha) — Project Memory

## Product
Sinhala ↔ English dictionary web app. MVP-01 is web-only (no mobile). The on-screen keyboard stays docked at the bottom and never overlaps the found-words list.

## Architecture
- **UI**: Next.js static export (TypeScript, Tailwind CSS, React). Served from `wwwroot`. Client trie holds headwords only.
- **API**: One ASP.NET Core (.NET 10) minimal API. Organized by feature folder (Dictionary, Contributions, Admin). Returns JSON or Razor-rendered word pages for SEO.
- **Data**: Two SQLite files — `dictionary-vN.db` (read-only content) and `app.db` (corrections, audit, rate-limit counters).
- **ETL**: Python script (can be C# later) that validates JSON in `content/`, normalises (NFC, ZWJ), builds `dictionary-vN.db` and the trie.
- **Edge**: Cloudflare Free (CDN, WAF, DDoS, TLS, Access for `/admin`).
- **Hosting**: Windows shared hosting (ASP.NET Core app) with a domain. Cost ≈ $3.50–4/month.

See `docs/Subhashitha-Lean-Hosting-Technical-Design-v3.md` (§3–4).

## Non-Negotiables
1. Meanings stay **server-side only**. No bulk export, no full dataset API.
2. Search capped at **20 results per call**; browse paginated at 50.
3. Dictionary DB opened **read-only** on the app; versioned file names + `current.txt` pointer.
4. Sinhala text: **NFC normalised**, **ZWJ-aware** (U+200D for conjuncts). Test vectors in `spec/sinhala-golden-vectors.json`.
5. On-screen keyboard: **stays docked** at the bottom; found-words list above it (no overlap); closes only after a word is selected or input is complete.
6. Content is **self-authored in Git**. `content/*.json` is the master; no scraping, no copying from other dictionaries.

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `pnpm install` (root) |
| Dev server (Next.js) | `pnpm -C web dev` |
| Build and export | `pnpm -C web build` then `web:build-to-wwwroot` task |
| Run API | `dotnet run` (api/Subhashitha.App) |
| Test all | `pnpm -r test` + `dotnet test api/` + `pytest etl/` |
| Build dictionary | `python etl/build_dictionary.py` |
| Format code | `pnpm -r format` (auto on save in VS Code) |

## Build Plan
Eight steps to MVP-01 (see §11 in technical design):
1. **Foundations**: Golden test vectors, GitHub Actions skeleton.
2. **sinhala-input**: Trie, Singlish, clusterizer, on-screen keyboard (docked, non-overlapping list).
3. **ETL**: JSON validation, builds `dictionary-v1.db` and trie.
4. **API read side**: search, suggestions, word, browse, trie, `/health`.
5. **Web UI**: Home, Search, Browse, Word page, local favorites.
6. **Corrections + admin**: Turnstile form, review queue, approve/reject, patch export.
7. **Security**: Cloudflare proxy and WAF, origin-lock header, Access on `/admin`, rate limits, CSP.
8. **Go live**: Host trial checks, production deploy, cache rules, backups, canary entries.

## Reference Design Sections
- §1: Summary and decisions
- §2: Goals and constraints
- §3: Architecture overview
- §4: Components (layout, web UI, API, data, publishing, admin)
- §5: API endpoints (11 in total)
- §6: Security design (by layer: accounts, edge, origin-lock, transport, admin, public writes, API, browser, data at rest, scraping, secrets, code)
- §8: Hosting and cost
- §11: Build plan (8 steps)

## Key Files
- Root: `.gitignore`, `.editorconfig`, `pnpm-workspace.yaml`, `CLAUDE.md`, `.claudeignore`
- Design: `docs/Subhashitha-Lean-Hosting-Technical-Design-v3.md`
- Content master: `content/*.json` (authored here, built into DB by ETL)
- Test vectors: `spec/sinhala-golden-vectors.json`
- Frontend: `web/` (Next.js)
- Backend: `api/Subhashitha.App` (ASP.NET Core)
- ETL: `etl/build_dictionary.py`

## Commit Message Rule
Reference the design doc by section number (e.g., "§4.1"). Example:
```
feat: search API endpoint (§5)

Implement GET /api/v1/search?q= with 20-result cap and rate limiting.
```
