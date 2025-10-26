import { argv } from "process";

const parseArgs = () => {
  const args = argv.slice(2);
  const argsObj = {};

  for (let i = 0; i < args.length; i += 2) {
    argsObj[args[i].slice(2)] = args[i + 1];
  }

  let msg = "";
  const argsKeys = Object.keys(argsObj);
  for (let i = 0; i < argsKeys.length; i++) {
    if (i + 1 === argsKeys.length) {
      msg += `${argsKeys[i]} is ${argsObj[argsKeys[i]]}`;
      break;
    }
    msg += `${argsKeys[i]} is ${argsObj[argsKeys[i]]}, `;
  }

  console.log(msg);
};

parseArgs();
