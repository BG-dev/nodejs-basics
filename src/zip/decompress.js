import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const filesDir = join(__dirname, "files");
  const srcFilePath = join(filesDir, "archive.gz");
  const targetFilePath = join(filesDir, "fileToCompress.txt");
  const gzip = createGunzip();

  await pipeline(
    createReadStream(srcFilePath),
    gzip,
    createWriteStream(targetFilePath)
  );
};

await decompress();
