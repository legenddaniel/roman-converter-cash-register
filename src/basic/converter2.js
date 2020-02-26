// Roman coverter history

//StorageEvent can be used for the DOM update
{
    const cacheHistoryRoman = methodsMain.initCache('historyRoman');
    const getVal = val => cacheHistoryRoman[val];

    (() => {
        
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
        const l = getVal('input').length;

        if (!l) {
            ifNoHistory();
        } else {
            //document.createDocumentFragment()

            const $tbody = $('.history-roman tbody');
            const setHtml = () => {
                let html = '';
                const [input, output] = [getVal('input'), getVal('output')];

                for (let i = 0; i < l; i++) {
                    html += '<tr>';
                    html += `<td>${input[i]}</td>
                    <td>${output[i]}</td>`;
                    html += '</tr>';
                }
                return html;
            };

            const tbodyHtml = setHtml();
            $tbody.html(tbodyHtml);
        }
    })
}