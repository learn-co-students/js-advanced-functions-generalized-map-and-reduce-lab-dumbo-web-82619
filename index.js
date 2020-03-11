function map(sourceArray, sourceFunction){
    return sourceArray.map(sourceFunction)
}

function reduce(sourceArray, sourceFunction, startingPoint = 0){
    if (sourceArray.every(element => typeof(element) === 'number')){
        return sourceArray.reduce((sourceFunction), startingPoint)
    }
    else {
        return sourceArray.reduce((sourceFunction))
    }
}