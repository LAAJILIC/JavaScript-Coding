'use strict';
const temps = [3, -2, 0, 'error', 9, 13, -6, 17];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);
// What about if we receive two arrays as inputs
//const array1 = [3, 2, 8, 0, -1, 19];
//const array2 = [3, 'error', 8, 3, 19, 72, -30];
//const array1 = array1.concat(array2);

const newCalcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = newCalcTempAmplitude(
  [3, 2, 8, 0, -1, 19],
  [3, 'error', 8, 3, 19]
);
console.log(amplitudeNew);

//challenge time : From a given array log to the console a string showing the temp level in °C and the coreespendent day

let printSum = `...`;
let p;
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    p = i + 1;
    printSum = printSum + `${arr[i]}°C in ${p} days...`;
  }
  return printSum;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
