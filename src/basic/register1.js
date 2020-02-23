// Cash register question part

$('.btn-set').on('click', () => {

    $('.qty-denom').css('visibility', 'visible');
    $('.qty-denom + span').not(':contains(0)').css('visibility', 'hidden');
    $('.alert').css('visibility', 'hidden');
    $('#answer').prop({ 'disabled': false, 'tabindex': '0' });
    $('.answer').attr('data-text', 'Do you think we can make this?');

    const halfToHundred = (Math.random() * 99.51 + 0.5).toFixed(2);
    const justGreaterThanTotal = Object.values(currency).find(denom => denom >= $('#total').val()) || 100;
    $('#total').val(halfToHundred);
    $('#received').val(justGreaterThanTotal);

    // The order of the denomination is per the order of icons (i.e. starting from $5) on the webpage rather than of the Object 'currency' above
    let faceValue = [2, 5, 3, 1, 8, 2, 8, 6, 8, 4];
    const generator = setAmt => {
        const cacheQty = setAmt.map(i => Math.floor(Math.random() * (i + 1)));
        return [cacheQty.slice(0, 4), cacheQty.slice(4)];
    };
    const qty = generator(faceValue);

    const setDenom = () => {

        // Even if it will change the DOM for i*j times but it won't trigger the reflow so document fragment is not being used here
        const moneyType = ['.ul-banknotes', '.ul-coins'];
        for (let i = 0; i < moneyType.length; i++) {
            for (let j = 0; j < qty[i].length; j++) {
                $(`${moneyType[i]} li:eq(${j}) span.qty-denom`).text(qty[i][j]);
            }
        }
    };
    setDenom();

    return getQty = () => [...qty[1], ...qty[0]];
})

