// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// Writes exactly one line (73 chars, within the 140-char cap) to /output/entry.txt.
// The gate refuses anything outside 1-140 chars, so fail loudly instead of
// writing an invalid line: a refused entry takes no prize.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "3am. Fourth visit tonight. I contain nothing new. I never did. Go to bed.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
