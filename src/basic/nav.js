// Nav-tabs toggle() and resize event listener (debounced) on the index

$('.nav-link').not('.navbar-brand').one('click', () => {

    methodsAnimation.setAnimation('.nav-link', 'none');

    $('.navbar-brand')
        .html('<i class="fab fa-windows"></i>')
        .removeClass('disabled')
        .prop('tabindex', '0');
    $('.progress span').text('Loaded');
});

$(() => {
    const ifResize = fn => {
        fn();

        let timer;
        $(window).on('resize', () => {
            if (timer) {
                window.cancelAnimationFrame(timer);
            }
            timer = window.requestAnimationFrame(fn);
        });
    };
    const setMenu = () => {
        const [ifXs, style, mr] = methodsMenu.isXs() ?
            [methodsMenu.setIfXs, ['_offset', '_other', '_css1'], 0] :
            [methodsMenu.setUnlessXs, ['_other', '_offset', '_css2'], '1rem'];

        ifXs();
        methodsMenu.setStyle('_selector', ...style);
        methodsMenu.setMr('.navbar-brand', mr);
    };

    ifResize(setMenu);
})


