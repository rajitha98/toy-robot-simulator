import { RobotState, Direction } from "./types";
import { place, move, rotateLeft, rotateRight, report } from "./utils";

interface commandProps {
  state: RobotState;
  output: string | null;
}

export const processCommand = (
  state: RobotState,
  input: string
): commandProps => {
  const command = input.trim().toUpperCase();

  if (command.startsWith("PLACE")) {
    const actionsList = command.slice(6).trim();
    const actions = actionsList.split(",");

    if (actions.length !== 3) return { state, output: null };

    const x = Number(actions[0]);
    const y = Number(actions[1]);
    const facing = actions[2].toUpperCase();

    return {
      state: place(x, y, facing as Direction),
      output: null,
    };
  }

  switch (command) {
    case "MOVE":
      return { state: move(state), output: null };
    case "LEFT":
      return { state: rotateLeft(state), output: null };
    case "RIGHT":
      return { state: rotateRight(state), output: null };
    case "REPORT":
      return { state, output: report(state) };
    default:
      return { state, output: 'Invalid Command' };
  }
};
