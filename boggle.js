#!/usr/bin/env node
let program = require('commander');
let chainFinder = require('./chainFinder.js');

program
  .version('0.0.1')
  .command('mkboard')
  // TODO: add option to designate board width
  // .option('-w, --width <n>', 'add the board width')
  .action((width) => {
    console.log('mkboard width %s', 3);
    let randomInt = () => Math.floor(Math.random() * 9) + 1;
    let ints = [];

    for(let i = 0; i < (3 * 3); i++) {
      ints[i] = randomInt();
    }
    console.log(`
      ${ints[0]} ${ints[1]} ${ints[2]}\n
      ${ints[3]} ${ints[4]} ${ints[5]}\n
      ${ints[6]} ${ints[7]} ${ints[8]}`
    );
    console.log(
      chainFinder.traverser([
        [ints[0],ints[1],ints[2]],
        [ints[3],ints[4],ints[5]],
        [ints[6],ints[7],ints[8]]
      ]
      )
    );
  });

program.parse(process.argv);
/*
let randomInt = () => return Math.floor(Math.random() * 10);
let ints = []
// process.env['KORRA'] = 9;
let width = process.env.WIDTH || 3;
console.log(width);
  for(let i=0; i<10; i++) {
    ints[i] = randomInt();
  }
  // console.log(`4 5 6\n7 8 9\n1 2 3`);
  console.log(`
    ${ints[0]} ${ints[1]} ${ints[2]}\n
    ${ints[3]} ${ints[4]} ${ints[5]}\n
    ${ints[6]} ${ints[7]} ${ints[8]}`);

  module.exports = {
    integers: ints
  };
  */