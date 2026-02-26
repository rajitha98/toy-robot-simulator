# Toy Robot Simulator

Toy Robot Simulator built with Node.js and TypeScript.

## Installation

1. Install dependencies:

```bash
npm install 
```

2. Run Project:

```bash
npm start
```


support commands:

| Command         | Description                                              |
|-----------------|----------------------------------------------------------|
| `PLACE X,Y,F`   | Place robot at X,Y facing NORTH / SOUTH / EAST / WEST    |
| `MOVE`          | Move forward                                             |
| `LEFT`          | Rotate 90° counter-clockwise                             |
| `RIGHT`         | Rotate 90° clockwise                                     |
| `REPORT`        | Print current position                                   |

The robot ignores invalid commands

## Sample Commands

### Example 1
```
PLACE 0,0,NORTH
MOVE
REPORT
```
---

### Example 2
```
PLACE 0,0,NORTH
LEFT
REPORT
```

---

### Example 3
```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

