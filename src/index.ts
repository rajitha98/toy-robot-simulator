import readline from "readline";
import { processCommand } from "./commands";
import { RobotState } from "./types";

let state: RobotState = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

console.log("Type command here:");

rl.on("line", (line) => {
  const result = processCommand(state, line);
  state = result.state;

  if (result.output) {
    console.log(`Output: ${result.output}`);
  }
});
