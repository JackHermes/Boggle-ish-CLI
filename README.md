# Boggle-ish CLI
A CLI program to create a square board of random integers and count up all possible chains adding up to the board's area.

## Installation and Usage ##
> Tested on Windows and currently in process of testing on Linux. Issue seems to be connected to line return value difference between dos and unix on the shebang header of [boggle.js](./boggle.js) `#!/usr/bin/env node`.The system looks for "node\r" rather than "node" as it's execution context.

Run `chmod +x boggle.js` on the command line to modify boggle.js to have execution permissions and then run `npm install -g` from the project's root to use the program system-wide with the `boggle` command. Current usage is `boggle mkboard` without options.