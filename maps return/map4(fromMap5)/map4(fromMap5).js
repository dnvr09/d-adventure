var up_down = 20;
var left_right = 220;
function arrow_up(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "visible";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_up = 0;
	if(up_down == 300 && left_right == 20){}//limit the avatar to up
	else if(up_down == 580){}
	else if(up_down == 300 && left_right == 40){}
	else if(up_down == 300 && left_right == 60){}
	else if(up_down == 320 && left_right == 120){}
	else if(up_down == 320 && left_right != 320 && left_right != 340){}
	else if(up_down == 320 && left_right >= 360){}
	else if(up_down == 340 && left_right == 80){}
	else if(up_down == 320 && left_right == 100){}
	else if(up_down == 320 && left_right == 80){}
	else if(up_down == 400 && left_right != 420 && left_right != 160){}
	else if(up_down == 140 && left_right == 0){}
	else{
		holder_up = up_down + 20;
		document.getElementById('avatar_box').style.bottom = holder_up + "px";
		up_down = up_down + 20;
		wooden_fence_restriction()
		to_map4_house_inside()
		if(left_right <= 160){
			simple_house_restriction_left()	
		}
		else if(left_right == 420){
			simple_house_restriction_right()	
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
	else if(up_down == 340 && left_right != 100 && left_right != 80 && left_right != 320 && left_right != 340){}
	else if(up_down == 340 && left_right >= 360){}	
	else if(up_down == 100 && left_right == 0){}
	else if(up_down == 20 && left_right >= 280){}
	else if(up_down == 20 && left_right <= 160){}
	else{
		holder_down = up_down - 20;
		document.getElementById('avatar_box').style.bottom = holder_down + "px";
		up_down = up_down - 20;
		to_map5()
		wooden_fence_restriction()
		if(left_right <= 180){
			simple_house_restriction_left()	
		}
		else if(left_right == 420){
			simple_house_restriction_right()	
		}
	}
}
function arrow_right(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "visible";
	document.getElementById('side2').style.visibility = "hidden";
	var holder_right = 0;
	if(left_right == 420){}//limit the avatar to go right
	else if(up_down == 360 && left_right == 100){}
	else if(up_down == 340 && left_right == 100){}
	else if(up_down >= 420 && left_right == 160){}
	else if(up_down >= 200 && left_right == 420 && up_down != 340 && up_down != 360 && up_down != 380 && up_down != 400){}
	else if(up_down <= 100 && left_right == 420){}
	else{
		holder_right = left_right + 20;
		document.getElementById('avatar_box').style.left = holder_right + "px";
		left_right = left_right + 20;
		wooden_fence_restriction()
		if(left_right <= 180){
			simple_house_restriction_left()	
		}
		else if(left_right == 420){
			simple_house_restriction_right()	
		}
	}
}
function arrow_left(){
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "visible";
	var holder_left = 0;
	if(left_right == -20){}//limit the avatar to go left	
	else if(up_down == 320 && left_right == 80){}
	else if(up_down == 360 && left_right == 100){}
	else if(up_down == 340 && left_right == 80){}
	else if(up_down >= 340 && left_right == 160){}
	else if(up_down >= 420 && left_right == 420){}
	else if(up_down >= 140 && left_right == 20){}
	else if(up_down <= 80 && left_right == 20){}
	else{
		holder_left = left_right - 20;
		document.getElementById('avatar_box').style.left = holder_left + "px";
		left_right = left_right - 20;
		
		to_map3()
		wooden_fence_restriction()
		if(left_right <= 200){
			simple_house_restriction_left()	
		}
		else if(left_right == 400){
			simple_house_restriction_right()	
		}
	}
}
function wooden_fence_restriction(){
	if(up_down >= 340){
		document.getElementById('wooden_fence').style.zIndex = "100";
	}
	else{
		document.getElementById('wooden_fence').style.zIndex = "1";		
	}
}
function simple_house_restriction_left(){
	if(up_down >= 400 && left_right <= 160){
		document.getElementById('simple_house').style.zIndex = "100";		
	}
	else{
		document.getElementById('simple_house').style.zIndex = "1"
	}
}
function simple_house_restriction_right(){
	if(up_down >= 400 && left_right == 420){
		document.getElementById('simple_house').style.zIndex = "100";		
	}
	else{
		document.getElementById('simple_house').style.zIndex = "1"
	}
}
function to_map4_house_inside(){
	if((up_down == 400 && left_right == 320)||(up_down == 400 && left_right == 340)){
		location.href="../../maps/%map4 house inside/map4_house_inside.html";
	}	
}
function to_map3(){
	if(left_right == -20){
		location.href="../map3(fromMap4)/map3(fromMap4).html";
	}	
}
function to_map5(){
	if(up_down == 0){
		location.href="../../maps/%map5/map5.html";
	}
}