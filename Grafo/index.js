const Agent = require('./classes/agent');

const enviroment = require('./classes/enviroment');

const grafo = enviroment;



//! Sensores


const main = () => {
  const agent = new Agent(14, grafo, 0, 12)
  console.log(agent.startPath())
};

main();
