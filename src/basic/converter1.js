// Roman converter implementation

{
    let clickCount = 0;
    $('.get-roman').on('click', () => {
        const inputVal = $('.input-roman').val();
        const testVal = reg => reg.test(inputVal);
        const regNum = /^[1-3]\d{0,3}$|^[4-9]\d{0,2}$/; // 1-3999
        const regRoman = /^m{0,3}(cd|cm|d?c{0,3})(xl|xc|l?x{0,3})(iv|ix|v?i{0,3})$/i;
        const ifValid = () => {
            clickCount = 0;
            $('#output-roman').addClass('bg-light');
        }
        const ifInvalid = () => {
            $('#output-roman')
                .val('')
                .removeClass('bg-light')
                .prop('placeholder', 'Invalid value, please try again');
            clickCount >= 2 ? $('#output-roman').prop('placeholder', 'Check the link below for help') : clickCount++;
        }

        if (testVal(regNum)) {
            $('#output-roman').val(convertToRoman(inputVal));
            ifValid();
        } else if (testVal(regRoman) && inputVal.length) {
            $('#output-roman').val(convertToNum(inputVal));
            ifValid();
        } else {
            ifInvalid();
        }

        return getValid = () => inputVal.length && (testVal(regNum) || testVal(regRoman));
    })
}