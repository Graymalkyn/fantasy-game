'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  var $redName = $('.red-dude-all .dude-name');
  var $blueName = $('.blue-dude-all .dude-name');

  function generateCombatants() {

    var redNameList = ['Red Raider', 'Red Roscoe', 'Red Ryder', 'Ralph', 'Rudolph the Red'];
    var randomRedNameIndex = Math.floor(Math.random() * redNameList.length);
    var randomRedName = redNameList[randomRedNameIndex];
    $redName.text(randomRedName);

    var blueNameList = ['Blue Bomber', 'Blue Blazer', 'Blue Marlin', 'Bob', 'Bucky the Barbarian'];
    var randomBlueNameIndex = Math.floor(Math.random() * blueNameList.length);
    var randomBlueName = blueNameList[randomBlueNameIndex];
    $blueName.text(randomBlueName);

  }

  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateHp(){
    var redRandomHp = getRandom(5,10);
    var blueRandomHp = getRandom(5,10);

    var redGuyHp = redRandomHp;
    var blueGuyHp = blueRandomHp;

  }



  function start() {
    generateCombatants();
    generateHp();
    //Call your code here
    // console.log('starting', context);

  }

  context.start = start;

})(window.AppName);
