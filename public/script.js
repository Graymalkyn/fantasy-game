'use strict';
if (this.FantaSmash === undefined) this.FantaSmash = {};

(function(context) {
  var $redName = $('.red-dude-all .info');
  var $blueName = $('.blue-dude-all .info');


  function start() {
    var templateHtml = $('.character').html();
    var templateFunk = _.template(templateHtml);
    var html = templateFunk(context.generateCharacter());
    $redName.html(html);

    var templateHtml = $('.character').html();
    var templateFunk = _.template(templateHtml);
    var html = templateFunk(context.generateCharacter());
    $blueName.html(html);

  }

  context.start = start;

})(window.FantaSmash);
