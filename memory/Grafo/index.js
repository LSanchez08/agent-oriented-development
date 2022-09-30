const Agent = require('./classes/agent');


const enviroment = require('./classes/enviroment');


const main = (start, end) => {
  const agent = new Agent(start, enviroment, 0, end);
  console.log({'True end': agent.startPath()});
};

main(0, 1);
