import { createHash } from "crypto";
import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filesDir = join(__dirname, "files");
  const srcFilePath = join(filesDir, "fileToCalculateHashFor.txt");

  const stream = createReadStream(srcFilePath);

  return new Promise((resolve) => {
    const hash = createHash("sha256");
    stream.on("data", (data) => hash.update(data, "utf-8"));
    stream.on("end", () => {
      console.log(hash.digest("hex"));
      resolve();
    });
  });
};

await calculateHash();
