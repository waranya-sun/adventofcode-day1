function day1() {
  let rawInput = `
  1000
  2000
  3000
  
  4000
  
  5000
  6000
  
  7000
  8000

  9000
  
  10000
  `;
  let sum = 0;
  let maxValue = 0;

  const findTopThreeArray = [];
  let findTopThreeValue = 0;

  let newInput = rawInput
    .trim()
    .replace(/\n/g, 'c')
    .replace(/\s/g, '')
    .replace(/[c]/g, ',')
    .split(',,');
  let arrayOfArray = newInput
    .map(item => item.split(','))
    .forEach(item => {
      item.map(i => {
        sum += +i;
      });
      findTopThreeArray.push(sum);
      if (sum > maxValue) {
        maxValue = sum;
      }
      sum = 0;
    });

  findTopThreeArray.sort((a, b) => b - a);
  for (let i = 0; i < 3; i++) {
    findTopThreeValue += findTopThreeArray[i];
  }
  console.log('Max value is ' + maxValue);
  console.log('Sum of top three is ' + findTopThreeValue);
}

day1();
