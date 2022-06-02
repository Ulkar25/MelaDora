


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }
});

$(document).ready(function(){
    
  $(document).ready(function(){
    $(".fa-xmark").click(function(){
        $(".myModal").slideUp("slow");
        $(".navbar,.contact").slideDown("slow");
      });
      $("#search").click(function(){
        $(".myModal").slideDown("slow");
        $(".navbar, .contact").slideUp("slow");
    
      });
  });

    
    $("#hamisi").click(function(){
        $("#alma, #gavali, #armud, #gilas, #saftali, #goz, #taxil, #portagal, #mux-tingler, #pomidor").show();
      });

      $("#meyveler").click(function(){
        $("#alma, #gavali, #armud, #gilas, #saftali,  #portagal").show();
        $("#goz, #taxil, #mux-tingler, #pomidor").hide();

      });
      $("#terevezler").click(function(){
        $(" #pomidor").show();
        $("#goz, #taxil, #mux-tingler,#alma, #gavali, #armud, #gilas, #saftali,  #portagal ").hide();

      });

      $("#taxillar").click(function(){
        $("#taxil").show();
        $("#goz, #pomidor , #mux-tingler,#alma, #gavali, #armud, #gilas, #saftali,  #portagal ").hide();

      });

      $("#diger").click(function(){
        $("#goz,  #mux-tingler").show();
        $("#taxil, #pomidor ,#alma, #gavali, #armud, #gilas, #saftali,  #portagal ").hide();

      });
      
      var num = 100; 
      $(window).bind('scroll', function () {
          if ($(window).scrollTop() > num) {
              $('.navbar').addClass('fixed');
              $('.navbar-first').hide();
              $('.navbar').removeClass('my-5');
              $('.index').addClass('bg-dark');

          } else {
              $('.myNavbar').removeClass('fixed');
              $('.navbar-first').show();
              $('.myNavbar').addClass('margin');
              $('.navbar').addClass('my-5');
              $('.index').removeClass('bg-dark');
            
            }
      });

  });
