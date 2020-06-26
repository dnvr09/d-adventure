var up_down = 80;
var left_right = 200;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 100){}//limit the avatar to up
	else if(up_down == 80 && left_right <= 180){}
	else if(up_down == 80 && left_right >= 260){}
	else{
		holder_up = up_down + 20;
		document.getElementById('avatar_box').style.bottom = holder_up + "px";
		up_down = up_down + 20;
		to_map1()
	}
}
function arrow_down(){
	document.getElementById('front').style.visibility = "visible";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_down = 0;
	if(up_down == 20){}//limit the avatar to go down
	else{
		holder_down = up_down - 20;
		document.getElementById('avatar_box').style.bottom = holder_down + "px";
		up_down = up_down - 20;
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 460){}//limit the avatar to go right
	else{
		holder_right = left_right + 20;
		document.getElementById('avatar_box').style.left = holder_right + "px";
		left_right = left_right + 20;
		to_map7()
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right == 0){}//limit the avatar to go left
	else{
		holder_left = left_right - 20;
		document.getElementById('avatar_box').style.left = holder_left + "px";
		left_right = left_right - 20;
	}
}
function to_map1(){
	if(up_down == 100){
		location.href="../../maps/%map1/map1.html";
	}
}
function to_map7(){
	if(left_right == 460){
		location.href="../map7(fromMap8)/map7(fromMap8).html";
	}
}