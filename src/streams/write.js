import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { stdin } from "process";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filesDir = join(__dirname, "files");
  const targetFilePath = join(filesDir, "fileToWrite.txt");

  await pipeline(stdin, createWriteStream(targetFilePath));
};

await write();
