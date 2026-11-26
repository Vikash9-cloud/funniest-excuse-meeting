// Writes this entry's one-line excuse to /output/entry.txt for the grader.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FALLBACK =
  "Sorry, I have a conflict — it's with this meeting, and I'm siding with the conflict.";

const line = existsSync("entry.txt")
  ? readFileSync("entry.txt", "utf8").trim()
  : FALLBACK;

// The sealed scorer gates on 1-200 characters of non-blank text; fail
// loudly here instead of shipping an entry the gate would reject.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
console.log(line);
