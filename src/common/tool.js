// Initialization of some html/bootstrap components

$(() => {

    const setMenu = () => {

        // It is better to set style in .css by media query, but here we can use public method to set the style with other preseted Bootstrap styles together which is more convenient
        if (methodsMenu.isXs()) {
            methodsMenu.setIfXs();
            methodsMenu.setStyle('_selector', '_offset', '_other', '_css1');
            methodsMenu.setMr('.navbar-brand', 0);
        } else {
            methodsMenu.setUnlessXs();
            methodsMenu.setStyle('_selector', '_other', '_offset', '_css2');
            methodsMenu.setMr('.navbar-brand', '1rem');
        }
    };

    $('.btn-score span').text(`Score: ${methodsMain.getProp('scoreCash', 'score')}%`);

    $('.eye, .btn-history button').tooltip();

    $('.clear-history').popover({
        placement: 'bottom',
        html: true,
        title: 'You are cleaning the history',
        content: `
        <div>
            <span>All records will be removed &nbsp;&nbsp;</span>
            <a class="confirm-clear-history btn btn-sm btn-danger">Yes</a>
            <a class="btn btn-sm btn-link">No</a>
        </div>
    `
    })
    $('.btn-score').popover({
        placement: 'bottom',
        html: true,
        title: 'You are resetting the score',
        content: () => {
            return (
                `<div>
                    <span>Score will be restored to 0 &nbsp;&nbsp;</span>
                    <a class="confirm-clear-score btn btn-sm btn-danger">Yes</a>
                    <a class="btn btn-sm btn-link">No</a>
                </div>
                <p class="current-score">${methodsMain.setScoreHtml()}</p>
                `
            );
        },
    });
    $('body').on('shown.bs.popover', () => {
        $('.popover-body a').on('click', () => {
            $('.clear-history, .btn-score').popover('hide');
        })
    })

    methodsMain.ifResize(setMenu);

    $('.mobile').on('click', e => {
        $('nav ul').toggle();
        e.stopPropagation();
    })
})