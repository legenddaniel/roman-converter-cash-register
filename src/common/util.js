// Public methods namespaces

const methodsMain = {
    _init: {
        'historyRoman': {
            value: { "input": [], "output": [] },
            methodClearProp: () => ifNoHistory,
        },
        'scoreCash': {
            value: { "correct": 0, "total": 0, "score": 0 },
            methodClearProp: () => ifNoScore,
        },
    },

    initCache: function (item) {
        return this.getProp(item) || this._init[item].value;
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

    clearProp: function (item) {
        const clear = this._init[item].methodClearProp();

        clear();
        localStorage.removeItem(item);
    },

    setScoreHtml: function() {
        const setItem = item => this.getProp('scoreCash', item);
        return (
            `Current:<br>
            { "correct": ${setItem('correct')}, "total": ${setItem('total')}, "score": ${setItem('score')}% }`
        );
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
