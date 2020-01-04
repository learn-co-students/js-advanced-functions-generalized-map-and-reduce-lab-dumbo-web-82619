function map(arr, func) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]))
  }
  return result
}

function reduce(arr, func, init = 0) {
  let result = !!init ? init : arr[0]
  for (let i = !!init ? 0 : 1; i < arr.length; i++) {
    result = func(arr[i], result)
  }
  return result                                   
}