    /*!
 * @update 02.10.2020
 * @author Webibazaar Template https://www.webibazaar.com
 * @contact info@webibazaar.com 
 * @license
 * Copyright  2016-2020 Winter Infotech Team
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

// Quantity Cart Start
var qty = {
    'minus' : function(product_id) {
        var input = $("input[id='input-quantity-" + product_id + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            var minValue = parseInt(input.attr('min'));
            if (!minValue) minValue = 1;
            if (currentVal > minValue) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == minValue) {
                $(this).attr('disabled', true);
            }
        }
        else {
            input.val(1);
        }
    },
    'plus' : function(product_id) {
        var input = $("input[id='input-quantity-" + product_id + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            var maxValue = parseInt(input.attr('max'));
            if (!maxValue) maxValue = 999;
            if (currentVal < maxValue) {
                input.val(currentVal + 1).change();
                $('.dis-' + product_id).prop('disabled', false);    
            }
            if (parseInt(input.val()) == maxValue) {
                $(this).attr('disabled', true);
            }
        }
        else {
            input.val(1);
        }
    },
    'cart' : function(product_id) {
        var qty = $('#input-quantity-' + product_id).val();
        if(qty > 0) cart.add(product_id,qty);       
        else {
            //alert($("input[name='hid-qty-msg']").val());
            $('#content').parent().before('<div class="alert alert-danger alert-dismissible"><i class="fa fa-check-circle"></i> ' + $("input[name='hid-qty-msg']").val() + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');    
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            $('#input-quantity-' + product_id).val("1");
        }
    }
}
// Quantity Cart End


/* responsive menu */
function openNav() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("stamenu").className = "active menu-fixed";
}

function closeNav() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("stamenu").className = "menu-fixed";
}

 /* loader */
$(window).load(function myFunction() {
  $(".s-panel .loader").removeClass("wrloader");
});

//go to top
$(document).ready(function () {
    $("#common-home").parent().addClass("home-page");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});


$(document).ready(function () {
    if ($(window).width() <= 991) {
        $('.menusp').appendTo('.appmenu');
        $('.curr').appendTo('.lhaccount');
        $('.langg').appendTo('.lhaccount');

    }

     $('.topright .owl-carousel owl-theme .owl-nav').appendTo('.apponbtn');
      $('.banservi').appendTo('.bannerapp');
     if ($(window).width() >= 767) {
         $('.imgbanner').appendTo('.bannerimg');
        
     }
     

});

$(document).ready(function () {
    if ($(window).width() >= 768) {
        $('.toprightw .owl-carousel.owl-theme .owl-nav').appendTo('.apponbtn');
    }
 });
$(document).ready(function () {
    if ($(window).width() <= 991) {
        $('.serchapp').appendTo('.appendsearch');
    }
 });


function openSearch() {
    $('body').addClass("active-search");
    document.getElementById("search").style.height = "auto";
    $('#search').addClass("sideb");
    // $('.search_query').attr('autofocus', 'autofocus').focus();
}
function closeSearch() {
    $('body').removeClass("active-search");
    document.getElementById("search").style.height = "0";
    $('#search').addClass("siden");
    // $('.search_query').attr('autofocus', 'autofocus').focus();
}


$(document).ready(function () {
$("#ratep,#ratecount").click(function() {
    $('body,html').animate({
        scrollTop: $(".product-tab").offset().top 
    }, 1500);
});
});




/* dropdown effect of account */
$(document).ready(function () {
    if ($(window).width() <= 767) {
    $('.catfilter').appendTo('.appres');

    $('.dropdown a.account').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
}
});

$(document).ready(function () {
$('.dropdown button.test').on("click", function(e)  {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
});
});



/* dropdown */

/* sticky header */
  if ($(window).width() >= 992) {
 $(document).ready(function(){
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.menusp').addClass('fixed fadeInDown animated');
        } else {
            $('.menusp').removeClass('fixed fadeInDown animated');
        }
      });
});
};

