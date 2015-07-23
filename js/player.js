/**
 * Created by usa on 3/25/15.
 */
var Player = (function() {
    function Player(x, y) {
        this.width = 40;
        this.height = 40;
        this.dead = false;
        this.livesCount = 3;
        this.housesReached = 0;
        this.position = new Vector2(x, y);
        this.moved = false;
        this.lastX;
        this.lastY;
        //this.movement = {left : false, right : false, up : false, down : false};
        this.velocity = 38;

        this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/player/player_sprite.png', 3, 1, 1);

        //The boundaries for player, check for colide with enemies
        this.boundingBox = new Rectangle(x+6, y+6, this.width-12, this.height-12);
    }

    Player.prototype.update = function () {
        //if (this.movement.left) {
        //    this.animation = new Animation(this.width, this.height, 2, 3, 3, 'assets/images/player/player_sprite.png', 3, 3, 1);
        //    console.log('left');
        //} else if (this.movement.right) {
        //    this.animation = new Animation(this.width, this.height, 3, 3, 3, 'assets/images/player/player_sprite.png', 3, 3, 1);
        //    console.log('right');
        //} else if (this.movement.up) {
        //    this.animation = new Animation(this.width, this.height, 0, 3, 3, 'assets/images/player/player_sprite.png', 3, 3, 1);
        //    console.log('up');
        //} else if (this.movement.down) {
        //    this.animation = new Animation(this.width, this.height, 1, 3, 3, 'assets/images/player/player_sprite.png', 3, 3, 1);
        //    console.log('down');
        //}
		if (this.dead){
			this.animation = new Animation(this.width, this.height, 0, 10, 1, 'assets/images/spritemap.png', 1, 11, 1);
			
            alert("You lost a life! Be careful, you have " + this.livesCount + "lives remaining!")
        }
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x+6;
        this.boundingBox.y = this.position.y+6;
        this.animation.update();
    };

    Player.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Player;
}());