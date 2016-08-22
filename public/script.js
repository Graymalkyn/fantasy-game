'use strict';
if (this.FantaSmash === undefined) this.FantaSmash = {};



(function(context) {
  var $startButton = $('.start-button');
  var redGuy;
  var blueGuy;
  var templateFunk;
  var html;
  var intervalid;
  var $message;


  function doCombat(){
    var damage = Math.floor(Math.random() * 3);
    redGuy.hp -= damage;

    if (redGuy.hp <= 6){
      $('.red-dude-all .sprite').addClass('red-dude-hurt');
    }
    if (redGuy.hp <= 0){
      $('.red-dude-all .sprite').addClass('red-dude-dead');
    }

    var damage = Math.floor(Math.random() * 3);
    blueGuy.hp -= damage;

    if (blueGuy.hp <= 6){
      $('.blue-dude-all .sprite').addClass('blue-dude-hurt');
    }
    if (blueGuy.hp <= 0){
      $('.blue-dude-all .sprite').addClass('blue-dude-dead');
    }

    updateCombatantDisplay();

    if (redGuy.hp <1 || blueGuy.hp <1){
        endOfBattle();
    }
  }

  function endOfBattle(){
    clearInterval(intervalid);
    $message.text('Game Over, Man!!')

    $.ajax({
      url: '/api/leaderboard',
      method: 'POST',
      data: {
      redGuyName: redGuy.name,
      redguyHP: redGuy.hp,
      blueGuyName: blueGuy.name,
      blueGuyHP: blueGuy.hp
      }

    })
    .done(function(result){
      console.log( 'POST done', result);
    });
  }

  function startTheFight() {
    $('.start-button').toggle();
    intervalid = setInterval(doCombat, 1000);

    $message = $('.message');
    $message.text('Fighting!!!');



  }

  function updateCombatantDisplay(){

    var templateHtml = $('.character').html();
    templateFunk = _.template(templateHtml);

    html = templateFunk(redGuy);
    $('.red-dude-all .info').html(html);

    html = templateFunk(blueGuy);
    $('.blue-dude-all .info').html(html);


  }

  function start() {

    redGuy = context.generateCharacter();
    blueGuy = context.generateCharacter();

    updateCombatantDisplay();

    $startButton.on('click', startTheFight);

  }

  // function restart(){
  //   $startButton.on('click', start());
  // }


  context.start = start;




})(window.FantaSmash);
