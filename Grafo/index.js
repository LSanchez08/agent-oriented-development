const Node = require('./classes/node');

const grafo = [
  new Node([setFamily(1, 71), setFamily(3, 151)], 'Oradea')
];
const main = () => {
  console.log({ grafo })
};

main();

const setFamily = (label, value) => {
  return {
    label , value
  };
};
