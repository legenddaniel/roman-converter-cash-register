// Public methods

const methodsMain = {

    initCache: function (item) {
        if (item === 'historyRoman') {
            return this.getProp('historyRoman') || { "input": [], "output": [] };
        } else if (item === 'scoreCash') {
            return this.getProp('scoreCash') || { "correct": 0, "total": 0, "score": 0 }
        }
    },

    getProp: (item, prop) => {
        try {
            const cacheProp = JSON.parse(localStorage.getItem(item))[prop];
            if (prop && cacheProp) {
                return cacheProp;
            } else if (!prop) {
                return JSON.parse(localStorage.getItem(item));
            }
            return 0;
        } catch (e) { // Identifier 'e' only for IE/Edge support
            return 0;
        };
    },

    setVal: (item, val) => {
        return localStorage.setItem(item, JSON.stringify(val));
    },

    clearProp: item => {
        if (item === 'historyRoman') {
            ifNoHistory();
        } else if (item === 'scoreCash') {
            ifNoScore();
        }
        localStorage.removeItem(item);
    },

    setScoreHtml: () => {
        return (
            `Current:<br>
            { "correct": ${methodsMain.getProp('scoreCash', 'correct')}, "total": ${methodsMain.getProp('scoreCash', 'total')}, "score": ${methodsMain.getProp('scoreCash', 'score')}% }`
        );
    },

    ifResize: fn => {
        fn();
        $(window).on('resize', fn);
    },
};

const methodsMenu = {
    _selector: 'nav ul',
    _offset: 'offset-lg-3 offset-sm-2 offset-1',
    _other: 'flex-column bg-light',
    _css1: {
        'display': 'none',
        'position': 'absolute',
        'top': '5rem',
        'left': '15px',
        'z-index': 1,
    },
    _css2: {
        'display': '',
        'position': '',
        'top': '',
        'left': '',
        'transform': '',
        'z-index': ''
    },
    _cssNav: 'flex-column align-items-start',
    isXs: () => $(window).width() < 576,
    setStyle: function (selector, remove, add, css) {
        try {
            $(this[selector]).removeClass(this[remove]).addClass(this[add]).css(this[css]);
        } catch (e) { // Identifier 'e' only for IE/Edge support
            $(selector).removeClass(remove).addClass(add).css(css);
        }
    },
    setMr: (selector, mr) => {
        $(selector).css('margin-right', mr);
    },
    setIfXs: function () {
        const hide = () => {
            $('nav ul').hide();
        };
        $('.mobile').show();
        $('nav').addClass(this._cssNav);
        $('body').on('click', hide);
        $('nav li').on('hover', e => {
            $(e.currentTarget).css('background-color', 'steelblue');
        });
    },
    setUnlessXs: function () {
        $('.mobile').hide();
        $('nav').removeClass(this._cssNav);
        $('body').off('click');
    },
};

const methodsAnimation = {
    setAnimation: (selector, animation) => {
        $(selector).css({ 'animation': animation, '-webkit-animation': animation })
    },
    animationCtrl: (selector, status) => {
        $(selector).css({ 'animation-play-state': status, '-webkit-animation-play-state': status });
    },
};
