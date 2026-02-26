# Toy Robot Simulator

Toy Robot Simulator built with Node.js and TypeScript.

support commands:

- PLACE X,Y,F
- MOVE
- LEFT
- RIGHT
- REPORT

The robot ignores invalid commands


## Installation

1. Install dependencies:

```bash
npm install 
```

2. Run Project:

```bash
npm start
```

## Sample Commands / TEST DATA
---
# Example 1
PLACE 0,0,NORTH
MOVE
REPORT

# Example 2
PLACE 0,0,NORTH
LEFT
REPORT

# Example 3
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT