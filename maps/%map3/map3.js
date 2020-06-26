var up_down = 40;
var left_right = 200;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 520){}//limit the avatar to up
	else if(left_right == 400 && up_down == 320){}
	else{
		holder_up = up_down + 40;
		document.getElementById('avatar_box').style.bottom = holder_up + "px";
		up_down = up_down + 40;
	}
}
function arrow_down(){
	document.getElementById('front').style.visibility = "visible";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_down = 0;
	if(up_down == -40){}//limit the avatar to go down
	else if(up_down == 40 && left_right > 220){}//para hindi lumabas ung map exit notice kahit wala pa sa exit
	else if(up_down == 40 && left_right < 150){}//para hindi lumabas ung map exit notice kahit wala pa sa exit
	else if(left_right == 400 && up_down == 240){}
	else if(left_right == 0 && up_down <= 480){}	
	else if(left_right == -20 && up_down < 500){}
	else{
		holder_down = up_down - 40;
		document.getElementById('avatar_box').style.bottom = holder_down + "px";
		up_down = up_down - 40;
		to_map2()
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 440){}//limit the avatar to go right
	else if(up_down == 0 && left_right == 200){}
	else if(left_right == 360 && up_down >= 360){}
	else if(left_right == 360 && up_down <= 240){}
	else{
		holder_right = left_right + 40;
		document.getElementById('avatar_box').style.left = holder_right + "px";
		left_right = left_right + 40;
		to_map4();	
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right <= 0){}//limit the avatar to go left	
	else if(up_down == 0 && left_right < 180){}	
	else if(left_right == 40 && up_down <= 440){}
	else if(left_right == 0 && up_down <= 440){}	
	else{
		holder_left = left_right - 40;
		document.getElementById('avatar_box').style.left = holder_left + "px";
		left_right = left_right - 40;
	}
}
function to_map4(){
	if(left_right == 440){
		location.href="../../maps/%map4/map4.html";
	}
}
function to_map2(){
	if(up_down == -40){
		location.href="../../maps return/map2(fromMap3)/map2(fromMap3).html";
	}	
}