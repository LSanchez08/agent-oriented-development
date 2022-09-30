
class Sensor {
  constructor (grafo) {
    this.enviroment = grafo;
  }

  getCurrentNode (index) {
    return this.enviroment[index];
  }

  getExit (visited, index) {
    const { adjecent } = this.getCurrentNode(index)
    let current = 0
    let newNodeIndex = adjecent[current].label;
    while (visited.includes(newNodeIndex)) {
      current += 1;
      newNodeIndex = current < adjecent.length ? adjecent[current].label : -1;
    }


    return newNodeIndex;
  }
}

module.exports = Sensor;
