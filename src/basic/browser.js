// Browser functioning detection

$(() => {

    // So far all good for userAgent but I will try to avoid it in the future
    const getVersion = navigator.userAgent;
    const browsers = {

        _android: {
            regex: /Android\s(\d{1,2})/,
            version: '4.4',
        },
        _safari: {
            regex: /(?:Mac|iPhone|iPad|iPod).*Version\/(\d{1,2})/,
            version: 9,
        },
        _chrome: {
            regex: /(?:Chrome\/|CriOS\/)(\d{1,2})/,
            version: 45,
        },
        _firefox: {
            regex: /(?:Firefox\/|FxiOS\/)(\d{1,2})/,
            version: 38,
        },
        _opera: {
            regex: /(?:OPR\/)(\d{1,2})/,
            version: 30,
        },
    };
    const regMS = /Trident|Edge/;
    const text = {
        'incompatible': 'Try the latest version of your browser to see how strong the new Bootstrap 4 is!',

        'compatible': "Your browser looks cool. Let's kick it off!",

        'localstorage': '<strong>It is detected that localStorage cannot be loaded. <br>You may update your browser to the latest version or check if you are in private/anonymous/incognito browsing or open files locally by Edge/IE, otherwise the history as well as score functions will not be working. <br>The data between regular browsing and private-style browsing may not be sharing.</strong><br><br><em class="bg-light">IE & Edge do not support localstorage on local files. Please open this file on a server. Not sure if the latest Chromium Edge solves this problem</em>',
    };
    const checkCompatibility = () => {
        for (let browser in browsers) {
            Object.defineProperty(browsers[browser], 'compatibility', {
                writable: true,
                configurable: true,
                enumerable: false,
                value: (() => {
                    try {
                        return getVersion.match(browsers[browser].regex)[1] >= browsers[browser].version;
                    } catch (e) { // Identifier 'e' only for IE/Edge support
                        return false;
                    }
                })(),
            });

            if (browsers[browser].compatibility) {
                return true;
            }
        }
        return false;
    };
    const setAbout = (selector, text, remove, add) => {
        $(selector).html(text).removeClass(remove).addClass(add);
    };

    try {
        if (localStorage) {
            if (checkCompatibility()) {
                setAbout('.browser', text.compatible, 'bg-warning', 'bg-success');
            } else if (!checkCompatibility() && !regMS.test(getVersion)) {
                setAbout('.browser', text.incompatible, 'bg-success', 'bg-warning');
            }
        }
    } catch (e) {
        setAbout('.browser', text.localstorage, 'bg-success', 'bg-warning');
    }
});