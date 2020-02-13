// History and score reset

$('body').on('shown.bs.popover', () => {
    const item = {
        '.confirm-clear-history': 'historyRoman',
        '.confirm-clear-score': 'scoreCash',
    };

    for (let btn in item) {
        $(btn).on('click', () => {
            methodsMain.clearProp(item[btn]);
        });
    }
});

