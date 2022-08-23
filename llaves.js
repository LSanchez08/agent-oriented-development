const openKeys = ['{', '[', '('];
const closeKeys = ['}', ']', ')'];

const main = (data) => {
  const symbols = data.split('').filter((key) => (key !== ' ' && (openKeys.includes(key) || closeKeys.includes(key)) ));
  const stack = {
    open: [],
    result: true
  };

  symbols.forEach((symbol) => {
    if (!stack.result) {
      return;
    }

    if (openKeys.includes(symbol)) {
      stack.open.push(symbol);
    } else if (closeKeys.includes(symbol)) {
      if (closeKeys.indexOf(symbol) !== openKeys.indexOf(stack.open[stack.open.length - 1])) {
          stack.result = false;
      } else {
        stack.open.pop();
      }
    }
  });
  
  console.log(stack.result);
};

main('({+[ghj]})');
