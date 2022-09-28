const Agent = require('./classes/agent');
const Node = require('./classes/node');
const enviroment = require('./classes/enviroment');

const grafo = enviroment;



//! Sensores


const main = () => {
  const agent = new Agent(0, grafo, 0, 12)
  // agent.decisionMaking()
  agent.startPath();
  // console.log(agent.currentNode)
  // console.log({ grafo })
};

main();
