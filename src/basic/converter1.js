// Roman converter implementation

{
    let clickCount = 0;
    $('.get-roman').on('click', () => {
        const $outputRoman = $('#output-roman');
        const $inputVal = $('.input-roman').val();

        const testVal = reg => reg.test($inputVal);
        const regNum = /^[1-3]\d{0,3}$|^[4-9]\d{0,2}$/; // 1-3999
        const regRoman = /^m{0,3}(cd|cm|d?c{0,3})(xl|xc|l?x{0,3})(iv|ix|v?i{0,3})$/i;

        const isValid = $inputVal.length && (testVal(regNum) || testVal(regRoman));
        const validVal = convertToRoman($inputVal) || convertToNum($inputVal);

        const ifValid = () => {
            clickCount = 0;
            $outputRoman
                .val(validVal)
                .addClass('bg-light');
        };
        const ifInvalid = () => {
            const tooMany = clickCount >= 2;
            const placeholder = tooMany ? 'Check the link below for help' : 'Invalid value, please try again';

            clickCount = tooMany ? clickCount : ++clickCount;
            $outputRoman
                .val('')
                .removeClass('bg-light')
                .prop('placeholder', placeholder);
        };

        isValid ? ifValid() : ifInvalid();

        return function valid() {
            return isValid;
        }
    });
}