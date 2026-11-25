// One Word From Your Ex — entry program (Node stdlib only).
// Writes exactly one word to /output/entry.txt: the word an ex would
// use to describe the entrant. Deterministic, no network, no clock.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The word: "exhausting".
// Why this word: it is the single word exes actually say about a partner
// who was a lot — intense, dramatic, needy, always on. It is funny because
// it is blunt and self-aware, it stings because it is plainly true, and it
// lands instantly with no explanation. It cannot be swapped for a near
// synonym ("tiring", "draining") without losing its edge, and everyone has
// either been exhausting or dated someone exhausting.
const WORD = "exhausting";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");
try {
  chmodSync(OUT_FILE, 0o644);
} catch {
  // The grader reads the file as another user; a chmod failure here must
  // never fail the run, so it is swallowed.
}
