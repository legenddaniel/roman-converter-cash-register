// Immutable public methods

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
            const cacheItem = JSON.parse(localStorage.getItem(item));
            const cacheProp = cacheItem[prop];

            if (prop && cacheProp) {
                return cacheProp;
            } else if (!prop) {
                return cacheItem;
            }
            return 0;
        } catch (e) { // Identifier 'e' only for IE/Edge support
            return 0;
        }
    },

    setVal: (item, val) => {
        const valToSet = JSON.stringify(val);
        localStorage.setItem(item, valToSet);
    },

    clearProp: function (item) {
        const clear = this._init[item].methodClearProp();

        clear();
        localStorage.removeItem(item);
    },

    setScoreHtml: function () {
        const setItem = item => this.getProp('scoreCash', item);
        const [correct, total, score] = [setItem('correct'), setItem('total'), setItem('score')];
        return (
            `Current:<br>
            { "correct": ${correct}, "total": ${total}, "score": ${score}% }`
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
        const [_selector, _remove, _add, _css] = [this[selector] || selector, this[remove] || remove, this[add] || add, this[css] || css];
        $(_selector).removeClass(_remove).addClass(_add).css(_css);
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

((...objects) => {
    objects.forEach(object => Object.freeze(object));
}) (methodsMenu, methodsMain, methodsAnimation)

// We can even use Proxy to cut the access to the private props from the outside
