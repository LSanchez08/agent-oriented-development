const Agent = require('./classes/agent');

const enviroment = require('./classes/enviroment');

const grafo = enviroment;



//! Sensores


const main = () => {
  const agent = new Agent(9, grafo, 0, 6)
  console.log(agent.startPath())
};

main();
