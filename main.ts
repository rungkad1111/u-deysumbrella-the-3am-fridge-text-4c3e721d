// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// Writes exactly one line (73 chars, within the 140-char cap) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "3am. Fourth visit tonight. I contain nothing new. I never did. Go to bed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
