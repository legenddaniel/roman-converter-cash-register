// Roman coverter history
{
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
        const isdifferentVal = $('.input-roman').val() !== [...cacheHistoryRoman['input']].pop();
        const addVal = (i, selector) => {
            cacheHistoryRoman[i].push($(selector).val());
        };
        if (valid() && isdifferentVal) {
            addVal('input', '.input-roman');
            addVal('output', '#output-roman');
            methodsMain.setVal('historyRoman', cacheHistoryRoman);
        }
    })
    $('.btn-history button').on('click', () => {
        const $tbody = $('.history-roman tbody');
        if (!cacheHistoryRoman['input'].length) {
            ifNoHistory();
        } else {
            $tbody.empty();
            for (let i = 0; i < cacheHistoryRoman['input'].length; i++) {
                $tbody
                    .append('<tr></tr>')
                    .children('tr').eq(i).append(
                        `<td>${cacheHistoryRoman['input'][i]}</td>
                        <td>${cacheHistoryRoman['output'][i]}</td>`
                    );
            }
        }
    })
}