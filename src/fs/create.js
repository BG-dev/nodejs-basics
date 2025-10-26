import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filesDir = join(__dirname, "files");
  const targetPath = join(filesDir, "fresh.txt");

  try {
    await writeFile(targetPath, "I am fresh and young", {
      flag: "wx",
    });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();
