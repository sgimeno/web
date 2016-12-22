var fs = require('fs')

fs.readdirSync('./gulp/tasks/')
  .filter(function (filename) {
    return filename.match(/\.js$/i)
  })
  .forEach(function (task) {
    require('./tasks/' + task)
  })
