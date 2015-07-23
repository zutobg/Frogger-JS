/* deadly river */

var River = (function() {
	function River(){
		this.height = 200;
		this.posY = 120;
		this.frogInRiver = false;
	}

	River.prototype.update = function() {
		if(Math.floor(player.position.y) <= this.posY 
			&& Math.floor(player.position.y) >= this.posY + this.height) {
			
		}
	}

	return River;
}());