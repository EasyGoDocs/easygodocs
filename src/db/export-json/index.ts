import fs from "fs";
import path from "path";

const dbDir = path.join(process.cwd(), "src/db");

export const dbFiles = fs
  .readdirSync(dbDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => JSON.parse(fs.readFileSync(path.join(dbDir, file), "utf-8")));
