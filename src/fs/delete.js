import { rm } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const filesDir = join(__dirname, "files");
  const targetFilePath = join(filesDir, "fileToRemove.txt");

  try {
    await rm(targetFilePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
