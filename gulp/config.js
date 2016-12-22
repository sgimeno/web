var PACKAGE = require('../package.json')

module.exports = {

  browserPort: process.env.PORT || 5000,
  UIPort: 5001,

  banner:
  '/*!\n' +
  ' * ' + PACKAGE.name + '\n' +
  ' * ' + PACKAGE.repository + '\n' +
  ' * ' + PACKAGE.license + '\n' +
  ' * v' + PACKAGE.version + '\n' +
  ' */\n',

  assetExtensions: [
    'js',
    'json',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  scripts: {
    src: './src/**/*.js',
    dest: './dist/'
  },

  views: {
    index: './src/index.html',
    src: ['./src/**/*.html', '!./src/index.html'],
    watch: ['./src/**/*.html', './src/index.html'],
    dest: './src/'
  },

  images: {
    src: './src/images/**/*',
    dest: './dist/images'
  },

  fonts: {
    src: './src/fonts/**/*',
    dest: './dist/css/fonts'
  },

  styles: {
    src: ['./src/scss/**/*.scss', './src/components/**/*.scss', './docs/**/*.scss'],
    dest: './dist/css/',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  json: {
    src: ['./test/json/**/*.json'],
    dest: './dist/json'
  },

  browserify: {
    bundleName: 'bundle.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  electron: {
    src: './index.js',
    dest: './dist/'
  },

  changelog: {
    dest: './CHANGELOG.md'
  },

  sourceDir: './src/',
  buildDir: './dist/',

  init: function () {
    this.views.watch = [
      this.views.index,
      this.views.src
    ]

    return this
  }
}.init()
