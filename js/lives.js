/* Player lives counter + image drawing */

var Lives = (function() {
	function Lives(x, y) {
		this.width = 32;
		this.height = 32;
		this.position = new Vector2(x, y);
		
		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/frogHeart.png', 0, 0, 1);		
	};

	Lives.prototype.update = function() {
		this.animation.position.set(this.position.x, this.position.y);
		this.animation.update();

		if (player.dead) {
		    player.livesCount -= 1;
		    player.dead = false;

		    player.position.x = 248;
		    player.position.y = 560;
		    player.animation.position.set(player.position.x, player.position.y);
		    player.boundingBox.x = player.position.x-2;
		    player.boundingBox.y = player.position.y-2;
		    player.animation.update();
		    player.animation = new Animation(player.width, player.height, 0, 0, 1, 'assets/images/player/player_sprite.png', 3, 1, 1);
		    console.log(player.position);
		    timer.countDown = 59;
			timer.startingTimer = (timer.currentTime.getHours() * 360
			+ timer.currentTime.getMinutes() * 60
			+ timer.currentTime.getSeconds());

			score.zoneOneReached = false;
			score.zoneTwoReached = false;
		};
		if(player.livesCount == 0) {
			window.location.href = 'index.html';
		}

		if (player.housesReached == 4){
			alert("Congratulations! Mission accomplished!");
			window.location.href = 'index.html';
		}
	};

	Lives.prototype.render = function(ctx) {
		this.animation.draw(ctx);
	};

	return Lives;
}());