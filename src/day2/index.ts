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
    const games = input.split("\n");
    for (const game of games) {
      possible = true;
      const gameNum: number = parseInt(game.substring(game.indexOf('Game ')+5, game.indexOf(':')));

      const sets: string[] = game.substring(game.indexOf(':')+1).trim().split(";");

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
    let total = 0;
    const games = input.split("\n");
    for (const game of games) {
      let maxBlueCube = 0;
      let maxRedCube = 0;
      let maxGreenCube = 0;

      const sets: string[] = game.substring(game.indexOf(':')+1).trim().split(";");

      for (const set of sets) {
        const cubes: string[] = set.split(',');
        for (const cube of cubes) {
          const cubeNumColor: string[] = cube.trim().split(' ');
          const num: number = parseInt(cubeNumColor[0]);
          const color: string = cubeNumColor[1];
          switch (color) {
            case 'blue':
              if (num > maxBlueCube) {
                maxBlueCube = num;
              }
              break;
            case 'green':
              if (num > maxGreenCube) {
                maxGreenCube = num;
              }
              break;
            case 'red':
              if (num > maxRedCube) {
                maxRedCube = num;
              }
              break;
          }
        }
      }

      total = total + (maxBlueCube * maxRedCube * maxGreenCube);
    }

    return total.toString();
  }
}

export default new Day2;