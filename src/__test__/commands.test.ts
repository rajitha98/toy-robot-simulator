import { processCommand } from "../../src/commands";

describe("commands.ts module", () => {

  describe("invalid commands before PLACE", () => {
    test("WHEN robot not placed and command is MOVE/LEFT/RIGHT/REPORT THEN command ignored", () => {
      expect(processCommand(null, "MOVE").state).toBeNull();
      expect(processCommand(null, "LEFT").state).toBeNull();
      expect(processCommand(null, "RIGHT").state).toBeNull();
      expect(processCommand(null, "REPORT").output).toBeNull();
    });

    test("WHEN robot not placed and invalid command THEN it ignored", () => {
      expect(processCommand(null, "JUMP").state).toBeNull();
    });

    test("WHEN there is empty command THEN it should return null", () => {
      expect(processCommand(null, "PLACE ##").state).toBeNull();
    });
  });

  describe("PLACE command", () => {
    test("WHEN PLACE with valid position THEN state should set", () => {
      const result = processCommand(null, "PLACE 0,0,NORTH");
      expect(result.state).toEqual({ x: 0, y: 0, facing: "NORTH" });
    });

    test("WHEN PLACE with invalid position THEN state should be null", () => {
      expect(processCommand(null, "PLACE 5,5,NORTH").state).toBeNull();
      expect(processCommand(null, "PLACE 1,2").state).toBeNull();
    });
  });

  describe("Movement commands after PLACE", () => {
    test("WHEN MOVE/LEFT/RIGHT commands executed THEN state updates correctly", () => {
      let state = processCommand(null, "PLACE 0,0,NORTH").state;
      state = processCommand(state, "MOVE").state;
      expect(state).toEqual({ x: 0, y: 1, facing: "NORTH" });

      state = processCommand(state, "LEFT").state;
      expect(state?.facing).toBe("WEST");

      state = processCommand(state, "RIGHT").state;
      expect(state?.facing).toBe("NORTH");
    });

    test("WHEN REPORT command executed THEN output should be correct", () => {
      let state = processCommand(null, "PLACE 2,3,EAST").state;
      const result = processCommand(state, "REPORT");
      expect(result.output).toBe("2,3,EAST");
    });
  });

  describe("full scenario", () => {
    test("WHEN correct commands executed THEN robot should be expected position", () => {
      let state = null;
      state = processCommand(state, "PLACE 1,2,EAST").state;
      state = processCommand(state, "MOVE").state;
      state = processCommand(state, "MOVE").state;
      state = processCommand(state, "LEFT").state;
      state = processCommand(state, "MOVE").state;

      const result = processCommand(state, "REPORT");
      expect(result.output).toBe("3,3,NORTH");
    });
  });

});