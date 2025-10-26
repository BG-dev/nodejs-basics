import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const filesDir = join(__dirname, "files");

  try {
    const files = await readdir(filesDir);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
