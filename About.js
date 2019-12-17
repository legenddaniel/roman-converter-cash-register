$(() => {
    const loading = setInterval(fnLoading, interval);
    const interval = Math.random() * 1000;
    const step = Math.floor(math.random() * 11) + 10;
    let progress = 0;
    const fnLoading = () => {
        $('.progress-bar').style.width = `${progress}%`;
        $('.progress span').text(`${progress}%`);
        const fnLoaded = () => {
            clearInterval(loading);
            progress = 100;
            return setTimeout(() => {
                $('.progress span').text('Click either tab to start');
            }, 3000)
        }
        progress >= 100 ? fnLoaded() : progress += step;
    } 
})
