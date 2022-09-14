const VacumCleaner = require('./classes/agent');


const generateMap = (amount) => {
	const initial = Array.from({ length: amount });
	return initial.reduce((acc, element) => {
		return [...acc, Array.from({ length: amount }).map(() => Math.round(Math.random()))];
	}, []);
};

const testEnd = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i].includes(1)) {
			return true;
		}
	}
	return false;
};

const main = (size) => {
	const map = generateMap(size);
	const agent = new VacumCleaner(map, size);
	console.log(agent.overlay);
	console.log(map)
	let val = 0
	while (testEnd(map)) {
		val += 1
		const action = agent.setPerception();
		if (action === 'clean') {
			map[agent.y][agent.x] = 0;
		} else {
			agent.move();
		}
		
		// console.log(action);
		console.log(map)
		// console.log(agent.overlay);
	}
	
	
	// console.log(agent.enviroment)
};


main(3);

