// Finds "false" means area is clean
const generateMapOverlay = (amount) => {
	const initial = Array.from({ length: amount });
	return initial.reduce((acc, element) => {
		return [...acc, Array.from({ length: amount }).map(() => '')];
	}, []);
};

const directions = {
  north: {
    x: 0,
    y: -1
  },
  south: {
    x: 0,
    y: 1
  },
  east: {
    x: 1,
    y: 0
  },
  west: {
    x: -1,
    y: 0
  }
};

const moveTo = Object.keys(directions);

const generateMap = (enviroment, x = -1, y = -1) => {
  return enviroment.map((row) => {
    y += 1;
    return row.map((spot) => {
      if (x >= enviroment.length - 1) {
        x = 0;
      } else {
        x += 1;
      }
      const notPossibleDirection = [];
      if (y === 0) {
        notPossibleDirection.push('north');
      } else if (y >= enviroment.length - 1) {
        notPossibleDirection.push('south');
      }
      if (x === 0) {
        notPossibleDirection.push('west');
      } else if (x >= enviroment.length - 1) {
        notPossibleDirection.push('east');
      }

      return { clean: spot, exitedDirections: [] , notPossibleDirection };
    });
  });
};

class VacumCleaner {
  constructor(map, size) {
    this.overlay = generateMapOverlay(size);
    this.mapa = map;
    this.finds = 0;
    this.enviroment = generateMap(map);
    this.direction = 0;
    this.x = 0;
    this.y = 0;
    this.changeDir = true;
  };

  getAction() {
    if (this.finds) {
      this.enviroment[this.y][this.x].clean = 0;
      return 'clean';
    } else {
      return 'move';
    }
  };

  setPerception() {
    this.overlay[this.y][this.x] = 'X';
    this.finds = this.mapa[this.y][this.x];

    return this.getAction();
  };

  move() {
    const location = this.enviroment[this.y][this.x];
    if (location.notPossibleDirection.includes(moveTo[this.direction])) {
      while (location.notPossibleDirection.includes(moveTo[this.direction])){
        this.direction += 1
        if (this.direction >= 4) {
          this.direction = 0;
        } else if (this.direction <= -1) {
          this.direction = 3;
        }
        const allDirections = [...location.exitedDirections, ...location.notPossibleDirection];
        if (allDirections.includes(moveTo[this.direction]) && allDirections.length < 4) {
          this.direction = moveTo.indexOf(moveTo.find((dir) => !allDirections.includes(dir)));
        }
      }
    }
    this.overlay[this.y][this.x] = '';
    if (!location.exitedDirections.includes(moveTo[this.direction])) {
      location.exitedDirections.push(moveTo[this.direction]);
    }
    if (location.exitedDirections === 2) {
      location.exitedDirections = [];
    }
    // if (this.x == 0 && this.y == 0) {
    //   console.log({direction: this.direction, x: this.x, y: this.y})
    // }
    this.x += directions[moveTo[this.direction]].x;
    this.y += directions[moveTo[this.direction]].y;
    this.overlay[this.y][this.x] = 'X';
  }
};

module.exports = VacumCleaner;
