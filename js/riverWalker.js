/* Frogger have to ride some woods and turtles in the river */

var FrogOnObject = (function() {
	function FrogOnObject() {
		
	}
	
	FrogOnObject.prototype.update = function() {
		player.lastX = player.position.x;
		riverObjects.forEach(function(element){
			element.rided = false;
			if(element.boundingBox.intersects(player.boundingBox) 
			  && ((element.position.y <= player.position.y + 10) && 
			  (element.position.y >= player.position.y - 10)) 
			  && ((element.position.x <= player.position.x + 8) && 
			  (element.position.x  + element.width - 40 >= player.position.x - 10))) {
				element.rided = true;
				if(Math.floor(element.position.y / 40) == 4 
				   || Math.floor(element.position.y / 40) == 7) {
				   	if (element.animation.cropPostion.x >= 120 
				   		&& element.animation.cropPostion.x <= 840) {
				   		player.position.x -= element.velocity;
				   	} else {
				   		element.rided = false;
				   	}				
				} else {
						player.position.x += element.velocity;
				}

				player.boundingBox.x = player.position.x + 6;
			}
		});

		if (player.lastX == player.position.x && player.position.y < 281 
			&& player.lastY == player.position.y 
			&& (player.position.x > 0 && player.position.x < 480) 
			&& player.position.y > 120) {
			houses.forEach(function(house) {
		        if (!house.boundingBox.intersects(player.boundingBox)) {
		        	player.dead = true;
		        };
		    });
			
		};

		player.lastY = player.position.y;
	}
	
	return FrogOnObject;
}());