import { cp } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const srcDir = join(__dirname, "files");
  const destDir = join(__dirname, "files_copy");
  try {
    await cp(srcDir, destDir, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ERR_FS_CP_EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
