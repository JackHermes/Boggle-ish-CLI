#!/usr/bin/env node
let program = require('commander');
let chainFinder = require('./chainFinder.js');

program
  .version('0.0.1')
  .option('-w, --width <n>', 'add the board width')
  .command('mkboard')
  .action(() => {
    let width = parseInt(program.width) || 3;
    let area = width * width;
    let randomInt = () => Math.floor(Math.random() * area) + 1;
    let grid = [];
    let row = [];
    let column = 0;

    for(let i = 0; i <= area; i++) {
      // If we've reached the end of the row
      if(column === width) {
        // add to grid and start a new row
        grid.push(row);
        row = [];
        column = 0;
      }
      row.push(randomInt());
      column++;
    }
    console.log(grid);
    console.log("All possible chains: \n",
      chainFinder.traverser(grid, width, area)
    );
  })
  program.parse(process.argv);