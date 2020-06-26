var up_down = 80;
var left_right = 0;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 620){}//limit the avatar to up
	else if(up_down == 180 && left_right == 40){}
	else if(up_down == 180 && left_right == 60){}
	else if(up_down == 180 && left_right == 80){}
	else if(up_down == 180 && left_right == 100){}
	else if(up_down == 180 && left_right == 120){}
	else if(up_down == 320 && left_right >= 380){}
	else if(up_down == 600 && left_right <= 160){}
	else if(up_down == 600 && left_right >= 280){}
	else if(up_down == 120 && left_right == 0){}
	else if(up_down == 140 && left_right == 20){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 140 && left_right == 40){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 140 && left_right == 60){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 160 && left_right == 80){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 160 && left_right == 100){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 160 && left_right == 120){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 160 && left_right == 140){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 160 && left_right == 160){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 180 && left_right == 180){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "200px"
		up_down = 200;
	}
	else if(up_down == 180 && left_right == 200){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "200px"
		up_down = 200;
	}
	else if(up_down == 180 && left_right == 220){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 200 && left_right == 240){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 200 && left_right == 260){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 220 && left_right == 280){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 220 && left_right == 300){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 220 && left_right == 320){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 220 && left_right == 340){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "260px"
		up_down = 260;
	}
	else if(up_down == 240 && left_right == 360){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "260px"
		up_down = 260;
	}
	else if(up_down == 240 && left_right == 380){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "280px"
		up_down = 280;
	}
	else if(up_down == 260 && left_right == 400){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "280px"
		up_down = 280;
	}
	else if(up_down == 260 && left_right == 420){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.bottom = "280px"
		up_down = 280;
	}
	else{
		holder_up = up_down + 20;
		document.getElementById('avatar_box').style.bottom = holder_up + "px";
		up_down = up_down + 20;
		overlay_effect_tree1_up()
		overlay_effect_tree2_up()
		to_map6()
	}
}
function arrow_down(mode){
	document.getElementById('front').style.visibility = "visible";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_down = 0;
	if(up_down == 0){}//limit the avatar to go down
	else if(up_down == 200 && left_right == 40){}
	else if(up_down == 200 && left_right == 60){}
	else if(up_down == 200 && left_right == 80){}
	else if(up_down == 200 && left_right == 100){}
	else if(up_down == 200 && left_right == 120){}
	else if(up_down == 340 && left_right >= 380){}
	else if(up_down == 20 && left_right <= 160){}
	else if(up_down == 20 && left_right >= 280){}
	else if(up_down == 160 && left_right == 20){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "140px"
		up_down = 140;
	}
	else if(up_down == 160 && left_right == 40){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "140px"
		up_down = 140;
	}
	else if(up_down == 160 && left_right == 60){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "140px"
		up_down = 140;
	}
	else if(up_down == 180 && left_right == 80){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 180 && left_right == 100){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 180 && left_right == 120){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 180 && left_right == 140){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 180 && left_right == 160){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "160px"
		up_down = 160;
	}
	else if(up_down == 200 && left_right == 180){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 200 && left_right == 200){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 220 && left_right == 220){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "180px"
		up_down = 180;
	}
	else if(up_down == 220 && left_right == 240){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "200px"
		up_down = 200;
	}
	else if(up_down == 240 && left_right == 260){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "200px"
		up_down = 200;
	}
	else if(up_down == 240 && left_right == 280){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 240 && left_right == 300){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 240 && left_right == 320){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 260 && left_right == 340){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "220px"
		up_down = 220;
	}
	else if(up_down == 260 && left_right == 360){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 280 && left_right == 380){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "240px"
		up_down = 240;
	}
	else if(up_down == 280 && left_right == 400){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "260px"
		up_down = 260;
	}
	else if(up_down == 280 && left_right == 420){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.bottom = "260px"
		up_down = 260;
	}
	else{
		holder_down = up_down - 20;
		document.getElementById('avatar_box').style.bottom = holder_down + "px";
		up_down = up_down - 20;		
		overlay_effect_tree1_down()
		overlay_effect_tree2_down()
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 420){}//limit the avatar to go right
	else if(up_down == 160 && left_right == 40){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "80px"
		left_right = 80;		
	}
	else if(up_down == 180 && left_right == 160){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "180px"
		left_right = 180;		
	}
	else if(up_down == 200 && left_right == 200){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "240px"
		left_right = 240;		
	}
	else if(up_down == 220 && left_right == 240){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "280px"
		left_right = 280;		
	}
	else if(up_down == 240 && left_right == 320){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "360px"
		left_right = 360;		
	}
	else if(up_down == 260 && left_right == 360){
		avatar_swimming_on()
		document.getElementById('avatar_box').style.left = "400px"
		left_right = 400;		
	}
	else{
		holder_right = left_right + 20;
		document.getElementById('avatar_box').style.left = holder_right + "px";
		left_right = left_right + 20;
		overlay_effect_tree1_right()
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right == -20){}//limit the avatar to go left	
	else if(up_down >= 140 && left_right == 20){}
	else if(up_down == 160 && left_right == 80){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "40px"
		left_right = 40;		
	}
	else if(up_down == 180 && left_right == 180){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "160px"
		left_right = 160;		
	}
	else if(up_down == 200 && left_right == 240){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "200px"
		left_right = 200;		
	}
	else if(up_down == 220 && left_right == 280){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "240px"
		left_right = 240;		
	}
	else if(up_down == 240 && left_right == 360){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "320px"
		left_right = 320;		
	}
	else if(up_down == 260 && left_right == 400){
		avatar_swimming_off()
		document.getElementById('avatar_box').style.left = "360px"
		left_right = 360;		
	}
	else{
		holder_left = left_right - 20;
		document.getElementById('avatar_box').style.left = holder_left + "px";
		left_right = left_right - 20;	
		overlay_effect_tree1_left()
		to_map8()
	}
}
function avatar_swimming_on(){
	document.getElementById('avatar_box').style.height = "50px";	
	document.getElementById('front').src = "../../character/avatar_swimming/avatar_swimming_active/avatar_swimming_front.png";
	document.getElementById('back').src = "../../character/avatar_swimming/avatar_swimming_active/avatar_swimming_back.png";
	document.getElementById('side1').src = "../../character/avatar_swimming/avatar_swimming_active/avatar_swimming_side1.png";
	document.getElementById('side2').src = "../../character/avatar_swimming/avatar_swimming_active/avatar_swimming_side2.png";
	document.getElementById('cannot_use_skill').value = "1";
}
function avatar_swimming_off(){
	document.getElementById('avatar_box').style.height = "96px";	
	document.getElementById('front').src = "../../character/avatar/avatar_active/avatar_front.png";
	document.getElementById('back').src = "../../character/avatar/avatar_active/avatar_back.png";
	document.getElementById('side1').src = "../../character/avatar/avatar_active/avatar_side1.png";
	document.getElementById('side2').src = "../../character/avatar/avatar_active/avatar_side2.png";
	document.getElementById('cannot_use_skill').value = "0";
}
function overlay_effect_tree1_up(){
	if(up_down == 200 && left_right == 20){
		document.getElementById('avatar_box').style.zIndex = "1";
	}
	if(up_down == 200 && left_right == 140){
		document.getElementById('avatar_box').style.zIndex = "1";		
	}	
}
function overlay_effect_tree1_down(){
	if(up_down ==180 && left_right == 20){
		document.getElementById('avatar_box').style.zIndex = "5";
	}
	if(up_down == 180 && left_right == 140){
		document.getElementById('avatar_box').style.zIndex = "5";		
	}
}
function overlay_effect_tree1_right(){
	if(left_right == 160 && up_down <= 300){
		document.getElementById('avatar_box').style.zIndex = "3";			
	}
	if(left_right == 20 && up_down <= 160){
		document.getElementById('avatar_box').style.zIndex = "5";				
	}
}
function overlay_effect_tree1_left(){
	if(left_right == 140 && up_down <= 180){
		document.getElementById('avatar_box').style.zIndex = "5";			
	}
}

function overlay_effect_tree2_up(){
	if(up_down == 340){
		document.getElementById('avatar_box').style.zIndex = "1";			
	}
}
function overlay_effect_tree2_down(){
	if(up_down == 320){
		document.getElementById('avatar_box').style.zIndex = "3";			
	}
}
function to_map6(){
	if(up_down == 620){
		location.href = "../../maps return/map6(fromMap7)/map6(fromMap7).html";
	}
}
function to_map8(){
	if(left_right == -20){
		location.href="../../maps/%map8/map8.html";
	}
}