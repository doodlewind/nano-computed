function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newValue) {
      val = newValue
    }
  })
}

const demo = {}
defineReactive(demo, 'foo', 123)
console.log(demo.foo)
