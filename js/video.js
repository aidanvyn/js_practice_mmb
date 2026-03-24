/* VIDEO JS */

var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

window.addEventListener("load", function() {
    console.log("Hi")
})

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 	video.play();
 	volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing video");
	console.log("Video speed was " + video.playbackRate);

	video.playbackRate *= .9;

	console.log("Video speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up video");
	console.log("Video speed was " + video.playbackRate);

	video.playbackRate /= .9;

	console.log("Video speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	console.log("Current location is " + video.currentTime);

	newTime = video.currentTime + 10;

	if(newTime > video.duration) {
		console.log("Exceeded length");
		newTime = 0;
		video.pause();
	}//if
	video.currentTime = newTime;
	console.log("New  location is " + video.currentTime);
})

document.querySelector("#muteButton").addEventListener("click", function() {
	console.log("Mute toggle");
	console.log(video.muted);

	if(video.muted == true) {
		console.log("Unuting video");

		video.muted = false;

		document.querySelector("#muteButton").innerHTML = "Mute";
	}//if
	else if(video.muted == false) {
		console.log("Muting video");

		video.muted = true;

		document.querySelector("#muteButton").innerHTML = "Unmute";
	}//if
})

document.querySelector("#slider").addEventListener("click", function() {
	console.log("In volume slider");

	video.volume = document.querySelector("#slider").value / 100;

	volume_display.innerHTML = video.volume*100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("In setStyle");
    video.classList.toggle('oldSchool');
})


/* SORTING JS */

