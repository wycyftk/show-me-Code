/**
 * 实现对象的合并
 * a, b存在相同的 key属性, b 覆盖 a 属性值，如果 a、b 相同的key 对应的值均为对象，则再次进行对象合并。
 * 数组情况暂时不考虑
 * @param {*} target 
 * @param {*} source 
 */
function mergeObject(target, source) {
  // const targetKeys = Object.keys(target)
  const sourceKeys = Object.keys(source)

  sourceKeys.forEach(key => {
    if (typeof target[key] === 'object' && typeof source[key] === 'object') {
      mergeObject(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  })
  return target
}

console.log(mergeObject({
  a: 1,
  b: 2,
  c: {
    e: 'abc'
  }
}, {
  a: 2,
  d: 3,
  c: {
    f: 'dd'
  }
}))

function instanceofFn() {}


