import { Direction } from "./types";

export const LEFT_ROTATION: Record<string, Direction> = {
  NORTH: "WEST",
  WEST: "SOUTH",
  SOUTH: "EAST",
  EAST: "NORTH"
};

export const RIGHT_ROTATION: Record<string, Direction> = {
  NORTH: "EAST",
  EAST: "SOUTH",
  SOUTH: "WEST",
  WEST: "NORTH"
};