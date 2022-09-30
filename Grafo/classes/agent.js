const Sensor = require('./Sensor');
class Agent {
  constructor(index, enviroment, acumulativeCost, goalNode) {
    this.currentNode = index; // Sensor de Nodo Actual y Adyacentes
    this.goalNode = goalNode; // Performance Measure
    this.bestPath = { movements: [], cost: acumulativeCost };
    this.Sensor = new Sensor(enviroment);
    this.ended = 0;
  }

  move(newNode) {
    this.currentNode = newNode
  }

  getCurrentNode(index = this.currentNode) {
    return this.Sensor.getCurrentNode(index);
  }

  exit(visited) {
    return this.Sensor.getExit(visited, this.currentNode);
  }

  calculatePath(visited, cost, currentIndex, destination) {
    this.currentNode = currentIndex;
    const currentNode = this.getCurrentNode(currentIndex);
    if (destination === currentNode.name) {
      if (!this.bestPath.movements.length) {
        this.bestPath = {
          movements: visited,
          cost
        };
        console.log({ [`Finished ${this.ended += 1}`]: {
          movements: this.bestPath.movements.map((node) => this.getCurrentNode(node).name),
          cost: this.bestPath.cost
        } });
      } else {
        if (this.bestPath.cost > cost) {
          this.bestPath = {
            movements: visited,
            cost
          };
          console.log({ [`Finished ${this.ended += 1}`]: {
            movements: this.bestPath.movements.map((node) => this.getCurrentNode(node).name),
            cost: this.bestPath.cost
          } });
        }
      }

      return;
    }
    const { adjecent } = currentNode;
    for (let i = 0; i < adjecent.length; i++) {
      const newExit = adjecent[i];

      if (!visited.includes(newExit.label)) {
        this.calculatePath([...visited, newExit.label], cost + newExit.value, newExit.label, destination);
      }
    }
    
    return this.bestPath;
  }

  startPath() {
    this.calculatePath([this.currentNode], 0, this.currentNode, this.getCurrentNode(this.goalNode).name);
    const result = { 
      movements: this.bestPath.movements.map((node) => this.getCurrentNode(node).name),
      cost: this.bestPath.cost
    };

    return result;
  }

}

module.exports = Agent;
