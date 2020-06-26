var up_down = 15;
var left_right = 230;
var sleep_mode = 0;
var sleep_access = 0;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 610){}//limit the avatar to up
	else if(up_down == 330 && left_right >= 265){}
	else if(up_down == 470 && left_right >= 125){}
	else if(up_down == 575 && left_right == 90){}
	else{
		if(sleep_mode == 1){}
		else{
			holder_up = up_down + 35;
			document.getElementById('avatar_box').style.bottom = holder_up + "px";
			up_down = up_down + 35;			
		}
		if(up_down >= 400 && left_right == 230){
			sleep_access = 1;
			if(sleep_mode != 1){
				document.getElementById('sleep_action_notice').style.visibility = "visible";
			}			
		}
	}
}
function arrow_down(){
	document.getElementById('front').style.visibility = "visible";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_down = 0;
	if(up_down == 0){}//limit the avatar to go down
	else if(up_down == 15 && left_right >= 300){}
	else if(up_down == 15 && left_right <= 125){}
	else{
		if(sleep_mode == 1){}
		else{
			holder_down = up_down - 35;
			document.getElementById('avatar_box').style.bottom = holder_down + "px";
			up_down = up_down - 35;		
			to_map4()			
		}
		if(up_down >= 400 && left_right == 230){
			sleep_access = 1;
			if(sleep_mode != 1){
				document.getElementById('sleep_action_notice').style.visibility = "visible";
			}			
		}
		else if(up_down <= 365){
			document.getElementById('sleep_action_notice').style.visibility = "hidden";
			sleep_access = 0;
		}		
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 405){}//limit the avatar to go right
	else if(up_down == 610 && left_right == 55){}
	else if(up_down == 0 && left_right == 260){}
	else if(up_down >= 365 && left_right == 230){}
	else if(up_down >= 505 && left_right == 90){}
	else{
		if(sleep_mode == 1){}
		else{
			holder_right = left_right + 35;
			document.getElementById('avatar_box').style.left = holder_right + "px";
			left_right = left_right + 35;	
		}
		if(up_down >= 400 && left_right == 230){
			sleep_access = 1;
			if(sleep_mode != 1){
				document.getElementById('sleep_action_notice').style.visibility = "visible";
			}
		}
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right == -15){}//limit the avatar to go left
	else if(up_down == 0 && left_right == 140){}
	else{
		if(sleep_mode == 1){
			document.getElementById('avatar_box').style.bottom = "435px";
			document.getElementById('avatar_box').style.left = "230px";		
			document.getElementById('front').style.visibility = "hidden";
			document.getElementById('back').style.visibility = "hidden";
			document.getElementById('side1').style.visibility = "hidden";
			document.getElementById('side2').style.visibility = "visible";	
			document.getElementById('zzz_sleep_effect').style.opacity = "0";
			document.getElementById('night_time').style.visibility = "hidden";
			document.getElementById('night_time').style.backgroundColor = "";
			document.getElementById('blanket').style.zIndex = "1";		
			document.getElementById('cannot_use_skill').value = "0";			
			sleep_mode = 0;
		}
		else{
			holder_left = left_right - 35;
			document.getElementById('avatar_box').style.left = holder_left + "px";
			left_right = left_right - 35;			
		}

		if(left_right != 230){
			document.getElementById('sleep_action_notice').style.visibility = "hidden";
			sleep_access = 0;
		}
	}
}
function bed_sleep_action(){
	if(sleep_access == 1){
		document.getElementById('avatar_box').style.bottom = "420px"
		document.getElementById('avatar_box').style.left = "350px"
		document.getElementById('front').style.visibility = "hidden";
		document.getElementById('back').style.visibility = "hidden";
		document.getElementById('side1').style.visibility = "visible";
		document.getElementById('side2').style.visibility = "hidden";
		document.getElementById('sleep_action_notice').style.visibility = "hidden";
		document.getElementById('zzz_sleep_effect').style.opacity = "1";
		document.getElementById('night_time').style.visibility = "visible";
		document.getElementById('night_time').style.backgroundColor = "#0e141c";
		document.getElementById('blanket').style.zIndex = "3";
		document.getElementById('cannot_use_skill').value = "1"
		sleep_mode = 1;
	}
}
function to_map4(){
	if(up_down == -20){
		location.href="../../maps return/map4(fromMap4House_inside)/map4(fromHouse_inside).html";
	}
}