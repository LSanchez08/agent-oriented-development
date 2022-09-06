// Finds "false" means area is clean

const generateMap = (enviroment) => {
  return enviroment.map((row) => {
    return row.map((spot) => {
      return { clean: spot, visited: false };
    })
  })
};

class VacumCleaner {
  constructor(map) {
    this.finds = 0;
    this.enviroment = generateMap(map);
    this.x = 0;
    this.y = 0;
    this.direction = {
      x: 1,
      y: 0
    }
  };

  getAction() {
    if (this.finds) {
      return 'clean';
    } else {
      return 'right';
    }
  };

  setPerception() {
    this.finds = this.enviroment[this.x][this.y];
    
    this.getAction();
  };
};

module.exports = VacumCleaner;
