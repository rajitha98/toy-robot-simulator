import { LEFT_ROTATION, RIGHT_ROTATION } from "./constants";
import { RobotState, Direction } from "./types";

const BOARD_SIZE = 5;

export const isValidPosition = (x: number, y: number): boolean => {
  return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
};

export const place = (
  x: number,
  y: number,
  facing: Direction
): RobotState => {
  if (!isValidPosition(x, y)) return null;
  return { x, y, facing };
};

export const move = (state: RobotState): RobotState => {
  if (!state) return state;

  let { x, y, facing } = state;

  switch (facing) {
    case "NORTH":
      y++;
      break;
    case "SOUTH":
      y--;
      break;
    case "EAST":
      x++;
      break;
    case "WEST":
      x--;
      break;
  }

  if (!isValidPosition(x, y)) return state;

  return { x, y, facing };
};

export const rotateLeft = (state: RobotState): RobotState => {
  if (!state) return state;

  const newFacing = LEFT_ROTATION[state.facing];

  return { ...state, facing: newFacing };
};

export const rotateRight = (state: RobotState): RobotState => {
  if (!state) return state;

  const newFacing = RIGHT_ROTATION[state.facing];

  return { ...state, facing: newFacing };
};

export const report = (state: RobotState): string | null => {
  if (!state) return null;
  return `${state.x},${state.y},${state.facing}`;
};
