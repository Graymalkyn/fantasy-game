'use strict';
if (this.FantaSmash === undefined) this.FantaSmash = {};

(function(context) {

  function generateCombatants() {
    var $redName = $('.red-dude-all .dude-name');
    var $blueName = $('.blue-dude-all .dude-name');

    $redName.text(context.generateRedName());
    $blueName.text(context.generateBlueName());
  }

  function generateHp(){
    var $redHp = $('.red-dude-all .dude-hp');
    var $blueHp = $('.blue-dude-all .dude-hp');

    $redHp.text(context.generateRedHp());
    $blueHp.text(context.generateBlueHp());
  }


  function start() {
    generateCombatants();
    generateHp();
  }

  context.start = start;

})(window.FantaSmash);
