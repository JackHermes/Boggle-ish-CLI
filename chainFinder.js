let traverser = (matrix, width, area) => {
  let validChains = [];
  // object to track visited cells
  let visited = {};

  // internal recursive function
  let finder = (x, y, workspace) => {
    // declare workspace total as sum of wkspc items ----> TODO: make this an arg that's passed around - for complexity's sake!
    let workspaceTotal = workspace.reduce((memo, value) => { return memo + value; }, 0)
    // check if x, y location has been a root/starting cell
    if(visited['' + x + y] === 1) return;
    // check if x, y location is off board or if workspace total + current is greater than area
    if(x < 0 || y < 0 || x >= width || y >= width) return;


    let current = matrix[x][y];
    if((workspaceTotal + current) > area) return;


    // check if workspace sum + current is less or equal to area
    if((workspaceTotal + current) <= area) {
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
      if((workspaceTotal + current) === area) {
        // if so, check if at least 2 (width - 1) integers in chain
        if(workspace.length >= 2) {
          // check if string not present in validChains
          if(validChains.indexOf(workspace.slice().sort().join(' + ') + ` = ${area}`) === -1) {
            // if not, send to valid chains variable (from external fn)
            validChains.push(workspace.slice().sort().join(' + ') + ` = ${area}`);
          }
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