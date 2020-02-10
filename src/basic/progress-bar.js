// Progress-bar.js is with regard to the implementation of a running progress bar with random increments at random intervals, both changing dynamically

// Update: the opacity of the disabled nav tabs, i.e. Roman Converter & Cash Register Tabs, equals the value of the progress

$(() => {
    let progress = 0;

    // If .js not ifLoaded properly we can still see the disabled tabs
    $('.nav-link.disabled').css('opacity', '0');

    const ifLoading = () => {
        const interval = Math.random() * 500;
        const increment = Math.floor(Math.random() * 3) + 3;
        const opacity = progress < 100 ? progress / 100 : 1;

        $('.progress-bar').css('width', `${progress}%`);
        $('.progress span').text(`${progress}%`);
        $('.nav-link.disabled').css('opacity', `${opacity}`);

        const timer = setTimeout(ifLoading, interval);

        const ifLoaded = () => {
            clearTimeout(timer);
            $('.progress-bar').css('width', '100%');
            $('.progress span').text('100%');

            setTimeout(() => {
                if (methodsMenu.isXs()) {
                    methodsAnimation.setAnimation('.navbar-brand', 'fade 1.5s forwards')
                    $('.navbar-brand').one('animationend', (e) => {
                        $(e.currentTarget).addClass('disabled');
                    });
                }
                methodsAnimation.setAnimation('.nav-link:not(.nav-brand)', 'fade 1.5s ease-in-out infinite');
                $('.nav-link:not(.nav-brand)').removeClass('disabled');

                methodsMenu.setStyle('.progress span', '', 'text-warning bg-info px-2', { 'font-size': '1rem' });
                $('.progress span').text('Click either tab to start');
            }, 3000);
        };

        progress >= 100 ? ifLoaded() : progress += increment;
    };
    return ifLoading();
})
