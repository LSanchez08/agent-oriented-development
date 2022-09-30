const Agent = require('./classes/agent');


const enviroment = require('./classes/enviroment');


const main = (start, end) => {
  const agent = new Agent(start, enviroment, 0, end);
  console.log({'True end': agent.startPath()});
};

try {
  main(7, 5); // Solo valores 0 -> 19
} catch (error) {
  console.log('¿Qué haces bobo? Sigue mis reglas!');
}


