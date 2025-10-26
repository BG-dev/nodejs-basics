import { env } from "process";

const parseEnv = () => {
  const variables = Object.keys(env).filter((value) =>
    value.startsWith("RSS_")
  );

  let msg = "";
  for (let i = 0; i < variables.length; i++) {
    if (i + 1 === variables.length) {
      msg += `${variables[i]}=${env[variables[i]]}`;
      break;
    }
    msg += `${variables[i]}=${env[variables[i]]}; `;
  }

  console.log(msg);
};

parseEnv();
