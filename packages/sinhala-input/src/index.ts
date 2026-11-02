export interface TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
}

export class Trie {
  private root: TrieNode = { children: new Map(), isEnd: false };

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, { children: new Map(), isEnd: false });
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  search(prefix: string): string[] {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char)!;
    }

    const results: string[] = [];
    const dfs = (current: TrieNode, path: string) => {
      if (current.isEnd) {
        results.push(path);
      }
      for (const [char, child] of current.children) {
        dfs(child, path + char);
      }
    };
    dfs(node, prefix);
    return results.sort();
  }
}

export function normalize(text: string): string {
  return text.normalize("NFC");
}

export function clusterize(text: string): string[] {
  const clusters: string[] = [];
  let current = "";

  for (const char of text) {
    if (char === "‍") {
      current += char;
    } else {
      if (current) {
        clusters.push(current);
      }
      current = char;
    }
  }

  if (current) {
    clusters.push(current);
  }

  return clusters;
}

export function transliterate(sinhala: string): string {
  const singlishMap: Record<string, string> = {
    ස: "sa",
    ු: "u",
    බ: "ba",
    ල: "la",
    න: "na",
  };

  return Array.from(sinhala)
    .map((char) => singlishMap[char] || char)
    .join("");
}
