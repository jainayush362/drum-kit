document.querySelector('div.w').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/crash.mp3');
	music.play();
});
document.querySelector('div.a').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/kick-bass.mp3');
	music.play();
});
document.querySelector('div.s').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/snare.mp3');
	music.play();
});
document.querySelector('div.d').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/tom-1.mp3');
	music.play();
});
document.querySelector('div.j').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/tom-2.mp3');
	music.play();
});
document.querySelector('div.k').addEventListener('click', function myfunc(){
	var music = new Audio('./sounds/tom-3.mp3');
	music.play();
});

document.addEventListener('keydown',function(e){
if(e.keyCode == 87){
	var music = new Audio('./sounds/crash.mp3');
	music.play();
}
else if(e.keyCode == 65){
	var music = new Audio('./sounds/kick-bass.mp3');
	music.play();
}
else if(e.keyCode == 83){
	var music = new Audio('./sounds/snare.mp3');
	music.play();
}
else if(e.keyCode == 68){
	var music = new Audio('./sounds/tom-1.mp3');
	music.play();
}
else if(e.keyCode == 74){
	var music = new Audio('./sounds/tom-2.mp3');
	music.play();
}
else if(e.keyCode == 75){
	var music = new Audio('./sounds/tom-3.mp3');
	music.play();
}
else{
	alert("Hit the Correct Key!");
}
});