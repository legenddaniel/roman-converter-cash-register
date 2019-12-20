//Progress-bar.js is with regard to the implementation of a running progress bar with random increments at random intervals, both changing dynamically

// Update: the opacity of the disabled nav tabs, i.e. Roman Converter & Cash Register Tabs, equals the value of the progress

$(() => {
    let progress = 0;

    // If .js not loaded properly we can still see the disabled tabs
    $('.nav-link.disabled').css('opacity', '0');

    const fnLoading = () => {
        const interval = Math.random() * 500;
        const increment = Math.floor(Math.random() * 3) + 3;
        const opacity = progress < 100 ? progress / 100 : 1;

        $('.progress-bar').css('width', `${progress}%`);
        $('.progress span').text(`${progress}%`);
        $('.nav-link.disabled').css('opacity', `${opacity}`);

        // For increment/interval with real-time change a recursive setTimeout() works better than setInterval() for each time
        const fnTimer = setTimeout(fnLoading, interval);

        const fnLoaded = () => {
            clearTimeout(fnTimer);
            $('.progress-bar').css('width', '100%');
            $('.progress span').text('100%');

            setTimeout(() => {
                $('.navbar-brand')
                    .css({ 'animation': 'fade 1.5s forwards', '-webkit-animation': 'fade 1.5s forwards' })
                    .on('animationend', (e) => {
                        $(e.currentTarget).addClass('disabled');
                    });
                $('.nav-link').not('.navbar-brand')
                    .removeClass('disabled')
                    .css({ 'animation': 'fade 1.5s ease-in-out infinite', '-webkit-animation': 'fade 1.5s ease-in-out infinite' });
                $('.progress span')
                    .addClass('text-warning bg-info px-2')
                    .css('font-size', '1rem')
                    .text('Click either tab to start');
            }, 3000);
        };

        progress >= 100 ? fnLoaded() : progress += increment;
    };
    fnLoading();
})
