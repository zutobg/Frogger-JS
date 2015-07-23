/**
 * Created by Paco on 27.3.2015 г..
 */
var Turtle = (function() {
    function Turtle(x, y) {
        this.width= 120;
        this.height = 40;
        this.velocity = 1; //1 block
        this.position = new Vector2(x, y);
        this.rided = false;

        this.animation = new Animation(this.width, this.height, 0, 0, 8, 'assets/images/turtlesprite.png', 1.5, 8, 1); //we need sprite for turtle here, @param see framework.js

        this.boundingBox = new Rectangle(x-2, y-2, this.width-4, this.height-4); //The boundaries of the object to check collision with player
    }

    Turtle.prototype.update = function () {
        this.position.x -= this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x+2;
        this.boundingBox.y = this.position.y+2;
        this.animation.update();
        if (this.position.x < -120){
            this.position.x = 600;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x+2;
            this.boundingBox.y = this.position.y+2;
            this.animation.update();
            if (this.rided) {
                player.position.x += 720;
            }
        }
    };

    Turtle.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Turtle;

}());