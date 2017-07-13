$(function(){
 	 $(".dropdown, .dropdown-active").hover(function() {
	    $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	    }, function() {
	    $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

 	 $('ul.third-menu').hover(function(){
 	 	$(this).prev().css({"color": "#fff200"});
 	 	$(this).prev().find(".fa").removeClass().addClass('fa fa-angle-double-right');
 	 }, function() {
 	 	$(this).prev().css({"color": "#fdfdfd"});
 	 	$(this).prev().find(".fa").removeClass().addClass('fa fa-angle-right');
 	 });

 	 $('#carousel').carousel({
  		interval: 3500
	});

 	 $('#myCarousel').carousel({
  		interval: 2000
	});

 	 $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('#about').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('#photoshop').LineProgressbar({
		percentage: 79,
		fillBackgroundColor: '#009dda',
		backgroundColor: 'transparent',
		radius: '0px',
		height: '2px',
		width: '100%',
		duration: 4000

	});

 	 $('#html').LineProgressbar({
		percentage: 90,
		fillBackgroundColor: '#009dda',
		backgroundColor: 'transparent',
		radius: '0px',
		height: '2px',
		width: '100%',
		duration: 4000

	});

 	 $('#javascript').LineProgressbar({
		percentage: 69,
		fillBackgroundColor: '#009dda',
		backgroundColor: 'transparent',
		radius: '0px',
		height: '2px',
		width: '100%',
		duration: 4000

	});

 	 $('#wordpress').LineProgressbar({
		percentage: 92,
		fillBackgroundColor: '#009dda',
		backgroundColor: 'transparent',
		radius: '0px',
		height: '2px',
		width: '100%',
		duration: 4000

	});
            $(document).unbind('scroll');
        }
    });

 	 
	var lastId,
    topMenu = $(".main-menu"),
    topMenuHeight = topMenu.outerHeight()+70,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    menuItems.click(function(e){
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  	$('html, body').stop().animate({ 
      scrollTop: offsetTop
  	}, 1000);
  	e.preventDefault();
  });

	$(window).scroll(function(){
	var	topMenu = $(".main-menu");
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active-menu-item")
         .end().filter("[href='#"+id+"']").parent().addClass("active-menu-item");
     }                   
  });

});