const test = require('tape')
const App = require('../../src/modules/application')

test('Application is a function', assert => {
  const actual = new App()

  assert.equal(typeof App, 'function', 'App should be a constructor function')
  assert.equal(typeof actual, 'object', 'new App() should return an object')
  assert.end()
})
