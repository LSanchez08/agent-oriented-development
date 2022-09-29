const Agent = require('./classes/agent');

const enviroment = require('./classes/enviroment');

const grafo = enviroment;



//! Sensores


const main = (start, end) => {
  const agent = new Agent(start, grafo, 0, end)
  console.log({'True end': agent.startPath()})
};

main(12, 2);
