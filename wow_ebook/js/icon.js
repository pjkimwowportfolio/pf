$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.Homebtn').fadeIn();
    } else {
        $('.Homebtn').fadeOut();
    }
});

$( '.Homebtn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

