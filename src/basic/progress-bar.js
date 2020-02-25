// Progress-bar.js is with regard to the implementation of a running progress bar with random increments at random intervals, both changing dynamically

// Update: the opacity of the disabled nav tabs, i.e. Roman Converter & Cash Register Tabs, equals the value of the progress

$(() => {
    let progress = 0;

    const ifLoading = () => {
        const $progressBar = $('.progress-bar');
        const $progressSpan = $('.progress span');
        
        const interval = Math.random() * 500
        const increment = Math.floor(Math.random() * 3) + 3;

        const opacity = Math.min(progress / 100, 1);
        const result = Math.min(progress, 100);

        $progressBar.css('width', `${result}%`);
        $progressSpan.text(`${result}%`);
        $('.nav-link.disabled').css('opacity', `${opacity}`);

        const timerLoading = setTimeout(ifLoading, interval);

        const ifLoaded = () => {
            clearTimeout(timerLoading);

            const timerLoaded = setTimeout(() => {
                methodsAnimation.setAnimation('.navbar-brand', 'fade 1.5s forwards')
                $('.navbar-brand').one('animationend', e => {
                    $(e.currentTarget).addClass('disabled').css('visibility', 'hidden');
                });

                methodsAnimation.setAnimation('.nav-link:not(.navbar-brand)', 'fade 1.5s ease-in-out infinite');
                $('.nav-link:not(.navbar-brand)').removeClass('disabled');

                methodsMenu.setStyle('.progress span', '', 'text-warning bg-info px-2', { 'font-size': '1rem' });
                methodsMenu.setProgressBarText();

                clearTimeout(timerLoaded);
            }, 3000);
        };

        progress >= 100 ? ifLoaded() : progress += increment;
    };
    return ifLoading();
})
