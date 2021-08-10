$(function(){

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
