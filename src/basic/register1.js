{
    // Cash register question part

    $('.btn-set').on('click', () => {

        $('.qty-denom').css('visibility', 'visible');
        $('.qty-denom + span').not(':contains(0)').css('visibility', 'hidden');
        $('.alert').css('visibility', 'hidden');
        $('#answer').prop({ 'disabled': false, 'tabindex': '0' });
        $('.answer').attr('data-text', 'Do you think we can make this?');

        // For easy calculation we assume the total amount is under $100 and the face value of the received cash is just greater than the total amount
        $('#total').val((Math.random() * 99.51 + 0.5).toFixed(2));
        $('#received').val(Object.values(currency).find(denom => denom >= $('#total').val()) || 100);

        const generator = (...setAmt) => {
            // Generates random amount of cash, be cautious that the order of the denomination (setAmt) is per the order of icons (i.e. starting from $5) on the webpage rather than of the Object 'currency' above
            const cacheQty = setAmt.map(i => Math.floor(Math.random() * (i + 1)));
            return [cacheQty.slice(0, 4), cacheQty.slice(4)];
        };
        const qty = generator(2, 5, 3, 1, 8, 2, 8, 6, 8, 4);
        const setDenom = () => {
            for (let i = 0; i < qty[0].length; i++) {
                $(`.ul-banknotes li:eq(${i}) span.qty-denom`).text(qty[0][i]);
            }
            for (let i = 0; i < qty[1].length; i++) {
                $(`.ul-coins li:eq(${i}) span.qty-denom`).text(qty[1][i]);
            }
        };
        setDenom();
        return getQty = () => [...qty[1], ...qty[0]]; // Re-order the array
    })

    $('body').on('shown.bs.popover', () => {
        $('.confirm-clear-score').on('click', () => {
            methodsMain.clearProp('scoreCash');
        })
    })
}
