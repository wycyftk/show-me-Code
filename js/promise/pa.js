/**
 * u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
 */
function User() {
  this.queue = Promise.resolve()
  this.console = function(text) {
    this.queue = this.queue.then(() => {
      console.log(text)
    })
    return this
  }

  this.setTimeout = function(time) {
    this.queue = this.queue.then(() => {
      return new Promise(res => {
        setTimeout(() => {
          res()
        }, time);
      })
    })
    return this
  }
}

const u = new User()

u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')