/*JS file of the Responsive JavaScript Fixed Flyout Menu by Fabian Lins*/

	/*Change this variable to true or false (no quotation marks) to scale the icons with the "--image_flyout_scaling_mobile" variable in the flyout_menu_style.css file.*/
		/*TIP! Using false works pretty well. Only change it if you would like to have a different scaling for the mobile icons.*/
		/*TIP! If you don't know what it does, just keep it false.*/
	use_flyout_menu_to_mobile_view=false;

	/*Change this variable to adjust the width for the mobile view. Make sure you keep the qutation marks and px - for example: "1023px".*/
		/*IMPORTANT! You need to set the use_flyout_menu_to_mobile_view variable to true to make use of this variable!*/
	change_flyout_menu_to_mobile_view="1023px";

	/*Change this variable to either "right" or "left" (with quotation marks) to set the position of the menu.*/
		/*TIP! Usually right looks better than left.*/
	flyout_menu_side="right";

	/*Change this variable to adjust the speed of the expanding or shrinking of the menu.*/
	flyout_animation_speed=100;

	/*Change this variable to adjust the speed when you scroll to the same page.*/
	flyout_menu_scroll_speed=500;

	/*DON'T CHANGE THIS VARIABLE!*/
	flyout_menu_active=false;

	/*DON'T CHANGE THIS VARIABLE!*/
	flyout_social_media_width="-"+document.getElementById("social_media_icon_flyout_parent").offsetWidth+"px";

	/*Link check function*/
	function isExternal(url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"), "") !== location.host) return true;
        return false;
    }

	if(flyout_menu_side==="left"){
		document.getElementById("left_arrow_parent_id").classList.add("flyout_hide");
		document.getElementById("flyout_menu").style.marginLeft =flyout_social_media_width;
		document.getElementById("flyout_menu").classList.add("flyout_menu_left");
	}
	else{
		document.getElementById("right_arrow_parent_id").classList.add("flyout_hide");
		document.getElementById("flyout_menu").style.marginRight =flyout_social_media_width;
		document.getElementById("flyout_menu").classList.add("flyout_menu_right");
	}

	if(document.getElementById("flyout_menu").offsetHeight>window.innerHeight){
		document.getElementById("flyout_menu").classList.remove("scrollbar_flyout_menu");
	}

	function mediaQueryFlyoutMenu(){
		if (window.matchMedia("(max-width:"+change_flyout_menu_to_mobile_view+")").matches) {
			for (var i=document.querySelectorAll(".social_media_icon_flyout").length; i--;) {
				document.querySelectorAll(".social_media_icon_flyout")[i].classList.add("social_media_icon_flyout_mobile_width");
			}
			flyout_social_media_width="-"+document.getElementById("social_media_icon_flyout_parent").offsetWidth+"px";
			if(flyout_menu_side==="left") {
				document.getElementById("flyout_menu").style.marginLeft=flyout_social_media_width+"px";
			}
			else{
				document.getElementById("flyout_menu").style.marginRight=flyout_social_media_width+"px";
			}
		}
		else{
			for (var i=document.querySelectorAll(".social_media_icon_flyout").length; i--;) {
				document.querySelectorAll(".social_media_icon_flyout")[i].classList.remove("social_media_icon_flyout_mobile_width");
			}
		}
	}

	function expandFlyoutMenu(){
		if(flyout_menu_active===false) {
			flyout_menu_active=true;
			if(flyout_menu_side==="left") {
				document.getElementById("flyout_menu").style.transition = "margin-left " +flyout_animation_speed+"ms linear";
				document.getElementById("flyout_menu").style.marginLeft = "0px";
				document.getElementById("arrow_menu_triangle_right_id").classList.add("triangle_left");
				document.getElementById("arrow_menu_triangle_right_id").classList.remove("triangle_right");
			}
			else{
				document.getElementById("flyout_menu").style.transition = "margin-right " +flyout_animation_speed+"ms linear";
				document.getElementById("flyout_menu").style.marginRight = "0px";
				document.getElementById("arrow_menu_triangle_left_id").classList.add("triangle_right");
				document.getElementById("arrow_menu_triangle_left_id").classList.remove("triangle_left");
			}
		}
		else {
			flyout_menu_active=false;
			if(flyout_menu_side==="left") {
				document.getElementById("flyout_menu").style.transition = "margin-left " +flyout_animation_speed+"ms linear";
				document.getElementById("flyout_menu").style.marginLeft = flyout_social_media_width;
				document.getElementById("arrow_menu_triangle_right_id").classList.add("triangle_right");
				document.getElementById("arrow_menu_triangle_right_id").classList.remove("triangle_left");	
			}
			else{
				document.getElementById("flyout_menu").style.transition = "margin-right " +flyout_animation_speed+"ms linear";
				document.getElementById("flyout_menu").style.marginRight = flyout_social_media_width;
				document.getElementById("arrow_menu_triangle_left_id").classList.add("triangle_left");
				document.getElementById("arrow_menu_triangle_left_id").classList.remove("triangle_right");				
			}
		}
	}

	if(use_flyout_menu_to_mobile_view===true){
		mediaQueryFlyoutMenu();
	}

	if(use_flyout_menu_to_mobile_view===true){
		window.onresize = function(){
			mediaQueryFlyoutMenu();
			flyout_social_media_width="-"+document.getElementById("social_media_icon_flyout_parent").offsetWidth+"px";
			flyout_menu_active=false;
				if(flyout_menu_side==="left") {
					document.getElementById("arrow_menu_triangle_right_id").classList.add("triangle_right");
					document.getElementById("flyout_menu").style.marginLeft =flyout_social_media_width;
				}
				else{
					document.getElementById("arrow_menu_triangle_left_id").classList.add("triangle_left");
					document.getElementById("flyout_menu").style.marginRight =flyout_social_media_width;
				}
		};
	}

	/* When you click on a link.*/

	document.getElementById("flyout_menu").addEventListener("click",function(){
		expandFlyoutMenu();
	});

	document.getElementById("flyout_menu").addEventListener("keydown", e => {
		var key_pressed = e.keykey_pressed || e.which;
		/* Enter Key */
		if (key_pressed == "13") {
			expandFlyoutMenu();
		}
	});

	/* When you click on a link.*/
    for (var i=document.querySelectorAll(".flyout_text_a").length; i--;) {
		var flyout_text_a_elememt=document.querySelectorAll(".flyout_text_a")[i]
        flyout_text_a_elememt.addEventListener("click", (e) => {
			var flyout_text_link = flyout_text_a_elememt.getAttribute("href");
			if (typeof flyout_text_link==="undefined") {
				flyout_text_link = flyout_text_a_elememt.querySelectorAll("a").getAttribute("href");
			}
			if((isExternal(flyout_text_link)==true) || (flyout_text_link.includes("/")==true) || (flyout_text_link.includes(".html")==true)){
				window.location.href = flyout_text_link;
			}
			else{
				e.preventDefault();
				window.scrollTo({
					top: document.querySelector(flyout_text_link).offsetTop,
					behavior: "smooth"
				});
			}
		});
    }

	/* When you move your mouse over the "arrow side" of the menu*/
	document.getElementById("arrow_menu_triangle_left_id").addEventListener("mouseover", function(){			
		this.classList.add("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_right_id").addEventListener("mouseover", function(){			
		this.classList.add("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_left_id").addEventListener("focus", function(){			
		this.classList.add("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_right_id").addEventListener("focus", function(){			
		this.classList.add("mouseover_opacity");
	});

	/* When you move your mouse out of the "arrow side" of the menu*/
	document.getElementById("arrow_menu_triangle_left_id").addEventListener("mouseleave", function(){			
		this.classList.remove("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_right_id").addEventListener("mouseleave", function(){			
		this.classList.remove("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_left_id").addEventListener("focusout", function(){			
		this.classList.remove("mouseover_opacity");
	});

	document.getElementById("arrow_menu_triangle_right_id").addEventListener("focusout", function(){			
		this.classList.remove("mouseover_opacity");
	});
	
	/* Keyboard accessibility */
	document.addEventListener("keydown", e => {
		var key_pressed = e.keykey_pressed || e.which;
		/* Esc Key */
		if (key_pressed == "27") {
			if(flyout_menu_active===true) {
				if ((document.getElementById("arrow_menu_triangle_left_id")===document.activeElement)||(document.getElementById("arrow_menu_triangle_right_id")===document.activeElement)||(document.activeElement.className.match("flyout_text_a"))||(document.activeElement.className.match("social_media_icon_flyout"))) {
					flyout_menu_active=false;
					if(flyout_menu_side==="left") {
						document.getElementById("flyout_menu").style.transition = "margin-left " +flyout_animation_speed+"ms linear";
						document.getElementById("flyout_menu").style.marginLeft = flyout_social_media_width;
						document.getElementById("arrow_menu_triangle_right_id").classList.add("triangle_right");
						document.getElementById("arrow_menu_triangle_right_id").classList.remove("triangle_left");
					}
					else{
						document.getElementById("flyout_menu").style.transition = "margin-right " +flyout_animation_speed+"ms linear";
						document.getElementById("flyout_menu").style.marginRight = flyout_social_media_width;
						document.getElementById("arrow_menu_triangle_left_id").classList.add("triangle_left");
						document.getElementById("arrow_menu_triangle_left_id").classList.remove("triangle_right");				
					}
				}			
			document.activeElement.blur();	
			}
		}
	});