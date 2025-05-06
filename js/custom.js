

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
//new WOW().init();

// Navigation 
(function($) {
$(function() {
  $('nav ul li > a:not(:only-child)').click(function(e) {
    $(this)
      .siblings('.nav-dropdown')
      .slideToggle()
    $('.nav-dropdown')
      .not($(this).siblings())
      .hide()
    e.stopPropagation()
  })
  $('html').click(function() {
    $('.nav-dropdown').hide()
  })
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(function() {
    $('nav ul,.nvbg').slideToggle();
    $('body').toggleClass('no-scroll');
  });
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active')
  })
  
})
})(jQuery)
if ($(window).width() < 991) {
$('.nav-list li a').click(function(){
    $('nav ul,.nvbg').css('display','none');
    $('#nav-toggle').removeClass('active')
})
}
$("[data-fancybox]").fancybox();

$(document).ready(function(){
$(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 100) {
      $('.navigation').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navigation').removeClass('fixed-top');
    }
  });
});
 scrollNav();
function scrollNav() {
$('nav ul li a').click(function(){
  $('nav ul li a').removeClass("active");     
  $(this).addClass("active");
  
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top - 30
  }, 0);
  return false;
});
}

});
$(function() {
    var pathArray = window.location.pathname.split('/');
    var loc = pathArray[pathArray.length - 1];
    var loc2 = pathArray[pathArray.length - 2];
    //console.log(loc);
    //var loc = window.location.href; 
     if(loc == 'construction-update' ) {
    $('.header_wrap').addClass('navbgcolor');
  } 
	if(loc == 'cons' ) {
    $('.header_wrap').addClass('navbgcolor');
  } 

});

if ($(window).width() < 768) {
$("nav ul li a").click(function () {
    $('nav ul li a').removeClass("active");     
    $(this).addClass("active");
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
        if ($target.length) {
            var targetOffset = $target.offset().top - 50;
            $("html,body").animate({ scrollTop: targetOffset }, 10);
            return false;
        }
    }
});
}

//button
$(function() {  
$('.btn-6')
  .on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  });
});

//Slider
$('.locationtextslider').slick({
    dots: true,
    infinite: true,
    loop:true,
    autoplay: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    arrows:false,
    //centerMode: true,
});

$('.slide-left').click(function(){
$('.gallery-resi').slick('slickPrev');
});

$('.slide-right').click(function(){
$('.gallery-resi').slick('slickNext');
});


