$(document).ready(function(){
	// creates active class based on url
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");         
        $('.menu a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });
        var url = window.location.pathname, 
            urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");         
            $('.popup-content a').each(function(){
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(".menu-type").css("color","#FABEAB");
                    $("#home-arrow").css("opacity",1);
                }
            });
        // hamburger menu animation
		  $('#nav-icon4').click(function(){
		    $(this).toggleClass('open');
		  });
		  // hamburger menu functionality
		  // $(".popup-container").hide();
		  // $("#nav-icon4").click(function(){
		  //   $('body').css('overflow', 'hidden');
		  //     $("#popup1").fadeIn();
		  // });
		  // $(".closeme").click(function(){
		  //   $('body').css('overflow', 'visible');
		  //     $("#popup1").fadeOut();
		  // });
		 






		 // $(".popup-container").hide();
		 //  $("#nav-icon4").click(function() {
		 //    $('#popup1').toggle(function() {
		 //      $('body').css('overflow', 'hidden');
		 //      $(this).fadeIn();
		 //    }, function() {
		 //       $('body').css('overflow', 'visible');
		 //      		      $(this).fadeOut();
		 //    });
		 //  });

		 //  $( "#nav-icon4" ).click(function() {
		 //    $( "p" ).toggle( "slow" );
		 //  });

		  $(document).ready(function() {
		      $('.popup-container').hide();
		      $('#nav-icon4').click(function() {
		          $('#popup1').fadeToggle(400);
		          return false;
		      });
		      TweenMax.set($('body'), {className: '-=loading'});
		  });
});