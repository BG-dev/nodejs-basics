import { stdin, stdout } from "process";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, _, cb) {
      const result = data.toString().split("").reverse().join("");

      cb(null, result + "\n");
    },
  });

  await pipeline(stdin, transformStream, stdout);
};

await transform();
