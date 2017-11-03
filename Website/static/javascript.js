    
	$(window).load(function() {  //----------For loading screen-----------
           $("#body_wrapper").fadeIn(1500);
           $(".loading_image").fadeOut(1500);
	 });
	
	$(document).ready(function(){ /*-----to get the document ready----*/	
          
         $("a#6").click(function() {  /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("#contact").offset().top
           }, 500);
         });

         $("a#1").click(function() { /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("body").offset().top
           }, 500);
         });
		 
         $("a#2").click(function() { /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("#about_home").offset().top
           }, 500);
         });
		 
         $("a#3").click(function() { /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("#gallery_home").offset().top
           }, 500);
         });
		 
         $("a#5").click(function() { /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("#services").offset().top
           }, 500);
         });
		 
         $("a#4").click(function() { /*-----for scrolling to different sections----*/
         $('html, body').animate({
             scrollTop: $("#blog").offset().top
           }, 500);
         });

         $(".header_head").fadeIn(250);
         $(".header_head_post").fadeIn(250);

		 $("input#submit").addClass('submitbutton_Default');
	     $("text").hover(function() { /*-----for button hover effect----*/
         $(this).stop(true,true).toggleClass('buttonHover',250);
         });

	     $("input.submit_button").hover(function() { /*-----for send message button hover effect----*/
         $(this).stop(true,true).toggleClass('submit_button_hover',250);
         });
		 
	     $("span.download").hover(function() { /*-----for button hover effect----*/
         $(this).stop(true,true).toggleClass('spanHover',250);
         });
		 
		
		 /*-----for gallery_home hover effect----*/
	     $("img.image").hover(function() {
             $(this).stop(true,true).addClass('opacity',550);
         },function(){
		 });
		 
		 /*-----for about2_slide effect----*/		 
		 $("a#a1").click(function(){
			 $("#about2").slideDown(450);
             $("a#a1").hide();	
             $("a#a2").show();			 
		 })
		 /*-----for about2_slide effect----*/			 
		 $("a#a2").click(function(){
			 $("#about2").slideUp(550);
			 $("a#a2").hide();
			 $("a#a1").show();
		 })
		 /*-----for gallery2_slide effect----*/		 
		 $("a#a3").click(function(){
			 $("#gallery2").fadeIn(1000);	
             $("a#a3").hide();			 
		 })
		 /*-----for gallery2_slide effect----*/			 
		 $("a#a4").click(function(){
			 $("#gallery2").fadeOut(1000);
			 $("a#a3").show();
		 })
		 
		 
		 
		 /*-----to display text after gallery_home_1 hover----*/
         $("#gallery_home1").hover(function() {
			 $("h1.image_hover1").stop(true,true).fadeIn(250).css('z-index',1);
         },function(){
            $("h1.image_hover1").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });

		 /*-----to display text after gallery_home_2 hover----*/
         $("#gallery_home2").hover(function() {
			 $("h1.image_hover2").stop(true,true).fadeIn(250).css('z-index',1);
         },function(){
            $("h1.image_hover2").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });
		
		 /*-----to display text after gallery_home_3 hover----*/
         $("#gallery_home3").hover(function() {
			 $("h1.image_hover3").stop(true,true).fadeIn(250).css('z-index',1);
         },function(){
            $("h1.image_hover3").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });
		 
		 /*-----to display text after gallery_home_4 hover----*/
         $("#gallery_home4").hover(function() {
			 $("h1.image_hover4").stop(true,true).fadeIn(350).css('z-index',1);
         },function(){
            $("h1.image_hover4").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });
		 /*-----to display text after gallery_home_5 hover----*/
         $("#gallery_home5").hover(function() {
			 $("h1.image_hover5").stop(true,true).fadeIn(250).css('z-index',1);
         },function(){
            $("h1.image_hover5").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });
		 /*-----to display text after gallery_home_6 hover----*/
         $("#gallery_home6").hover(function() {
			 $("h1.image_hover6").stop(true,true).fadeIn(250).css('z-index',1);
         },function(){
            $("h1.image_hover6").stop(true,true).fadeOut(250);
			$("img.image").stop(true,true).removeClass('opacity',350);
		 });
		 
		 /*-----for footer social medias hover----*/
         $("img.footer_icons").hover(function() {
			      $(this).stop(true,true).addClass('opacity1',250);
		 }, function(){
			 $(this).stop(true,true).removeClass('opacity1',250);
			});
		 
	     /*-----for responsive nav menu bar----*/
	     $("#res_menu_label").click(function(){
	          $("p.menu").stop(true,true).slideToggle();
         });
         if($(window).width() < 768){ 
         	$("p.menu").click(function(){
	          $("p.menu").slideUp();
         });
         };
		 	
	/*-----If the user scrolls down----*/
      $(window).scroll(function() { 
	  
	    if ($(document).scrollTop() < 150) { /*-----If the user scrolls less than 150px----*/
			
			$("p.menu").css("color", "white"); 
		
        /*-----If the user hovers over menu items----*/		
		$("p.menu" ).hover(function() {		 
          $(this).css("color", "#769CFB");
		} , function(){
			$(this).css("color", "white");
		})
		};
		
        if ($(document).scrollTop() > 150) { /*-----If the user scrolls more than 150px----*/
		
		/*-----If the user hovers over menu items----*/
		$("p.menu" ).hover(
        function() {		
          $(this).css("color", "#769CFB");
		} , function(){
			if($(window).width() > 768){ /*-----for responsive----*/
			  $(this).css("color", "#383838");
			} else {
				$(this).css("color", "white");
			};
		});
		
				
			if($(window).width() > 768){ /*-----for responsive----*/
			  $("p.menu").css("color", "#383838");
			} else {
			  $("p.menu").css("color", "white");
			};
			
		$("#menu2").fadeIn(500);
		$("#menu").css("border-bottom", "1px solid #DEDADA");

		} else { /*-----If the user scroll is not more than 150px----*/
		  $("#menu2").fadeOut(250)
		  $("#header").css("position", "absolute").css("margin-top","-0px");
		  $("#line").css("background-color", "white");
		  $("#menu").css("border-bottom", "none");
        };
		
		if ($(document).scrollTop() > 300) { 
		$("#header").css("position","fixed").css("margin-top","-300px");
		}
		else {
			$("#header").css("position","absolute").css("margin-top","0px");
         
        };
	
      });
	   
    });
	
	