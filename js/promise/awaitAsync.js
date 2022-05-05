let count = 1

function getData() {
  return new Promise(res => {
    setTimeout(() => {
      res(++count)
    }, 1000);
  })
}

function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}

// const run = testG()
// const dataPromise = run.next()

// dataPromise.then(data => {
//   console.log(data)

//   const dataPromise2 = run.next()
//   dataPromise2.then(data => {
//     console.log(data)
//   })
// })

var gen = testG()

var dataPromise = gen.next()

dataPromise.value.then((value1) => {
    // data1的value被拿到了 继续调用next并且传递给data
    var data2Promise = gen.next(value1)
    
    // console.log('data: ', data);
    // 此时就会打印出data
    
    data2Promise.value.then((value2) => {
        // data2的value拿到了 继续调用next并且传递value2
         gen.next(value2)
         
        // console.log('data2: ', data2);
        // 此时就会打印出data2
    })
})

function asyncToGenerate(fn) {
  return function () {
    const gen = fn.call(this, arguments)
    return new Promise((res, rej) => {
      function step(fnName, arg) {
        let genRes = null
        try {
          genRes = gen[fnName][arg]
        } catch (err) {
          return rej(err)
        }

        const { value, done } = genRes
        if (done) {
          return res(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step('next')
    })
  }
}

const res = asyncToGenerate(testG)

res.then(data => console.log(data))