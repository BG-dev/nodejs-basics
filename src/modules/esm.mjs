import { createServer as createServerHttp } from "node:http";
import { release, version } from "node:os";
import { fileURLToPath } from "url";
import path from "node:path";
import { dirname } from "path";

import "./files/c.cjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const random = Math.random();

const jsonPath = random > 0.5 ? "./files/a.json" : "./files/b.json";
const unknownObject = (
  await import(path.join(__dirname, jsonPath), { with: { type: "json" } })
).default;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
