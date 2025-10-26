import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const workerFilePath = join(__dirname, "worker.js");

  const numberCores = cpus().length;
  let number = 10;
  const workers = Array.from(
    { length: numberCores },
    () =>
      new Promise((resolve, reject) => {
        const worker = new Worker(workerFilePath);
        worker.postMessage(number++);

        worker.on("message", (data) => {
          resolve(data);
          worker.terminate();
        });

        worker.on("error", (data) => {
          reject(data);
          worker.terminate();
        });
      })
  );

  const msg = await Promise.all(workers);
  console.log(msg);
};

await performCalculations();
