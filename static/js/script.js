$(function(){

//Header resizer
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  maxScrollFromTop = 300 //px
  minImgWidth = 22 //%
  maxImgWidth = 100 //%
  imgWidthDiff = maxImgWidth - minImgWidth
  minNameFontSize = 0.8 //rem
  maxNameFontSize = 1.5 //rem
  nameFontSizeDiff = maxNameFontSize - minNameFontSize
  scrollFromTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
  if (scrollFromTop > 0 && scrollFromTop < maxScrollFromTop) {
	factor = (maxScrollFromTop - scrollFromTop)/maxScrollFromTop
	imgWidth = imgWidthDiff*factor + minImgWidth
	nameFontSize = nameFontSizeDiff*factor + minNameFontSize
    $("header .container")[0].style.fontSize = nameFontSize+"rem";
	$("header img")[0].style.width = imgWidth+"%";
  }
}


//Scroll Reveal
  window.sr = ScrollReveal();
  if ($(window).width() < 768) {
  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}
  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
  } else {
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });
	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
  }


$(".menu-toggle" ).click(function() {
	$(".menu-toggle").toggleClass('open');
	$(".menu-round").toggleClass('open');
	$(".menu-line").toggleClass('open');
	$(".btn-app").toggleClass('visible');
});

$("#cbPersonal" ).click(function() {
	$(".personal").toggleClass('hidden');
});
$("#cbFamily" ).click(function() {
	$(".family").toggleClass('hidden');
});
$("#cbStudies" ).click(function() {
	$(".studies").toggleClass('hidden');
});
$("#cbMeme" ).click(function() {
	$(".meme").toggleClass('hidden');
});
$("#cbSports" ).click(function() {
	$(".sports").toggleClass('hidden');
});
$("#cbProfessional" ).click(function() {
	$(".professional").toggleClass('hidden');
});





});
