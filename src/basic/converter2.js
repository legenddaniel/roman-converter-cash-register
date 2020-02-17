// Roman coverter history
{
    const cacheHistoryRoman = methodsMain.initCache('historyRoman');
    const getVal = val => cacheHistoryRoman[val];

    const setHistoryRoman = (() => {
        return ifNoHistory = () => {
            const text = '<tr><td colspan="2" class="text-center">No history</td></tr>';

            $('.history-roman tbody').html(text);
            for (let i in cacheHistoryRoman) {
                cacheHistoryRoman[i].length = 0;
            }
        };
    })();

    $('.get-roman').on('click', () => {
        const isdifferentVal = $('.input-roman').val() !== [...getVal('input')].pop();
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
        if (!getVal('input').length) {
            ifNoHistory();
        } else {
            const $tbody = $('.history-roman tbody');
            const setHtml = () => {
                let html = '';
                for (let i = 0; i < getVal('input').length; i++) {
                    html += '<tr>';
                    html += `<td>${getVal('input')[i]}</td>
                    <td>${getVal('output')[i]}</td>`;
                    html += '</tr>';
                }
                return html;
            };

            const tbodyHtml = setHtml();
            $tbody.html(tbodyHtml);
        }
    })
}