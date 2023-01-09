// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
  //your awesome code here
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1 + ": " + array[i];
  }
  return array;
};

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = function (N) {
  const array = [];
  for (let i = 0; i < N; i++) {
    array.push(i);
  }
  return array;
};

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
  let oes = "";
  if (drone.length > lamps.length) {
    for (let i = 0; i < lamps.length; i++) {
      oes += "o";
    }
    lamps = oes;
  } else {
    for (let i = 0; i < drone.length; i++) {
      oes += "o";
    }
    lamps = oes + lamps.slice(drone.indexOf("T") + 1);
  }
  return lamps;
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  let sum = 0;
  let avg;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  avg = sum / marks.length;
  return Math.floor(avg);
  //TODO : calculate the downward rounded average of the marks array
}

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
