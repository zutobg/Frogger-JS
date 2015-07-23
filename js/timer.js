/* In-game Timer*/

var Timer = (function() {
	function Timer(x, y){
		this.position = new Vector2(x, y);
		this.startingTime = new Date();
		this.startingTimer = (this.startingTime.getHours() * 360
			+ this.startingTime.getMinutes() * 60
			+ this.startingTime.getSeconds());
		this.countDown = 59;
	}

	Timer.prototype.update = function() {
		this.currentTime = new Date();
		this.currentTimer = (this.currentTime.getHours() * 360
			+ this.currentTime.getMinutes() * 60
			+ this.currentTime.getSeconds());

		
		this.timerSeconds = (this.currentTimer - this.startingTimer) % 60;
		
		this.countDown = 59 - this.timerSeconds;
		this.timerText = "time: " + this.countDown;
		if (Math.floor(this.countDown) == 0) {
			player.dead = true;
		};

		if (player.dead) {
			this.countDown = 59;
			this.startingTimer = (this.currentTime.getHours() * 360
			+ this.currentTime.getMinutes() * 60
			+ this.currentTime.getSeconds());
		};
	}

	Timer.prototype.render = function(ctx) {
		ctx.fillStyle = "green";
		ctx.font = "26px sen-serif";
		ctx.fillText(this.timerText, this.position.x - 40, this.position.y);
	};

	return Timer;
}());