// Your code here

function mapToNegativize(sourceArray){
    const newArray = []
    sourceArray.forEach((number)=>{
        newArray.push(number*-1)
    })
    return newArray
}

function mapToNoChange(sourceArray){
    const newArray = []
    sourceArray.forEach((number)=>{
        newArray.push(number)
    })
    return newArray
}

function mapToDouble(sourceArray){
    const newArray = []
    sourceArray.forEach((number)=>{
        newArray.push(number*2)
    })
    return newArray
}

function mapToSquare(sourceArray){
    const newArray = []
    sourceArray.forEach((number)=>{
        newArray.push(number**2)
    })
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let newValue = parseInt(startingPoint)
    sourceArray.forEach((value)=>{
        newValue += parseInt(value)
    })
    return newValue
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
      }
      return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ){
        if (sourceArray[i]) return true
    }
    return false
}