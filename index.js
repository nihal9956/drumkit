for(var i=0;i<7;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

	var buttonPressed=this.innerHTML;
	doSound(buttonPressed);
	setAnimation(buttonPressed);
})



}





document.addEventListener("keypress",function(event){

doSound(event.key);
setAnimation(event.key);
});

function doSound(key){
switch(key){

	case "w":
	var tom1=new Audio("sounds/tom-1.mp3");
	tom1.play();
	break;
    
    case "a":
	var tom1=new Audio("sounds/tom-2.mp3");
	tom1.play();
	break;
    
    case "s":
	var tom1=new Audio("sounds/tom-3.mp3");
	tom1.play();
	break;

    case "d":
	var tom1=new Audio("sounds/tom-4.mp3");
	tom1.play();
	break;

    case "j":
	var tom1=new Audio("sounds/snare.mp3");
	tom1.play();
	break;
    
    case "k":
	var tom1=new Audio("sounds/kick-bass.mp3");
	tom1.play();
	break;

    case "l":
	var tom1=new Audio("sounds/crash.mp3");
	tom1.play();
	break;
default:
console.log("key");


}

}
function setAnimation(currentkey){

	document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(function(){
document.querySelector("."+currentkey).classList.remove("pressed");
},100);


}