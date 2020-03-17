// Your code here
function mapToNegativize(sourceArray){
 let newA = sourceArray.map(val => val*-1);
 return newA
}
function mapToNoChange(sourceArray){
let newA = sourceArray.map(val => val);
return newA
}
function mapToDouble(sourceArray){
  let newA = sourceArray.map(val => 2*val);
  return newA
}
function mapToSquare(sourceArray){
  let newA = sourceArray.map(val => val*val);
  return newA
}

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
function reduceToTotal(sourceArray , startingPoint = 0){
return  sourceArray.reduce((total,val)=>total+val,startingPoint);

}
function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}
function reduceToAnyTrue(sourceArray){
  for (const i in sourceArray){
    if (sourceArray[i]) return true
  }
  return false
}
