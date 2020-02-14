// Initialization of some html/bootstrap components

$(() => {

    const setMenu = () => {
        const [ifXs, style, mr] = methodsMenu.isXs() ?
            [methodsMenu.setIfXs, ['_offset', '_other', '_css1'], 0] :
            [methodsMenu.setUnlessXs, ['_other', '_offset', '_css2'], '1rem'];

        ifXs();
        methodsMenu.setStyle('_selector', ...style);
        methodsMenu.setMr('.navbar-brand', mr);
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