// declare traverser fn receiving a matrix as arg
  // declare valid chains variable
  // declare object to track visited cells
  // loop over matrix
    //
      // execute chainFinder fn, inputing this cell's coordinates and []
      // mark cell as visited - marking here will make sure there won't be duplicates
  // return valid chains variable



    // declare chainFinder fn receiving x, y and workspace args
      // check if x, y location has been a root/starting cell
        // if so, return (workspace?)

      // declare current as matrix at x, y
      // declare workspace total as sum of wkspc items ----> TODO: make this an arg that's passed around for complexities' sake!

      // check if x, y location is off board or if workspace sum + current is greater than area
        // if so, return workspace
      // check if workspace sum + current is less than area
        // if so, push current to workspace
          // if still less than area, recurse all 8 directions
      // must be equal then
        // Add current to workspace
        // Recurse again, in case of a zero in our chain
        // check if at least width - 1/ 2 integers in chain
          // if so, push to valid chains variable (from external function)
          // pop from workspace
          // return workspace


  /*
  I return workspace in many places in order to ensure I'm propogating the
  value at certain times. Otherwise it's unnecessary and potentially confusing.
  */