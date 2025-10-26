import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const filesDir = join(__dirname, "files");
  const srcFilePath = join(filesDir, "fileToCompress.txt");
  const targetFilePath = join(filesDir, "archive.gz");
  const gzip = createGzip();

  await pipeline(
    createReadStream(srcFilePath),
    gzip,
    createWriteStream(targetFilePath)
  );
};

await compress();
