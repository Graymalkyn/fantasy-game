'use strict';
if (this.FantaSmash === undefined) this.FantaSmash = {};

var $startButton = $('.start-button');

  var redGuy;
  var blueGuy;
  var templateFunk;
  var html;


(function(context) {
  var $redName = $('.red-dude-all .info');
  var $blueName = $('.blue-dude-all .info');
  function startTheFight() {

    var damage = Math.floor(Math.random() * 3);
    redGuy.hp -= damage;
    html = templateFunk(redGuy);
    $('.red-dude-all .info').html(html);

    var damage = Math.floor(Math.random() * 3);
    blueGuy.hp -= damage;
    html = templateFunk(blueGuy);
    $('.blue-dude-all .info').html(html);

  }

  function start() {
    var templateHtml = $('.character').html();
    templateFunk = _.template(templateHtml);

    redGuy = context.generateCharacter();
    html = templateFunk(redGuy);
    $('.red-dude-all .info').html(html);

    blueGuy = context.generateCharacter();
    html = templateFunk(blueGuy);
    $('.blue-dude-all .info').html(html);

    $startButton.on('click', startTheFight);

  }

  context.start = start;




})(window.FantaSmash);
