function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
	jump = loadSound("C143MarioBros/jump.wav")
}

function setup() {
	canvas = createCanvas(gameConfig.screenX, gameConfig.screenY);
	canvas.parent("canvas")
	instializeInSetup(mario);
	// playBGMusic();
	video = createCapture(VIDEO)
	video.parent("video")
	video.size(455, 240)
	re = ml5.poseNet(video, listo)
	re.on("pose", RE)
}

function listo(){
	console.log("listo!")
}

function draw() {
	game()
}

narizx = 0
narizy = 0

function RE(res){
	if (res[0]) {
		narizx = res[0].pose.nose.x
		narizy = res[0].pose.nose.y
	}
}
