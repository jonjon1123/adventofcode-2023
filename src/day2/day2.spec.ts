import day2 from './index';
import fs from 'fs';

describe('On Day 2', () =>{
    it(`part1 is identity function`, async ()=>{
        const content = await fs.promises.readFile(`./inputs/day2/part1.txt`);
        expect(day2.solveForPartOne(content.toString())).toBe('2476');
    });

    it(`part2 is identity function`, async ()=>{
        const content = await fs.promises.readFile(`./inputs/day2/part2.txt`);
        expect(day2.solveForPartTwo(content.toString())).toBe('54911');
    });
});