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
    const spelledOutNumbers: Map<string, string> = new Map();
    spelledOutNumbers.set('one', '1');
    spelledOutNumbers.set('two', '2');
    spelledOutNumbers.set('three', '3');
    spelledOutNumbers.set('four', '4');
    spelledOutNumbers.set('five', '5');
    spelledOutNumbers.set('six', '6');
    spelledOutNumbers.set('seven', '7');
    spelledOutNumbers.set('eight', '8');
    spelledOutNumbers.set('nine', '9');

    const spelledOutNumbersRegex = Array.from(spelledOutNumbers.keys()).join("|");

    let total: number = 0;
    const lines = input.split("\n");
    for (const lineIndex in lines) {
      const regex = new RegExp("\\d|(?=("+spelledOutNumbersRegex+"))", 'g');
      const line = lines[lineIndex];
      let m;
      const numbers: string[] = [];

      while ((m = regex.exec(line)) !== null) {  
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
          if (match) {
            numbers.push(match);
          } 
        });
      }
           
      
      if (numbers != null) {
        let firstNumber: string = numbers[0];
        let lastNumber: string = numbers[numbers.length-1];

        // If the number can't be parsed to an int, we know it is one of the spelled out numbers
        if (isNaN(parseInt(firstNumber))) {
          firstNumber = spelledOutNumbers.get(firstNumber)!;
        }

        if (isNaN(parseInt(lastNumber))) {
          lastNumber = spelledOutNumbers.get(lastNumber)!;
        }

        total = total + parseInt(firstNumber+lastNumber);
      }
      
    }
    return total.toString();
  }
}

export default new Day1;