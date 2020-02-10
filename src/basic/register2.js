{
    //Cash register answer part
    const setScoreCash = (() => {
        return ifNoScore = () => {
            for (let i in cacheScoreCash) {
                cacheScoreCash[i] = 0;
            }
            $('.btn-score span').text('Score: 0%');
        };
    })();

    const cacheScoreCash = methodsMain.initCache('scoreCash');

    $('#answer').on('change', e => {
        $(e.currentTarget).is(':checked') ? $('.answer label').text('Yes') : $('.answer label').text('No');
    });

    $('.answer button').on('click', () => {

        const setCid = () => {
            const cid = [];
            const qty = getQty();
            const denom = Object.keys(currency);
            for (let i = 0; i < qty.length; i++) {
                cid.push([denom[i], qty[i]]);
            }
            return cid;
        };
        const cacheResult = checkCashRegister($('#total').val(), $('#received').val(), setCid());

        // The order of the denomination is the same as on the webpage
        const result = [...cacheResult.slice(6), ...cacheResult.slice(0, 6)];
        const isChecked = $('#answer').prop('checked');
        const changeDue = result.some(i => i);

        const setResult = () => {
            for (let i = 0; i < result.length; i++) {
                $(`.qty-denom:eq(${i}) + .badge`).text(result[i]);
            }
            $('.qty-denom + span').not(':contains(0)').css('visibility', 'visible');
        };
        if (changeDue) {
            setResult();
        }

        const setAlert = (text, ...setPropParameters) => {
            $('.alert span').text(text);
            methodsMenu.setStyle('.alert', ...setPropParameters, { 'visibility': 'visible' });
        };
        if ($('.answer').attr('data-text') === 'Do you think we can make this?') {
            if (!(isChecked ^ changeDue)) {
                cacheScoreCash.correct++;
                setAlert('You got it!', 'alert-danger alert-warning', 'alert-success');
            } else {
                setAlert('Goose egg!', 'alert-success alert-warning', 'alert-danger');
            }
            cacheScoreCash.total++;
            cacheScoreCash.score = Math.round(100 * cacheScoreCash.correct / cacheScoreCash.total);
        } else {
            setAlert("Let's move on to the next!", 'alert-danger alert-success', 'alert-warning');
        }
        methodsMain.setVal('scoreCash', cacheScoreCash);

        $('.btn-score span').text(`Score: ${cacheScoreCash.score}%`);
        $('#answer').prop({ 'disabled': true, 'tabindex': '-1' });
        $('.answer').attr('data-text', '(Re)set the values to continue');
        $('.current-score').html(methodsMain.setScoreHtml());
    });

    $('.tab-cash .alert .close').on('click', e => {
        $(e.currentTarget).parent().css('visibility', 'hidden');
    });
}