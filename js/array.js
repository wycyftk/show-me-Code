
/**
 * 数组打平api，迭代器形式
 * @param {*} arr 数组
 */
function flatByIterator(arr) {
  const queue = [arr]
  const res = []

  while (queue.length) {
    const el = queue.shift()

    if (Array.isArray(el)) {
      let inArray = false
      el.forEach(chEl => {
        if (Array.isArray(chEl)) {
          inArray = true
          queue.push(chEl)
        } else {
          if (inArray) {
            queue.push(chEl)
          } else {
            res.push(chEl)
          }
        }
      })
    } else {
      res.push(el)
    }
  }
  return res
}

/**
 * 数组打平api，递归形式
 */
function flatByRecursion(arr) {
  const res = []
  function dfs(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        dfs(item)
      } else {
        res.push(item)
      }
    })
  }
  dfs(arr)
  return res
}
console.log(flatByIterator([1,2,['3',4,'5',[6,[7,8],9,[10, 11]]]]))
// console.log(flatByRecursion([1,2,['3',4,'5',[6,[7,8],9,[10, 11]]]]))