// Nav-tabs show and hide on the index

$('.nav-link').not('.navbar-brand').one('click', () => {

    methodsAnimation.setAnimation('.nav-link', 'none');

    $('.navbar-brand')
        .html('<i class="fab fa-windows"></i>')
        .removeClass('disabled')
        .prop('tabindex', '0');
    $('.progress span').text('Loaded');
});
