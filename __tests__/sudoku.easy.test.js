const easyTestData = require('./cases/json_data/easy.json');
const simpleTestData = require('./cases/json_data/simple.json');
const intermediateTestData = require('./cases/json_data/intermediate.json');
const expertTestData = require('./cases/json_data/expert.json');

const sudoku = require('../index.js');

describe('Sudoku - Easy', () => {
  for (let i = 0; i < easyTestData.length; i += 1) {
    if (i === easyTestData.length) console.log(easyTestData[i]);
    describe(`Case ${i}`, () => {
      const { Puzzle, Solution } = easyTestData[i];
      const PuzSub = Puzzle.substring(0, 9);
      const SolSub = Solution.substring(0, 9);
      // const stringexample = `${PuzSub} to ${SolSub}`;
      it(`${PuzSub} -- ${SolSub}`, () => {
        expect(sudoku(Puzzle)).toBe(Solution);
      });
    });
  }
});

describe('Sudoku - Simple', () => {
  for (let i = 0; i < simpleTestData.length; i += 1) {
    if (i === simpleTestData.length) console.log(simpleTestData[i]);
    describe(`Case ${i}`, () => {
      const { Puzzle, Solution } = simpleTestData[i];
      const PuzSub = Puzzle.substring(0, 9);
      const SolSub = Solution.substring(0, 9);
      // const stringexample = `${PuzSub} to ${SolSub}`;
      it(`${PuzSub} -- ${SolSub}`, () => {
        expect(sudoku(Puzzle)).toBe(Solution);
      });
    });
  }
});

describe('Sudoku - Intermediate', () => {
  for (let i = 0; i < intermediateTestData.length; i += 1) {
    if (i === intermediateTestData.length) console.log(intermediateTestData[i]);
    describe(`Case ${i}`, () => {
      const { Puzzle, Solution } = intermediateTestData[i];
      const PuzSub = Puzzle.substring(0, 9);
      const SolSub = Solution.substring(0, 9);
      // const stringexample = `${PuzSub} to ${SolSub}`;
      it(`${PuzSub} -- ${SolSub}`, () => {
        expect(sudoku(Puzzle)).toBe(Solution);
      });
    });
  }
});

describe('Sudoku - Expert', () => {
  for (let i = 0; i < expertTestData.length; i += 1) {
    if (i === expertTestData.length) console.log(expertTestData[i]);
    describe(`Case ${i}`, () => {
      const { Puzzle, Solution } = expertTestData[i];
      const PuzSub = Puzzle.substring(0, 9);
      const SolSub = Solution.substring(0, 9);
      // const stringexample = `${PuzSub} to ${SolSub}`;
      it(`${PuzSub} -- ${SolSub}`, () => {
        expect(sudoku(Puzzle)).toBe(Solution);
      });
    });
  }
});
