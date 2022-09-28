
class Agent {
  constructor(index, enviroment, acumulativeCost, goalNode) {
    this.currentNode = index; // Sensor de Nodo Actual y Adyacentes
    this.acumulativeCost = acumulativeCost // Sensor de costos
    this.enviroment = enviroment; // Sensor del estado del ambiente
    this.goalNode = goalNode; // Performance Measure
    this.bestPath = { movements: [], cost: 0 };
  }

  move(newNode) {
    this.currentNode = newNode
  }

}

module.exports = Agent;
