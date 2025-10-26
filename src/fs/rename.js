import { access, rename as renameFn } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const filesDir = join(__dirname, "files");
  const srcFilePath = join(filesDir, "wrongFilename.txt");
  const targetFilePath = join(filesDir, "properFilename.md");

  try {
    await access(targetFilePath);
    throw new Error("FS operation faile");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  try {
    await renameFn(srcFilePath, targetFilePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
