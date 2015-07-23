/**
 * Created by Paco on 27.3.2015 г..
 */
var LogMedium = (function() {
    function LogMedium(x, y) {
        this.width= 140;
        this.height = 40;
        this.velocity = 1.5; //1 block
        this.position = new Vector2(x, y);
        this.rided = false;

        this.animation = new Animation(this.width, this.height, 3, 0, 1, 'assets/images/spritemap.png', 1, 3, 1); //we need sprite for log here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    LogMedium.prototype.update = function () {
        this.position.x += this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
        if (this.position.x > 480){
            this.position.x = -320;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x;
            this.boundingBox.y = this.position.y;
            this.animation.update();
            if (this.rided) {
                player.position.x -= 800;
            };
        }
    };

    LogMedium.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return LogMedium;

}());