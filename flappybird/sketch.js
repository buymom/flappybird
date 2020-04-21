var bird;
var pipes = [];
var gamescpre = 0;
var done = false;
let isbirddead = false;
let b = 1;
let n = 20;

function setup() {
	createCanvas(800,600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);
	text("Score: " + gamescpre,b,n);

	for(var i = pipes.length-1; i>=0; i--){
		console.log(i);

		pipes[i].update();
		pipes[i].show();

		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}

	if(pipes.length != 0){
		if(pipes[i].hits(bird)){

			console.log("HIT");
			isbirddead = pipes[i].hits(bird);
			bird.velocity = 0;
			bird.gravity = 0;
			bird.lift = 0;
			bird.y=height/2;
			bird.x=width/2;

			b = 370;
			n = 380;

		}else{
				gamescpre = gamescpre + 1;
			}
		}
	}

	bird.update();
	bird.show();

	if(frameCount % 100 == 0){
		if(isbirddead!= true){
		pipes.push(new Pipe());
	}

		}
}

function keyPressed(){
	if(key == ' '){
		bird.up();
		return true;
	}
}
