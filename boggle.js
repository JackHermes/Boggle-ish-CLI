  let randomInt = () => {
    return Math.floor(Math.random() * 10);
  };
  let ints = []

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