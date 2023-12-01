import { Day } from "../day";

class Day1 extends Day {

  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    let total: number = 0;
    const lines = input.split("\n");
    for (const lineIndex in lines) {
      const numbers = lines[lineIndex].match(/\d/g);
      if (numbers != null) {
        const firstNumber: string = numbers[0];
        const lastNumber: string = numbers[numbers.length-1];
        total = total + parseInt(firstNumber+lastNumber);
      }
      
    }
    return total.toString();
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day1;