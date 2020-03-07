// Initialization of some html/bootstrap components

$(() => {

    const setPopover = (selector, parameter) => {
        selector.popover(parameter);
    };
    const $history = $('.clear-history');
    const $score = $('.btn-score');
    const popoverHistory = {
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
    };
    const popoverScore = {
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
    };

    $('.btn-score span').text(`Score: ${methodsMain.getProp('scoreCash', 'score')}%`);
    
    $('.eye, .btn-history button').tooltip();

    setPopover($history, popoverHistory);
    setPopover($score, popoverScore);

    $('body').on('shown.bs.popover', () => {
        $('.popover-body a').on('click', () => {
            setPopover($history, 'hide');
            setPopover($score, 'hide');
        })
    })

    $('.mobile').on('click', e => {
        $('nav ul').toggle();
        e.stopPropagation();
    })
})