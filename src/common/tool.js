// Initialization of some html/bootstrap components

$(() => {

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

    $('.mobile').on('click', e => {
        $('nav ul').toggle();
        e.stopPropagation();
    })
})