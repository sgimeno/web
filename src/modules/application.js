var $ = require('jquery');
var http = require('http');

function Application(){
  var self = this;
  var foo = 1;
  this.$button = $('button');
  this.$content = $('.some-content');


  this.$button.click(function(){
    http.get({ path : '/partials/beep.html' }, function (res) {
        var data = '';
        res.on('data', function (buf) {
            data += buf;
        });

        res.on('end', function () {
            self.$content.html(data);
        });
    });
  });

}

module.exports = Application;
