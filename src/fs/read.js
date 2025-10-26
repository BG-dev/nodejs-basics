import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filesDir = join(__dirname, "files");
  const targetFilePath = join(filesDir, "fileToRead.txt");

  try {
    const fileContent = await readFile(targetFilePath, { encoding: "utf-8" });
    console.log(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
