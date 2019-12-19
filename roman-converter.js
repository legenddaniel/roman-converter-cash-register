// 写成一个类，输入字段为实例，有两种方法，判断输入类型自动选择方法

// 正则控制输入字段

// 添加复制按钮

const convertToRoman = num => {

    // Map is more convenient for iteration but slower, and String.replace() works better on an Object
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
        const reference = Object.values(i)[0];
        while (cacheNum >= reference) {
            cacheRoman.push(Object.keys(i)[0]);
            cacheNum -= reference;
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

    const Roman = cacheRoman.join('').replace(/IIII|XXXX|CCCC/g, item => replace[item]).replace(/VIV|LXL|DCD/g, item => replace[item])

    return Roman;
}

console.log(convertToRoman(649));

const convertToNum = roman => {

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
    const reverseReplace = Object.keys(replace).reduce((reverseReplace, key) => {
        reverseReplace[replace[key]] = key;
        return reverseReplace;
    }, {})

    const cacheRoman = roman.replace(/IX|XC|CM/g, item => reverseReplace[item]).replace(/IV|XL|CD/g, item => reverseReplace[item]).split('');

    const num = cacheRoman.map(digit => converter[digit]).reduce((a, b) => a + b);

    return num;
}

console.log(convertToNum('MMMCDXCVI'));