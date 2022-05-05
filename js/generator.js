function* G() {
  yield 1
  return 2
}

G.prototype.sayHi = function() {
  console.log('hi')
}

const g = G()

console.log(g instanceof G)
g.sayHi()

const f = new G()
