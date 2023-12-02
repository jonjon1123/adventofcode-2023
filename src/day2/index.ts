import { Day } from "../day";

class Day2 extends Day {

  constructor() {
    super(2);
  }

  solveForPartOne(input: string): string {
    const maxRedCubes = 12;
    const maxGreenCubes = 13;
    const maxBlueCubes = 14;

    let total = 0;
    let possible = false;
    const lines = input.split("\n");
    for (const line of lines) {
      possible = true;
      const gameNum: number = parseInt(line.substring(line.indexOf('Game ')+5, line.indexOf(':')));

      const sets: string[] = line.substring(line.indexOf(':')+1).trim().split(";");

      for (const set of sets) {
        const cubes: string[] = set.split(',');
        for (const cube of cubes) {
          const cubeNumColor: string[] = cube.trim().split(' ');
          const num: number = parseInt(cubeNumColor[0]);
          const color: string = cubeNumColor[1];
          switch (color) {
            case 'blue':
              if (num > maxBlueCubes) {
                possible = false;
              }
              break;
            case 'green':
              if (num > maxGreenCubes) {
                possible = false;
              }
              break;
            case 'red':
              if (num > maxRedCubes) {
                possible = false;
              }
              break;
          }
        }
      }

      if (possible) {
        total = total + gameNum;
      }
    }

    return total.toString();
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day2;