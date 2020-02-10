// Cash register core functions

const currency = {
    // For simpler calculation we bring penny which has been discontinued back here

    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'LOONIE': 1,
    'TOONIE': 2,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'FIFTY': 50
};

(() => {
    return checkCashRegister = (price, cash, cid) => {
        // Greedy algorithm

        let [cacheChange, changeDue, change] = [cid, cash - price, []];
        cid.reverse();

        // First we count how many we need for this face value of cash, then take all/part of a specific face value of cash out of the cid and set it as the change, finally calculate how much left for the calculation of next face value of cash. *100/100 for rounding issue
        for (let unit = 0; unit < cid.length; unit++) {
            const need = Math.floor(changeDue / currency[cid[unit][0]]);
            cacheChange[unit][1] = Math.min(need, cid[unit][1]);
            changeDue = Math.round((changeDue - cacheChange[unit][1] * currency[cid[unit][0]]) * 100) / 100;
        }

        const flatten = arr => arr.join(',').split(',').map(num => +num);
        change = changeDue ? [] : flatten(cacheChange.reverse());

        return change.filter(i => +i >= 0);
    };
})();