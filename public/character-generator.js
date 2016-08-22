if (this.FantaSmash === undefined) this.FantaSmash = {};

(function(context) {

  function generateName() {
    var NameList = ['Ralph', 'Rudolph the Red', 'Kung Fury', 'NEO', 'Daisy Duke', 'Flash Gordon', 'The Dude', 'Bob', 'Bucky the Barbarian', 'Zen Master', 'Agent X', 'Roscoe P. Coaltrain', 'Ming the Merciless', 'The Self Soiler', 'Billy the Bully', 'Ragnarok', 'Valkyrie', 'Party Pooper', 'Underdog', 'Cosmic Cow', 'The Man With No Name', 'Smooth Operator', 'Goodfella', 'Samsquanch', 'Betty White', 'Fonzie'];
    var randomNameIndex = Math.floor(Math.random() * NameList.length);
    var randomName = NameList[randomNameIndex];
    return randomName;
  }

  function generateHP(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCharacter(){
    var name = generateName();
    var hp = generateHP(5,10);

    return { name: name, hp: hp };
 }

  context.generateCharacter = generateCharacter;

})(window.FantaSmash);
