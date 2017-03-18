// TODO having an issue of using paths multiple times when 0 is involved

let traverser = (matrix) => {
  let validChains = [];
  // object to track visited cells
  let visited = {};

  // internal recursive function
  let finder = (x, y, workspace) => {
    // declare workspace total as sum of wkspc items ----> TODO: make this an arg that's passed around - for complexity's sake!
    let workspaceTotal = workspace.reduce((memo, value) => { return memo + value; }, 0)
    // check if x, y location has been a root/starting cell
    if(visited['' + x + y] === 1) return;
    // check if x, y location is off board or if workspace sum + current is greater than area
    if(x < 0 || y < 0 || x >= 3 || y >= 3) return;


    let current = matrix[x][y];
    if((workspaceTotal + current) > 9) return;


    // check if workspace sum + current is less or equal to area
    if((workspaceTotal + current) <= 9) {
      // Mark cell temporarily visited until finished recursing
      visited['' + x + y] = 1;
      // if so, push current to workspace
      workspace.push(current);
      // recurse all 8 directions (if already equal, we're checking for zeroes)
      finder(x, y + 1, workspace);
      finder(x, y - 1, workspace);
      finder(x - 1, y, workspace);
      finder(x - 1, y + 1, workspace);
      finder(x - 1, y - 1, workspace);
      finder(x + 1, y, workspace);
      finder(x + 1, y + 1, workspace);
      finder(x + 1, y - 1, workspace);
      // check if sum of ints equal to area
      if((workspaceTotal + current) === 9) {
        // if so, check if at least width - 1/ 2 integers in chain
        if(workspace.length >= 2) {

          // if so, send to valid chains variable (from external fn)
          validChains.push(workspace.slice().sort().join(' + ') + ' = 9');
        }
      }
      // unmark cell as temporarily visited
      visited['' + x + y] = 0;
      // pop from workspace to clear
      workspace.pop();
      return;
    }
  }; // end 'finder' fn

  // loop over matrix
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      console.log("iteration # " + i + j);
      // finds all chains with a root of this cell
      finder(j, i, []);
      // mark cell as visited - marking here will make sure there won't be duplicate, reversed chains
      let cell = '' + j + i;
      visited[cell] = 1;
    }
  }
  return validChains; //.join(' \n ');
};

module.exports = {
  traverser
}
//
//
//
// let grid = [
//   [9,4,6],
//   [8,1,0],
//   [3,7,2]
// ]
//
// console.log(traverser(grid));