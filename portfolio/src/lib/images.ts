import fs from "node:fs";
import path from "node:path";

// Checks (on the server, at build/render time) whether a file in /public exists.
// This lets us show a placeholder instead of a broken image.
export function publicImageExists(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}
