let traverser = (matrix) => {
  let validChains = '';
  // object to track visited cells
  let visited = {};

  // internal recursive function
  let finder = (x, y, workspace) => {
    // declare workspace total as sum of wkspc items ----> TODO: make this an arg that's passed around - for complexities' sake!
    let workspaceTotal = workspace.reduce((memo, value) => { return memo + value; }, 0)
    // check if x, y location has been a root/starting cell
    // and propogate 'workspace'
    if(visited['' + x + y]) return workspace;
    // check if x, y location is off board or if workspace sum + current is greater than area
    if(x < 0 || y < 0 || x >= 3 || y >= 3) return workspace;


    let current = matrix[x][y];
    if((workspaceTotal + current) > 9) {
      // if so, propogate workspace
      return workspace;
    }


    // check if workspace sum + current is less or equal to area
    if((workspaceTotal + current) <= 9) {
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
          validChains = validChains.concat('\n' + workspace.join(' + ') + ' = 9');
        }
      }
      // pop and return workspace to clear and propogate
      workspace.pop();
      return workspace;
    }
  }; // end 'finder'

  // loop over matrix
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      console.log("iteration # " + i + j);
      // finds all chains with a root of this cell
      finder(j, i, []);
      // mark cell as visited - marking here will make sure there won't be duplicate chains
      let cell = '' + j + i;
      visited[cell] = 1;
    }
  }
  return validChains;
};




let grid = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(traverser(grid));
  /*
  I return workspace in many places in order to ensure I'm propogating the
  value at certain times. Otherwise it's unnecessary and potentially confusing.
  */