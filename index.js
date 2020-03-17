// Your code here
const mapToNegativize = (array) => {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i] * -1;
        new_array.push(element);
    }
    return new_array;
}

const mapToNoChange = (array) => {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        new_array.push(element);
    }
    return new_array;
}

const mapToDouble = (array) => {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i] * 2;
        new_array.push(element);
    }
    return new_array;
}

const mapToSquare = (array) => {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i] ** 2;
        new_array.push(element);
    }
    return new_array;
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    for(let i = 0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i];
    }  
    return startingPoint;
}

const reduceToAllTrue = (sourceArray) => {
    let result = false;
    for(let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            result = true
        } else {
            return false;
        }
    }  
    return result;
}

const reduceToAnyTrue = (sourceArray) => {
    let result = false;
    for(let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            result = true;
            return result
        } 
    }  
    return result;
}


