// Initialization of some html/bootstrap components

$(() => {

    class Popover {
        constructor(placement, html, title, content) {
            this.placement = placement;
            this.html = html;
            this.title = title;
            this.content = content;
        }
    }

    const setPopover = (selector, parameter) => {
        selector.popover(parameter);
    };
    const $history = $('.clear-history');
    const $score = $('.btn-score');

    const popoverContentHistory = `
    <div>
        <span>All records will be removed &nbsp;&nbsp;</span>
        <a class="confirm-clear-history btn btn-sm btn-danger">Yes</a>
        <a class="btn btn-sm btn-link">No</a>
    </div>
`;
    const popoverContentScore = () => {
        return (
            `<div>
                <span>Score will be restored to 0 &nbsp;&nbsp;</span>
                <a class="confirm-clear-score btn btn-sm btn-danger">Yes</a>
                <a class="btn btn-sm btn-link">No</a>
            </div>
            <p class="current-score">${methodsMain.setScoreHtml()}</p>
            `
        );
    }

    const popoverHistory = new Popover('bottom', true, 'You are cleaning the history', popoverContentHistory);
    const popoverScore = new Popover('bottom', true, 'You are resetting the score', popoverContentScore());
    setPopover($history, popoverHistory);
    setPopover($score, popoverScore);

    $('body').on('shown.bs.popover', () => {
        $('.popover-body a').on('click', () => {
            setPopover($history, 'hide');
            setPopover($score, 'hide');
        })
    })

    $('.btn-score span').text(`Score: ${methodsMain.getProp('scoreCash', 'score')}%`);

    $('.eye, .btn-history button').tooltip();

    $('.mobile').on('click', e => {
        $('nav ul').toggle();
        e.stopPropagation();
    })
})