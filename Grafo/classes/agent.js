
class Agent {
  constructor(index, enviroment, acumulativeCost, goalNode) {
    this.currentNode = index; // Sensor de Nodo Actual y Adyacentes
    this.acumulativeCost = acumulativeCost // Sensor de costos
    this.enviroment = enviroment; // Sensor del estado del ambiente
    this.goalNode = goalNode // Performance Measure
  }

  raiseAcumulativeCost(cost) { 
    this.acumulativeCost += cost
  }

  move(newNode) {
    this.currentNode = newNode
  }

  isGoalNode() {
    return this.currentNode === this.goalNoded
  }

  decisionMaking() {
    const newNode = this.currentNode.adjecent.reduce((acc, element)=>{
      if (!acc) {
        return element;
      } else {
        return element.value < acc.value ? element : acc
      }
    }, 0)
    this.move(this.enviroment[newNode.label])
    
  }



}

module.exports = Agent;
