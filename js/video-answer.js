
var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

function welcome(){
	console.log("Good job opening the window")
}

function play() {
	console.log("Play Video");
	video.play();
	volume_display.innerHTML = video.volume *100 + "%"
}

function pause() {
	console.log("Pause Video");
	video.pause()
}

function slower() {
	console.log("In slower");
	console.log("current speed is " + video.playBackRate)
	video.playBackRate *= .9
	console.log("current speed is " + video.playBackRate)
}

function faster() {
	console.log("In Faster");
	console.log("current speed is " + video.playBackRate)
	video.playBackRate /= .9
	console.log("current speed is " + video.playBackRate)
}

function skip() {
	console.log("In Skip");
	console.log("Duration: " + video.duration + " seconds");
	console.log("current location is " + video.currentTime)
	newTime = video.currentTime + 20
	if (newTime > video.duration){
		console.log("Exceeded length")
		newTime = 0
		video.pause()
	}
	video.currentTime = newTime
	console.log("current location is " + video.currentTime)
}
function toggleMute() {
	console.log("In Toggle Mute");
	console.log(video.muted)
	muteButton = document.querySelector("#muteButton")
	if (video.muted){
		video.muted = false;
		muteButton.innerHTML = "Mute"

	}
	else{
		video.muted = true;
		muteButton.innerHTML = "Unmute"
	}
}

function adjustVolume(){
	slider = document.querySelector("#slider")
	console.log(slider.value)
	video.volume = slider.value / 100;
	volume_display.innerHTML = video.volume *100 + "%"
}

function setStyle(){
	console.log("In setStyle")
	video.classList.toggle('oldSchool')
}

