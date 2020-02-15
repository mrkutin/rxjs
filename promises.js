const getValue = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('значение получено');
      return resolve(5);
    }, 2000);
  });
};

const double = x => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('значение умножено');
      return resolve(x * 2);
    }, 2000);
  });
};

(async () => {
  const value = await getValue();
  const doubleValue = await double(value);
  console.log('doubleValue = ', doubleValue);
})();
