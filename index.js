// Your code here
function mapToNegativize(array) {
  let retArray = [];
  array.forEach(element => {
    retArray.push(-1 * element);
  });
  return retArray;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  let retArray = [];
  array.forEach(element => {
    retArray.push(2 * element);
  });
  return retArray;
}

function mapToSquare(array) {
  let retArray = [];
  array.forEach(element => {
    retArray.push(element * element);
  });
  return retArray;
}

function reduceToTotal(array, start = 0) {
  let sum = start;
  array.forEach(element => {
    sum += element;
  });
  return sum;
}

function reduceToAllTrue(array) {
  let test = true;
  array.forEach(element => {
    if (!element) {
      test = false;
    }
  });
  return test;
}

function reduceToAnyTrue(array) {
  let test = false;
  array.forEach(element => {
    if (element) {
      test = true;
    }
  });
  return test;
}
