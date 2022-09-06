const VacumCleaner = require('./classes/agent');


const generateMap = (amount) => {
	const initial = Array.from({ length: amount });

	return initial.reduce((acc, element) => {
		return [...acc, Array.from({ length: amount }).map(() => Math.round(Math.random()))];
	}, []);
};

const main = () => {
	const map = generateMap(2);

	const agent = new VacumCleaner(map);

	console.log(agent.enviroment)
};


main()

