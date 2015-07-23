/* In-game Score Counter*/

var Score = (function() {
	function Score(x, y) {
		this.position = new Vector2(x, y);
		this.scoreCounter = 0;
		this.charPosition;
		this.zoneOneReached = false;
		this.zoneTwoReached = false;
	}

	Score.prototype.update = function() {
		this.charPosition = player.position.y / 40;
		if ((this.charPosition >= 8 && this.charPosition < 9) && !this.zoneOneReached) {
		this.scoreCounter += 100;
		this.zoneOneReached = true;
		};

		if ((this.charPosition >= 3 && this.charPosition < 4) && !this.zoneTwoReached) {
		this.scoreCounter += 100;
		this.zoneTwoReached = true;
		};
	}

	Score.prototype.render = function(ctx) {
		ctx.fillStyle = "green";
		ctx.font = "26px sen-serif";
		ctx.fillText("Score: " + this.scoreCounter, this.position.x, this.position.y);
	}

	return Score;
}());