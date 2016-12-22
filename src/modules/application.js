var app = {}

module.exports = function () {
  console.log('app constructor')
  return app
}

app.run = function () {
  console.log('app run')
}
