$(function () { 
			$(document).ready(function() {


				var w = $(window).width();
				var nav = $('.menu_container');
				var hi = 200;
    
   				$(window).scroll(function () {
       				if ($(this).scrollTop() > hi) {
          				nav.addClass("f-menu");
          				nav.removeClass("menu_container");
          				$('#menuwrapper').removeClass('menuitems');
          				$('#menuwrapper').addClass('itemspop');
          			} else {
          				nav.removeClass("f-menu");
          				nav.addClass("menu_container");
          				$('#menuwrapper').addClass('menuitems');
          				$('#menuwrapper').removeClass('itemspop');
          			}
          		});
          	

         		$("#menu_home").click(function(){								//Srollfunctions
					var p = 0;

					var body = $("html, body");										//	|
					body.animate({scrollTop:p}, '500', 'swing');					//	|
				});

				$("#menu_kalender").click(function(){
					var q = $(window).height();
					var qkalender = q * 1.98;
					var body = $("html, body");		
					body.animate({scrollTop:qkalender}, '500', 'swing');
				});

				$("#menu_store").click(function(){
					var p = $(window).height();
					var pcontact = p * 4.599;
					var body = $("html, body");
					body.animate({scrollTop:pcontact}, '500', 'swing');
				});

				$("#menu_kontakt").click(function(){
					var p = $(window).height();
					var pcontactnew = p * 5.3;
					var body = $("html, body");
					body.animate({scrollTop:pcontactnew}, '500', 'swing');
				});

				$("#menu_logo").click(function(){
					if ($(window).scrollTop() == 0) {
					var body = $("html, body");
					body.animate({scrollTop:20}, 'fast', 'swing');
					body.animate({scrollTop:0}, 'fast', 'swing');

					} else {
					var body = $("html, body");
					body.animate({scrollTop:0}, '500', 'swing');

					}
				}); 


				

		});
 });