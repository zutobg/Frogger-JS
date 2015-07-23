/* Score bonus item */

var Bonus = (function() {
	function Bonus(x, y) {
		this.width = 32;
		this.height = 32;
		this.position = new Vector2(x, y);
		this.medal = true;
		
		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/bonus.png', 0, 0, 1);		
		this.boundingBox = new Rectangle(x + 8, y + 8, this.width, this.height);
	}

	Bonus.prototype.update = function() {
		if(this.medal) {
			this.animation.position.set(this.position.x, this.position.y);
			this.boundingBox.x = this.position.x + 8;
			this.boundingBox.y = this.position.y + 8;
			this.animation.update();
			
			if(this.boundingBox.intersects(player.boundingBox)) {
				score.scoreCounter += 150;
				this.medal = false;
			}
		}
	};

	Bonus.prototype.render = function(ctx) {
		if(this.medal) {
			this.animation.draw(ctx);
		}		
	};

	return Bonus;
}());