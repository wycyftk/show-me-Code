
/**
 * 数组打平api，迭代器形式
 * @param {*} arr 数组
 */
function flatByIterator(arr) {
  const queue = [arr]
  const res = []

  if (!Array.isArray(arr)) {
    return res
  }

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
  if (!Array.isArray(arr)) {
    return res
  }
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
// console.log(flatByIterator([1,2,['3',4,'5',[6,[7,8],9,[10, 11]]]]))
// console.log(flatByRecursion([1,2,['3',4,'5',[6,[7,8],9,[10, 11]]]]))

/**
 * 数组的reduce
 * @param {*} arr 
 * @param {*} cb 
 * @param {*} initVal 
 * @returns 
 */
function reduce(arr, cb, initVal) {
  if (!Array.isArray(arr)) {
    return []
  }

  if (arr.length <= 0) {
    return initVal
  }

  let res = typeof initVal !== 'undefined' ? initVal : arr[0]

  for (let i = 0; i < arr.length; i++) {
    res = cb(initVal, arr[i], i, arr)
  }
  return res
}

console.log(reduce([1,2,3,4,5], (acc, item) => {
  return acc + item
}, 0))

/**
 * 反转数组
 * @param {*} arr 
 * @returns 
 */
function reverse(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }

  if (arr.length === 0) {
    return arr
  }

  let temp = arr[0]
  const index = arr.length - 1

  for (let i = 0; i < Math.ceil(index / 2); i++) {
    temp = arr[i]
    arr[i] = arr[index - i]
    arr[index - i] = temp
  }
}

const a = [1,2,3,4,5]
reverse(a)
console.log(a)
