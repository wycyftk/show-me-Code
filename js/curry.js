/**
 * sum(1,2)(3)()
 * sum(1,2,3)()
 */
function sum () {
  let arg = Array.prototype.slice.call(arguments)
  return function fn() {
    const innerArg = Array.prototype.slice.call(arguments)
    arg = arg.concat(innerArg)
    if (innerArg.length > 0) {
      return fn
    } else {
      return arg.reduce((acc, item) => {
        return acc + item
      }, 0)
    }
  }
}

console.log(sum(1, 2)(3)())