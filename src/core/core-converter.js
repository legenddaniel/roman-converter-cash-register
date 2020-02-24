// Roman converter core functions

(() => {
    return convertToRoman = num => {

        const converter = [
            { 'M': 1000 },
            { 'D': 500 },
            { 'C': 100 },
            { 'L': 50 },
            { 'X': 10 },
            { 'V': 5 },
            { 'I': 1 }
        ];

        let cacheNum = num;
        const cacheRoman = [];

        // Iterate and decompose the numbers and convert them to roman numerals
        for (let i of converter) {
            const reference = Object.entries(i)[0];
            while (cacheNum >= reference[1]) {
                cacheRoman.push(reference[0]);
                cacheNum -= reference[1];
            }
        }

        const replace = {
            'IIII': 'IV',
            'XXXX': 'XL',
            'CCCC': 'CD',
            'VIV': 'IX',
            'LXL': 'XC',
            'DCD': 'CM'
        }

        const roman = cacheRoman.join('').replace(/IIII|XXXX|CCCC/g, item => replace[item]).replace(/VIV|LXL|DCD/g, item => replace[item])

        return roman;
    };
}) ();

(() => {
    return convertToNum = roman => {

        // The restriction to the input value will be added during DOM manipulation, here we assume the user has input a valid value
        const converter = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        };

        const replace = {
            'IIII': 'IV',
            'XXXX': 'XL',
            'CCCC': 'CD',
            'VIV': 'IX',
            'LXL': 'XC',
            'DCD': 'CM'
        };

        // reverseReplace: swap the keys and values of replace {}
        const valPre = Object.keys(replace);
        const reverseReplace = valPre.reduce((reverseReplace, key) => {
            reverseReplace[replace[key]] = key;
            return reverseReplace;
        }, {})

        const cacheRoman = roman.toUpperCase().replace(/IX|XC|CM/g, item => reverseReplace[item]).replace(/IV|XL|CD/g, item => reverseReplace[item]).split('');

        const num = cacheRoman.map(digit => converter[digit]).reduce((a, b) => a + b);

        return num;
    };
}) ();