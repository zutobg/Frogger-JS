/* frog house */

var House = (function() {
	function House(x, y) {
		this.width = 48;
		this.height = 50;
		this.position = new Vector2(x, y);
		this.houseReached = false;

		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/frogHouse.png', 0, 0, 1);		
		this.boundingBox = new Rectangle(x, y - 20, this.width, this.height);
	}

	House.prototype.update = function() {
		this.animation.position.set(this.position.x, this.position.y);
		this.animation.update();

		if (this.houseReached) {
			
		} else {
			if (this.boundingBox.intersects(player.boundingBox) 
				&& (player.position.x >= this.position.x - 20 
				&& player.position.x <= this.position.x + 40)) {
				this.houseReached = true;
                player.housesReached += 1;               
				score.scoreCounter += 200;

				player.position.x = 248;
			    player.position.y = 560;
			    player.animation.position.set(player.position.x, player.position.y);
			    player.boundingBox.x = player.position.x-2;
			    player.boundingBox.y = player.position.y-2;
			    player.animation.update();
			    player.animation = new Animation(player.width, player.height, 0, 0, 1, 'assets/images/player/player_sprite.png', 3, 1, 1);

			    timer.countDown = 59;
				timer.startingTimer = (timer.currentTime.getHours() * 360
				+ timer.currentTime.getMinutes() * 60
				+ timer.currentTime.getSeconds());
				score.zoneOneReached = false;
				score.zoneTwoReached = false;
			};
		}
	}

	House.prototype.render = function(ctx) {
		if(this.houseReached) {
			this.animation.draw(ctx);
		}
	}

	return House;
}());