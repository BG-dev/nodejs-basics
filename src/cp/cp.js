import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { fork } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const filesDir = join(__dirname, "files");
  const scriptFilePath = join(filesDir, "script.js");

  fork(scriptFilePath, args);
};

spawnChildProcess(["mem, wow, kek"]);
