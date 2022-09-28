
const setFamily = (label, value) => {
    return {
        label , value
    };
};

module.exports = [
    new Node([setFamily(1, 71), setFamily(3, 151)], 'Oradea'),
    new Node([setFamily(0, 71), setFamily(2, 75)], 'Zerind'),
    new Node([setFamily(1, 75), setFamily(3, 140), setFamily(4, 118)], 'Arad'),
    new Node([setFamily(0, 151), setFamily(2, 140), setFamily(6, 99), setFamily(7, 80)], 'Sibiu'),
    new Node([setFamily(2, 118), setFamily(5, 111)], 'Timisoara'),
    new Node([setFamily(4, 111), setFamily(8, 70)], 'Lugoj'),
    new Node([setFamily(3, 99), setFamily(12, 211)], 'Fagaras'),
    new Node([setFamily(3, 80), setFamily(9, 97), setFamily(11, 146)], 'Rimnicu Vilcea'),
    new Node([setFamily(7, 97), setFamily(11, 138), setFamily(12, 101)], 'Pitesti'),
    new Node([setFamily(5, 70), setFamily(10, 75)], 'Mehadia'),
    new Node([setFamily(9, 75), setFamily(11, 120)], 'Drobeta'),
    new Node([setFamily(10, 120), setFamily(7, 146), setFamily(9, 138)], 'Craiova'),
    new Node([setFamily(13, 90), setFamily(14, 85)], 'Bucharest'),
    new Node([setFamily[12, 90]], 'Giurgiu'),
    new Node([setFamily(12, 85), setFamily(15, 98), 17, 142], 'Urziceni'),
    new Node([setFamily(14, 98), setFamily(16, 86)], 'Hirsova'),
    new Node([setFamily(15, 86)], 'Eforie'),
    new Node([setFamily(15, 142), setFamily(18, 92)], 'Vaslui'),
    new Node([setFamily(17, 92), setFamily(19, 87)], 'Iasi'),
    new Node([setFamily(18, 87)], 'Neamt')
];