$(document).ready(function(){
    if ($(window).width() >= 992) {
var number_blocks =7;
    var count_block = $('#menu .m-menu');
    var moremenu = count_block.slice(number_blocks, count_block.length);
    moremenu.wrapAll('<li class="view_cat_menu tab-menu"><div class="more-menu sub-menu">');
    $('.view_cat_menu').prepend('<a href="#" class="submenu-title">More</a>');
    $('.view_cat_menu').mouseover(function(){
    $(this).children('div').show();
    })
    $('.view_cat_menu').mouseout(function(){
    $(this).children('div').hide();
    });
    };
});


$(document).ready(function(){
        if ($(window).width() >= 992 && $(window).width() <= 1199){
    var number_blocks =4;
    var count_block = $('#menu .m-menu');
    var moremenu = count_block.slice(number_blocks, count_block.length);
    moremenu.wrapAll('<li class="view_cat_menu tab-menu"><div class="more-menu sub-menu">');
    $('.view_cat_menu').prepend('<a href="#" class="submenu-title">More</a>');
    $('.view_cat_menu').mouseover(function(){
    $(this).children('div').show();
    })
    $('.view_cat_menu').mouseout(function(){
    $(this).children('div').hide();
    });
}
});

$(document).ready(function(){
        if ($(window).width() >= 1200 && $(window).width() <= 1409){
    var number_blocks =4;
    var count_block = $('#menu .m-menu');
    var moremenu = count_block.slice(number_blocks, count_block.length);
    moremenu.wrapAll('<li class="view_cat_menu tab-menu"><div class="more-menu sub-menu">');
    $('.view_cat_menu').prepend('<a href="#" class="submenu-title">More</a>');
    $('.view_cat_menu').mouseover(function(){
    $(this).children('div').show();
    })
    $('.view_cat_menu').mouseout(function(){
    $(this).children('div').hide();
    });
}
});

$(document).ready(function(){
    if ($(window).width() >= 1410) {
var number_blocks =5;
    var count_block = $('#menu .m-menu');
    var moremenu = count_block.slice(number_blocks, count_block.length);
    moremenu.wrapAll('<li class="view_cat_menu tab-menu"><div class="more-menu sub-menu">');
    $('.view_cat_menu').prepend('<a href="#" class="submenu-title">More</a>');
    $('.view_cat_menu').mouseover(function(){
    $(this).children('div').show();
    })
    $('.view_cat_menu').mouseout(function(){
    $(this).children('div').hide();
    });
    };
});



$(document).ready(function(){
    $('.modal').on('hide.bs.modal', function() {
      var memory = $(this).html();
      $(this).html(memory);
    })
});



     $(document).ready(function() {
  $('.webTab2').click(function(){
     $('.webTab2').addClass('active');
     $('.webTab2').removeClass('active');
  });
});




/* top categories */
$(document).ready(function() {
  $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: true
    })
$('#cat-img').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:3
        },
        1410:{
            items:3
        }
    }
})

    $('#best').owlCarousel({
    loop:false,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
    $('#latest,#feature').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        600:{
            items:3
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
     
     $('#carousel').owlCarousel({
    loop:false,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:3
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        992:{
            items:5
        },
        1200:{
            items:6
        },
        1410:{
            items:8
        }
    }
})

    $('#testi').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
       
    }
})



    $('#blog').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    responsive:{
       0:{
            items:1
        },
        320:{
            items:1
        },
        576:{
            items:2
        },
        600:{
            items:2
        },
        767:{
            items:3
        },
        1200:{
            items:3
        },
        1410:{
            items:3
        }
       
    }
})



 $('#related').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    responsive:{
       0:{
            items:1
        },
        320:{
            items:2
        },
        600:{
            items:3
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:3
        },
        1410:{
            items:4
        }
       
    }
})


});





       $(document).ready(function() {
       $('.tab-content .tab-pane #slider-fore').slick({
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  rows: 3,
  responsive: [
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

       $('.sellban').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        customPaging : function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<span>'+('0'+(i+1)).slice(-2)+'</span>';
        },
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $('.sbanner .slick-dots').appendTo('.apltarrow');

    });

     $(document).ready(function() {
       $(document).ready(function() {
    $('#gallery_01').slick({
      vertical: true,
      slidesToShow: 4,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        slidesToShow: 4,
        rows: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        vertical: false,
        slidesToShow: 3,
        rows: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    });
    });



   

 

