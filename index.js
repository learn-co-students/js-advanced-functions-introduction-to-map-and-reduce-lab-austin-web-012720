// Your code here
function mapToNegativize(sourceArray) {
  const arr = [];
  sourceArray.forEach((x) => arr.push(x **2 / -x) );
  return arr;
}



function mapToNoChange(sourceArray) {
  return sourceArray;
}

  function mapToDouble(sourceArray) {
    const arr = [];
    for (let i = 0; i < sourceArray.length; i++) {
      arr.push(2 * sourceArray[i]);
    }
    return arr;
  }

function mapToSquare(sourceArray) {
  const arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] ** 2);
  }
  return arr;
}


const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let acc = startingPoint;
  for (let i = 0; i < sourceArray.length; i += 1) {
    acc += sourceArray[i];
    console.log(acc);    
  }
  return acc;
};


function reduceToAllTrue(sourceArray) {
  let acc = sourceArray[0];
  for (let i = 1; i < sourceArray.length; i += 1) {
    acc = acc && !!sourceArray[i];
  }
  return acc;
}



function reduceToAnyTrue(sourceArray) {
  let acc = sourceArray[0];
  for (let i = 1; i < sourceArray.length; i += 1) {
    acc = acc || !!sourceArray[i];
  }
  return acc;
}

// [1, 2, true, "razmatazz"]
// [1, 2, true, "razmatazz", false]
// [ false, null, null, null, true]
// [ false, null, null, null]


