import { Day } from "../day";

class Day3 extends Day {

  constructor() {
    super(3);
  }

  solveForPartOne(input: string): string {
    const lines = input.split("\n");
    let first: boolean = true;
    for (const line of lines) {
      if (!first) {
        first = false;
        // Need to check previous line
      }
      const numbers = line.match(/\d+/g);
      if (numbers != null) {
        for (const number of numbers) {
          let locations = [];
          let i: number = -1;
          while((i = line.indexOf(number, i+1)) >= 0) locations.push([i, i+number.length]);
        }
        
      }
    }
    return input;
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day3;