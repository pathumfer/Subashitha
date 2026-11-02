import { describe, it, expect } from "vitest";
import { Trie, normalize, clusterize, transliterate } from "./index";

describe("sinhala-input", () => {
  describe("normalize", () => {
    it("should normalize text to NFC form", () => {
      const text = "සුභාෂිත";
      const normalized = normalize(text);
      expect(normalized).toBe("සුභාෂිත");
    });
  });

  describe("clusterize", () => {
    it("should split text into clusters", () => {
      const text = "සු";
      const clusters = clusterize(text);
      expect(clusters).toContain("ස");
    });

    it("should handle ZWJ (U+200D) conjuncts", () => {
      const text = "ස‍ි";
      const clusters = clusterize(text);
      expect(clusters.length).toBeGreaterThan(0);
    });
  });

  describe("transliterate", () => {
    it("should convert Sinhala to Singlish", () => {
      const sinhala = "ස";
      const singlish = transliterate(sinhala);
      expect(singlish).toBe("sa");
    });
  });

  describe("Trie", () => {
    it("should insert and search words", () => {
      const trie = new Trie();
      trie.insert("සුභා");
      const results = trie.search("සු");
      expect(results).toContain("සුභා");
    });

    it("should return empty array for non-existent prefix", () => {
      const trie = new Trie();
      trie.insert("ඇ");
      const results = trie.search("ස");
      expect(results).toEqual([]);
    });
  });
});
