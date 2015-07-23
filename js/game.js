/**
 * Created by usa on 3/29/15.
 */
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var startButton = new Image();
startButton.src = 'assets/images/Start_Game_Sprite.png';
ctx.drawImage(startButton, -150, 50, 800, 600);
document.getElementById('start-button-clicked').onclick = function(){
    startGame();
};


function startGame() {
    window.location = 'game.html'
}