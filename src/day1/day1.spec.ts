import day1 from './index';
import fs from 'fs';

describe('On Day 1', () =>{
    it(`part1 is identity function`, async ()=>{
        const content = await fs.promises.readFile(`./inputs/day1/part1.txt`);
        expect(day1.solveForPartOne(content.toString())).toBe('53386');
    })
});