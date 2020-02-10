{
    // Roman coverter history
    const cacheHistoryRoman = methodsMain.initCache('historyRoman');
    const setHistoryRoman = (() => {
        return ifNoHistory = () => {
            $('.history-roman tbody').html('<tr><td colspan="2" class="text-center">No history</td></tr>');
            for (let key in cacheHistoryRoman) {
                cacheHistoryRoman[key].length = 0;
            }
        };
    })();

    $('.get-roman').on('click', () => {
        if (getValid() && $('.input-roman').val() !== [...cacheHistoryRoman['input']].pop()) {
            cacheHistoryRoman['input'].push($('.input-roman').val());
            cacheHistoryRoman['output'].push($('#output-roman').val());
            methodsMain.setVal('historyRoman', cacheHistoryRoman);
        }
    })
    $('.btn-history button').on('click', () => {
        if (!cacheHistoryRoman['input'].length) {
            ifNoHistory();
        } else {
            $('.history-roman tbody').empty();
            for (let i = 0; i < cacheHistoryRoman['input'].length; i++) {
                $('.history-roman tbody')
                    .append('<tr></tr>')
                    .children('tr').eq(i).append(
                        `<td>${cacheHistoryRoman['input'][i]}</td>
                        <td>${cacheHistoryRoman['output'][i]}</td>`
                    );
            }
        }
    })
    $('body').on('shown.bs.popover', () => {
        $('.confirm-clear-history').on('click', () => {
            methodsMain.clearProp('historyRoman');
        })
    });
}