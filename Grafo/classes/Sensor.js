
class Sensor {
  constructor (grafo) {
    this.enviroment = grafo;
  }

  getCurrentNode (index) {
    return this.enviroment[index];
  }

  getExit (visited, index) {
    const { adjecent } = this.getCurrentNode(index)
    const newNode = adjecent.reduce((acc, element) => {
      if (!visited.includes(element.label)) {
        const accNode = adjecent[acc];

        return accNode.value > element.value ? element.label : acc;
      } else {
        return acc;
      }
    }, adjecent[0].label);

    return newNode;
  }
}

module.exports = Sensor;
