var top_position = 0;
var bottom_position = 1;
var left_position = 0;
var right_position = 0;
var move_locked = 0;
var skill_cast_locked = 0;
document.onkeypress = function(event){
	if(event.keyCode == 119 || event.keyCode == 87){
		if(move_locked != 0){}
		else{
			arrow_up();	
		}
		top_position = 1;
		bottom_position = 0;
		left_position = 0;
		right_position = 0;
	}	
	else if(event.keyCode == 115 || event.keyCode == 83){
		if(move_locked != 0){}
		else{
			arrow_down();
		}
		top_position = 0;
		bottom_position = 1;
		left_position = 0;
		right_position = 0;
	}
	else if(event.keyCode == 100 || event.keyCode == 68){
		if(move_locked != 0){}
		else{
			arrow_right();	
		}
		top_position = 0;
		bottom_position = 0;
		left_position = 0;
		right_position = 1;
	}
	else if(event.keyCode == 97 || event.keyCode == 65){
		if(move_locked != 0){}
		else{
			arrow_left();			
		}
		top_position = 0;
		bottom_position = 0;
		left_position = 1;
		right_position = 0;
	}
	else if(event.keyCode == 69 || event.keyCode == 101){
		bed_sleep_action();
	}
	else if(event.keyCode == 49){
		if(skill_cast_locked != 0){}
		else if(document.getElementById('cannot_use_skill').value == 1){}
		else{
			windblast_activated();	
		}	
	}
	else if(event.keyCode == 50){
		if(skill_cast_locked != 0){}
		else if(document.getElementById('cannot_use_skill').value == 1){}
		else{
			lightning_powerup_activated();	
		}	
	}
	else if(event.keyCode == 51){
		if(skill_cast_locked != 0){}
		else if(document.getElementById('cannot_use_skill').value == 1){}
		else{
			power_aura_activated();	
		}	
	}
}
function windblast_activated(){
	move_locked = 1;
	skill_cast_locked = 1;
	document.getElementById('skill_cast').style.width = "265%";
	document.getElementById('skill_cast').style.height = "120%";
	document.getElementById('skill_cast').style.left = "-90%";
	document.getElementById('skill_cast').style.top = "-5%";
	document.getElementById('skill_cast').style.zIndex = "10";
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	document.getElementById('skill_cast_animate').style.visibility ="visible";
	if(top_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/windblast_animation/avatar_animation_back.gif";
	}
	else if(bottom_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/windblast_animation/avatar_animation_front.gif";	
	}
	else if(left_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/windblast_animation/avatar_animation_side2.gif";
	}
	else if(right_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/windblast_animation/avatar_animation_side1.gif";
	}
	document.getElementById('skill_cast').src ="../../character/skills/windblast.gif";
	var windblast_skill_activation = function(){
		var avatar_remove = function(){
			document.getElementById('skill_cast_animate').style.visibility ="hidden";
			document.getElementById('skill_cast_animate').src =" ";	
		}
		setTimeout(avatar_remove, 200)
		document.getElementById('skill_cast').style.visibility = "visible";
		var windblast_off = function(){
			document.getElementById('skill_cast').style.visibility = "hidden";
			document.getElementById('skill_cast').src =" ";
			if(top_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "visible";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(bottom_position == 1){
				document.getElementById('front').style.visibility = "visible";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(left_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "visible";	
			}
			else if(right_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "visible";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			document.getElementById('skill_cast').style.width = " ";
			document.getElementById('skill_cast').style.height = " ";
			document.getElementById('skill_cast').style.left = " ";
			document.getElementById('skill_cast').style.top = " ";
			document.getElementById('skill_cast').style.zIndex = " ";
			move_locked = 0;
			skill_cast_locked = 0;
		}
		setTimeout(windblast_off, 1150)
	};
	setTimeout(windblast_skill_activation, 1520)
}
function lightning_powerup_activated(){
	move_locked = 1;
	skill_cast_locked = 1;
	document.getElementById('skill_cast').style.width = "130%";
	document.getElementById('skill_cast').style.height = "800%";
	document.getElementById('skill_cast').style.left = "-15%";
	document.getElementById('skill_cast').style.top = "-700%";
	document.getElementById('skill_cast').style.zIndex = "10";
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	document.getElementById('skill_cast_animate').style.visibility ="visible";
	if(top_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/lightning_powerup_animation/avatar_animation_back.gif";
	}
	else if(bottom_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/lightning_powerup_animation/avatar_animation_front.gif";	
	}
	else if(left_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/lightning_powerup_animation/avatar_animation_side2.gif";
	}
	else if(right_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/lightning_powerup_animation/avatar_animation_side1.gif";
	}
	document.getElementById('skill_cast').src ="../../character/skills/lightning_powerup.gif";
	var lightning_powerup_skill_activation = function(){

		document.getElementById('skill_cast').style.visibility = "visible";
		var lightning_powerup_off = function(){
			document.getElementById('skill_cast_animate').style.visibility ="hidden";
			document.getElementById('skill_cast_animate').src =" ";	
			document.getElementById('skill_cast').style.visibility = "hidden";
			document.getElementById('skill_cast').src =" ";
			if(top_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "visible";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(bottom_position == 1){
				document.getElementById('front').style.visibility = "visible";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(left_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "visible";	
			}
			else if(right_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "visible";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			document.getElementById('skill_cast').style.width = " ";
			document.getElementById('skill_cast').style.height = " ";
			document.getElementById('skill_cast').style.left = " ";
			document.getElementById('skill_cast').style.top = " ";
			document.getElementById('skill_cast').style.zIndex = " ";
			move_locked = 0;
			skill_cast_locked = 0;
		}
		setTimeout(lightning_powerup_off, 1800)
	};
	setTimeout(lightning_powerup_skill_activation, 1500)
}
function power_aura_activated(){
	move_locked = 1;
	skill_cast_locked = 1;
	document.getElementById('skill_cast').style.width = "300%";
	document.getElementById('skill_cast').style.height = "220%";
	document.getElementById('skill_cast').style.left = "-100%";
	document.getElementById('skill_cast').style.top = "-100%";
	document.getElementById('skill_cast').style.zIndex = "10";
	document.getElementById('front').style.visibility = "hidden";
	document.getElementById('back').style.visibility = "hidden";
	document.getElementById('side1').style.visibility = "hidden";
	document.getElementById('side2').style.visibility = "hidden";
	document.getElementById('skill_cast_animate').style.visibility ="visible";
	if(top_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/power_aura_animation/avatar_animation_back.gif";
	}
	else if(bottom_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/power_aura_animation/avatar_animation_front.gif";	
	}
	else if(left_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/power_aura_animation/avatar_animation_side2.gif";
	}
	else if(right_position != 0){
		document.getElementById('skill_cast_animate').src ="../../character/avatar_animation/avatar_animation_active/power_aura_animation/avatar_animation_side1.gif";
	}
	document.getElementById('skill_cast').src ="../../character/skills/power_aura.gif";
	var power_aura_skill_activation = function(){
		var avatar_animation_off = function(){
			document.getElementById('skill_cast_animate').style.visibility ="hidden";
			document.getElementById('skill_cast_animate').src =" ";	
			if(top_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "visible";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(bottom_position == 1){
				document.getElementById('front').style.visibility = "visible";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			else if(left_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "hidden";
				document.getElementById('side2').style.visibility = "visible";	
			}
			else if(right_position == 1){
				document.getElementById('front').style.visibility = "hidden";
				document.getElementById('back').style.visibility = "hidden";
				document.getElementById('side1').style.visibility = "visible";
				document.getElementById('side2').style.visibility = "hidden";	
			}
			move_locked = 0;
		}
		setTimeout(avatar_animation_off, 600)
		document.getElementById('skill_cast').style.visibility = "visible";
		var power_aura_off = function(){
			document.getElementById('skill_cast').style.visibility = "hidden";
			document.getElementById('skill_cast').src =" ";
			document.getElementById('skill_cast').style.width = " ";
			document.getElementById('skill_cast').style.height = " ";
			document.getElementById('skill_cast').style.left = " ";
			document.getElementById('skill_cast').style.top = " ";
			document.getElementById('skill_cast').style.zIndex = " ";
			skill_cast_locked = 0;
		}
		setTimeout(power_aura_off, 10050)
	};
	setTimeout(power_aura_skill_activation, 1520)
}
