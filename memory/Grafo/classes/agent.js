const Sensor = require('./Sensor');
const fs = require('fs');

const memory = require('../../memory.json');
class Agent {
  constructor(index, enviroment, acumulativeCost, goalNode) {
    this.currentNode = index; // Sensor de Nodo Actual y Adyacentes
    this.goalNode = goalNode; // Performance Measure
    this.bestPath = { movements: [], cost: acumulativeCost };
    this.Sensor = new Sensor(enviroment);
    this.ended = 0;
    this.memory = memory;
  }

  move(newNode) {
    this.currentNode = newNode;
  }

  getCurrentNode(index = this.currentNode) {
    return this.Sensor.getCurrentNode(index);
  }

  exit(visited) {
    return this.Sensor.getExit(visited, this.currentNode);
  }

  calculatePath(visited, cost, currentIndex, destination) {
    this.move(currentIndex);
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
    const newEntry = `${this.currentNode}-${this.goalNode}`;
    if (this.memory[newEntry]) {
      console.log('No calculation required. Result in memory')
      return this.memory[newEntry];
    }
    this.calculatePath([this.currentNode], this.bestPath.cost, this.currentNode, this.getCurrentNode(this.goalNode).name);
    const result = { 
      movements: this.bestPath.movements.map((node) => this.getCurrentNode(node).name),
      cost: this.bestPath.cost
    };

    fs.writeFileSync('./memory.json', JSON.stringify({ ...this.memory, [newEntry]: result }));

    return result;
  }

}

module.exports = Agent;
