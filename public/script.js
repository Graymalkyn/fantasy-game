'use strict';
if (this.AppName === undefined) this.AppName = {};



(function(context) {

  function generateCombatants() {
    var redNameList = ['red raider', 'red roscoe', 'red ryder', 'ralph'];
    var blueNameList = ['blue bomber', 'blue blazer', 'blue marlin', 'bob'];
    var randomRedName = Math.floor(Math.random() * redNameList.length);
    // console.log(redNameList[randomRedName]);
    var randomBlueName = Math.floor(Math.random() * blueNameList.length);
    // console.log(blueNameList[randomBlueName]);

  }

  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateHp(){
    var redRandomHp = getRandom(5,10);
    var blueRandomHp = getRandom(5,10);

    var redGuyHp = redRandomHp;
    console.log(redGuyHp)

    var blueGuyHp = blueRandomHp;
    console.log(blueGuyHp)

  }



  function start() {
    generateCombatants();
    generateHp();
    //Call your code here
    // console.log('starting', context);

  }

  context.start = start;

})(window.AppName);
