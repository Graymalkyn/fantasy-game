if (this.FantaSmash === undefined) this.FantaSmash = {};

(function(context) {

  function generateRedName() {

    var redNameList = ['Red Raider', 'Red Roscoe', 'Red Ryder', 'Ralph', 'Rudolph the Red', 'Kung Fury', 'NEO', 'Duke',];
    var randomRedNameIndex = Math.floor(Math.random() * redNameList.length);
    var randomRedName = redNameList[randomRedNameIndex];
    return randomRedName;
  }

  function generateBlueName(){
      var blueNameList = ['Blue Bomber', 'Blue Blazer', 'Blue Marlin', 'Bob', 'Bucky the Barbarian', 'Zen Master', 'The Agent', 'Roscoe P. Coaltrain',];
      var randomBlueNameIndex = Math.floor(Math.random() * blueNameList.length);
      var randomBlueName = blueNameList[randomBlueNameIndex];
      return randomBlueName;
    }

  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateRedHp(){
    var redRandomHp = getRandom(5,10);
    return redRandomHp;
  }

  function generateBlueHp(){
    var blueRandomHp = getRandom(5,10);
    return blueRandomHp;
  }

  context.generateRedName = generateRedName;
  context.generateBlueName = generateBlueName;
  context.generateRedHp = generateRedHp;
  context.generateBlueHp = generateBlueHp;

})(window.FantaSmash);
