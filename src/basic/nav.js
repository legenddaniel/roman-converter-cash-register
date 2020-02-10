{
    // Nav-tabs show and hide on the index

    const $nonBrandLink = $('.nav-link').not('.navbar-brand');
    $nonBrandLink.on('click', () => {
        const fade = () => {
            const name = methodsMenu.isXs() ? '' : 'fade 1.5s reverse';
            methodsAnimation.setAnimation('.navbar-brand', name);
        };

        methodsAnimation.setAnimation($nonBrandLink, 'none');

        $('.navbar-brand')
            .html('<i class="fab fa-windows"></i>')
            .removeClass('disabled')
            .prop('tabindex', '0');
        $('.progress span').text('Loaded');

        methodsMain.ifResize(fade);
    });
}
