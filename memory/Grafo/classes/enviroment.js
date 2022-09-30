const Node = require('./node');

const setFamily = (label, value) => {
    return {
        label , value
    };
};

module.exports = [
    new Node([setFamily(1, 71), setFamily(3, 151)], 'Oradea'), // 0
    new Node([setFamily(0, 71), setFamily(2, 75)], 'Zerind'), // 1
    new Node([setFamily(1, 75), setFamily(3, 140), setFamily(4, 118)], 'Arad'), // 2
    new Node([setFamily(0, 151), setFamily(2, 140), setFamily(6, 99), setFamily(7, 80)], 'Sibiu'), // 3
    new Node([setFamily(2, 118), setFamily(5, 111)], 'Timisoara'), // 4
    new Node([setFamily(4, 111), setFamily(9, 70)], 'Lugoj'), // 5
    new Node([setFamily(3, 99), setFamily(12, 211)], 'Fagaras'), // 6
    new Node([setFamily(3, 80), setFamily(8, 97), setFamily(11, 146)], 'Rimnicu Vilcea'), // 7
    new Node([setFamily(7, 97), setFamily(11, 138), setFamily(12, 101)], 'Pitesti'), // 8
    new Node([setFamily(5, 70), setFamily(10, 75)], 'Mehadia'), // 9
    new Node([setFamily(9, 75), setFamily(11, 120)], 'Drobeta'), // 10
    new Node([setFamily(10, 120), setFamily(7, 146), setFamily(8, 138)], 'Craiova'), // 11
    new Node([setFamily(13, 90), setFamily(14, 85), setFamily(8, 101), setFamily(6, 211)], 'Bucharest'), // 12
    new Node([setFamily(12, 90)], 'Giurgiu'), // 13
    new Node([setFamily(12, 85), setFamily(15, 98), setFamily(17, 142)], 'Urziceni'), // 14
    new Node([setFamily(14, 98), setFamily(16, 86)], 'Hirsova'), // 15
    new Node([setFamily(15, 86)], 'Eforie'), // 16
    new Node([setFamily(14, 142), setFamily(18, 92)], 'Vaslui'), // 17
    new Node([setFamily(17, 92), setFamily(19, 87)], 'Iasi'), // 18
    new Node([setFamily(18, 87)], 'Neamt') // 19
];