$(".morejoy").click(function(){
    $('.joygrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});
$(".moreyouth").click(function(){
    $('.youthgrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});
$(".morewellness").click(function(){
    $('.wellnessgrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});
$(".moresmiles").click(function(){
    $('.smilesgrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});
$(".morecomfort").click(function(){
    $('.comfortgrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});

$(".morechoice").click(function(){
    $('.choicegrid').addClass('slidleft');
    $('.navigation').addClass('headhide');
});

$(".closejoy").click(function(){
    $('.joygrid,.youthgrid,.wellnessgrid,.smilesgrid,.comfortgrid,.choicegrid').removeClass('slidleft');
    $('.navigation').removeClass('headhide');
});


$('.floor-slider').slick({
    dots: false,
    infinite: true,
    loop:true,
    autoplay: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    arrows:false,
    //centerMode: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '80px',
      }
    }
    ]
});

$('.slide-left').click(function(){
$('.floor-slider').slick('slickPrev');
});

$('.slide-right').click(function(){
$('.floor-slider').slick('slickNext');
});

$('.amenslider').slick({
    dots: false,
    infinite: true,
    loop:true,
    autoplay: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    arrows:false,
    //centerMode: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
});

$('.slide-left').click(function(){
$('.amenslider').slick('slickPrev');
});

$('.slide-right').click(function(){
$('.amenslider').slick('slickNext');
});



// Material design form
$.fn.materializeInputs = function(selectors) {
// default param with backwards compatibility
if (typeof(selectors) === 'undefined') selectors = "input, textarea, select";
// attribute function
function setInputValueAttr(element) {
    element.setAttribute('value', element.value);
}
// set value attribute at load
this.find(selectors).each(function() {
    setInputValueAttr(this);
});
// on keyup and change
this.on("keyup change", selectors, function() {
    setInputValueAttr(this);
});
};
/**
* Material Inputs
*/
$('body').materializeInputs();

var $form = $("#contact-form")

 //Phone number validation method (custom)
    $.validator.addMethod("phoneRegex", function(value, element) {
    // Define your regular expression pattern for phone number validation
      var pattern = /^[789]\d*$/;

    // Test the value against the pattern
    return this.optional(element) || pattern.test(value);
  }, "Please enter a valid phone number");

$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
}, "Please enter only alphabets");
$form.validate({
	ignore: ".ignore",
  rules: {
    first_name: {
      required: true,
      letters: true
    },
    last_name: {
      required: true,
      letters: true
    },
    mobile: {
	  phoneRegex: true, // Regex pattern to allow ()+_ and digits
      required: true,
      number:true,
      minlength: 10,
      maxlength: 10,
      
    },
    email: {
      required: true,
      email: true
    },
    message: {
      required: true,
    },
    customCheckboxcontact: {
      required: true,
    },
	hiddenRecaptcha1: {required: true},
	  hiddenRecaptcha2: {required: true},
  },
  messages: {
    first_name:{
	  required: "This field is required",
	  letters: "Please enter only alphabets",	
	} ,
    last_name:{
	  required: "This field is required",
	  letters: "Please enter only alphabets",	
	} ,
    mobile: {
      required: "This field is required",
      number:"Please enter only numeric digit",
      minlength:"Please enter 10 digit phone number",
      maxlength:"Please enter 10 digit phone number",
	  phoneRegex: 'Please enter a valid phone number',	
    },
    email: {
      required: "This field is required",
      email:"Please enter valid email",
    },
    message:"This field is required",
    customCheckboxcontact: "This field is required"
  },
   submitHandler: function(form) {
			 $('.submitbtn ').attr('disabled',true);
            $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            success: function(response) {
             $('.submitbtn ').removeAttr('disabled',true);
              window.location.href = 'thank-you.php';
			

            }            
        });
}
});

var $form = $("#enquire-form")

  $.validator.addMethod("phoneRegex", function(value, element) {
    // Define your regular expression pattern for phone number validation
      var pattern = /^[789]\d*$/;

    // Test the value against the pattern
    return this.optional(element) || pattern.test(value);
  }, "Please enter a valid phone number");

$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
}, "Please enter only alphabets");

$form.validate({
	ignore: ".ignore",
  rules: {
      first_name: {
      required: true,
      letters: true
    },
    last_name: {
      required: true,
      letters: true
    },
    mobile: {
	  phoneRegex: true, // Regex pattern to allow ()+_ and digits	
      required: true,
      number:true,
      minlength: 10,
      maxlength: 10,
      
    },
    email: {
      required: true,
      email: true
    },
    message: {
      required: true,
    },
    customCheckboxcontact: {
      required: true,
    },
	  	hiddenRecaptcha1: {required: true},
	  hiddenRecaptcha2: {required: true},
  },
  messages: {
    first_name:{
	  required: "This field is required",
	  letters: "Please enter only alphabets",	
	} ,
    last_name:{
	  required: "This field is required",
	  letters: "Please enter only alphabets",	
	} ,
    mobile: {
      required: "This field is required",
      number:"Please enter only numeric digit",
      minlength:"Please enter 10 digit phone number",
      maxlength:"Please enter 10 digit phone number",
	  phoneRegex: 'Please enter a valid phone number',
    },
    email: {
      required: "This field is required",
      email:"Please enter valid email",
    },
    message:"This field is required",
    customCheckboxcontact: "This field is required"
  },
 submitHandler: function(form) {
			$('.submitbtn ').removeAttr('disabled',true);
            $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            success: function(response) {
            $('.submitbtn ').removeAttr('disabled',true);
               
                $("#enquire-form").trigger("reset");
                window.location.href = 'thank-you.php';
				

            }            
        });
}
});
function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : event.keyCode;
 console.log(charCode);
    if (charCode != 46 && charCode != 45 && charCode > 31
    && (charCode < 48 || charCode > 57))
     return false;

  return true;
}

$('.cons_full_slider').slick({
              dots: false,
              autoplay: true,
              //centerMode: true,
              //centerPadding: '150px',
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplaySpeed: 5000,
              pauseOnHover: false,
              responsive: [
                {
                  breakpoint: 1024, 
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 768, 
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 480, 
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
            });
            $('.cons_right').click(function(){
                $('.cons_full_slider').slick('slickPrev');
            });
            
            $('.cons_left').click(function(){
                $('.cons_full_slider').slick('slickNext');
            });

document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		document.querySelector("#footersection").style.opacity = "1";
		document.querySelector("#footersection").style.transform = "translateY(0)";
	}, 100); // Delay of 2 seconds
});
    