// Your code here
function mapToNegativize(arr){
    return arr.map(x => x * -1)
}

function mapToNoChange(arr){
    let newArr = []
    newArr = arr.map(x => x)
    return newArr
}

function mapToDouble(arr){
    return arr.map(x => x * 2)
}

function mapToSquare(arr){
    return arr.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((acc, val) => {
        return acc + val;
    }, startingPoint)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }