var up_down = 600;
var left_right = 220;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 620){}//limit the avatar to up
	else if(up_down == 180 && left_right == 220){}
	else if(up_down == 180 && left_right == 240){}
	else if(up_down == 180 && left_right == 260){}
	else if(up_down == 180 && left_right == 280){}
	else if(up_down == 600 && left_right <= 160){}
	else if(up_down == 600 && left_right >= 280){}
	else{
		holder_up = up_down + 20;
		document.getElementById('avatar_box').style.bottom = holder_up + "px";
		up_down = up_down + 20;
		to_map5()
		tree_overlay_effect_up()
	}
}
function arrow_down(){
	document.getElementById('front').style.visibility = "visible";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_down = 0;
	if(up_down == 0){}//limit the avatar to go down
	else if(up_down == 200 && left_right == 220){}
	else if(up_down == 200 && left_right == 240){}
	else if(up_down == 200 && left_right == 260){}
	else if(up_down == 200 && left_right == 280){}
	else if(up_down == 20 && left_right <= 160){}
	else if(up_down == 20 && left_right >= 280){}
	else{
		holder_down = up_down - 20;
		document.getElementById('avatar_box').style.bottom = holder_down + "px";
		up_down = up_down - 20;
		tree_overlay_effect_down()
		to_map7()
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 420){}//limit the avatar to go right
	else{
		holder_right = left_right + 20;
		document.getElementById('avatar_box').style.left = holder_right + "px";
		left_right = left_right + 20;
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right == 20){}//limit the avatar to go left
	else{
		holder_left = left_right - 20;
		document.getElementById('avatar_box').style.left = holder_left + "px";
		left_right = left_right - 20;
	}
}
function tree_overlay_effect_down(){
	if(up_down == 180 && left_right >= 20){
		document.getElementById('avatar_box').style.zIndex = "3";		
	}
}
function tree_overlay_effect_up(){
	if(up_down == 200 && left_right >= 20){	
		document.getElementById('avatar_box').style.zIndex = "1";	
	}
}

function to_map5(){
	if(up_down == 620){
		location.href ="../../maps return/map5(fromMap6)/map5(fromMap6).html";
	}
}
function to_map7(){
	if(up_down == 0){
		location.href ="../%map7/map7.html";
	}	
}