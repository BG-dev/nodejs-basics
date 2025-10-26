import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filesDir = join(__dirname, "files");
  const srcFilePath = join(filesDir, "fileToRead.txt");

  const readStream = createReadStream(srcFilePath);

  return new Promise((resolve) => {
    readStream.on("data", (data) => stdout.write(data));
    readStream.on("end", () => {
      stdout.write("\n");
      resolve();
    });
  });
};

await read();
