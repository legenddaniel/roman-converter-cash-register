$(() => {
    // const interval = () => Math.random() * 1000;
    // let progress = 0;
    // const fnLoading = () => {
    //     $('.progress-bar').css('width', `${progress}%`);
    //     $('.progress span').text(`${progress}%`);
    //     const fnLoaded = () => {
    //         clearInterval(loading);
    //         $('.progress-bar').css('width', '100%');
    //         $('.progress span').text('100%');
    //         return setTimeout(() => {
    //             $('.progress span').addClass('text-warning bg-info px-2');
    //             $('.progress span').css('font-size', '1rem');
    //             $('.progress span').text('Click either tab to start');
    //         }, 3000)
    //     }
    //     const step = () => Math.floor(Math.random() * 11) + 10;
    //     progress >= 100 ? fnLoaded() : progress += step();
    // }
    // const loading = setInterval(fnLoading, interval());
    // return loading;
    let progress = 0;
    const fnLoading = () => {
        const interval = Math.random() * 1000;
        const step = Math.floor(Math.random() * 11) + 10;
        $('.progress-bar').css('width', `${progress}%`);
        $('.progress span').text(`${progress}%`);
        progress += step;
        const fnTime = setTimeout(fnLoading, interval);
        const fnLoaded = () => {
            console.log(progress);
            clearTimeout(fnTime);
            $('.progress-bar').css('width', '100%');
            $('.progress span').text('100%');
            return setTimeout(() => {
                $('.progress span').addClass('text-warning bg-info px-2');
                $('.progress span').css('font-size', '1rem');
                $('.progress span').text('Click either tab to start');
            }, 3000);
        };
        // console.log(progress);
    };

    // progress >= 100 ? fnLoaded() : fnLoading();

})
