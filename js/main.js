class Game{
  constructor(element){
    this.element = element;
    this.context = element.getContext('2d');
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.initBackground();
  }
  initBackground(){
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, this.width, this.height);
  }
}

$(document).ready(function() {
  var height = document.body.clientHeight;
  var width = document.body.clientWidth;
  $('#game_div').append('<canvas id="game_canvas" width='+width+' height='+height+'></canvas>');
  gmae = new Game(document.getElementById('game_canvas'));
})
