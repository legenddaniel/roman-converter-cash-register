const checkCashRegister = (price, cash, cid) => {

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
    }

    // const cidAmount = {
    // 'PENNY': 0 - 20 (0 - 0.2)
    // 'NICKEL': 0 - 10 (0 - 0.5)
    // 'DIME': 0 - 10 (0 - 1)
    // 'QUARTER': 0 - 20 (0 - 5)
    // 'LOONIE': 0 - 20 (0 - 20)
    // 'TOONIE': 0 - 20 (0 - 40)
    // 'FIVE': 0 - 10 (0 - 50)
    // 'TEN': 0 - 20 (0 - 200)
    // 'TWENTY': 0 - 10 (0 - 200)
    // 'FIFTY': 0 - 5 (0 - 250)
    // }

    let [cacheChange, status, changeDue, change] = [cid, '', cash - price, []];
    // const cashCal = money => money.flat().filter(a => typeof a === 'number').reduce((a, b) => a + b);
    cid.reverse(); //Ready to remove

    // First we count how many we need for this face value of cash, then take all/part of a specific face value of cash out of the cid and set it as the change, finally calculate how much left for the calculation of next face value of cash. *100/100 for rounding issue
    for (let unit = 0; unit < cid.length; unit++) {
        const need = Math.floor(changeDue / currency[cid[unit][0]]);
        cacheChange[unit][1] = Math.min(need, cid[unit][1]);
        changeDue = Math.round((changeDue - cacheChange[unit][1] * currency[cid[unit][0]]) * 100) / 100;
    }

    // "Insufficient funds": either we don't have enough money, or we only have cash whose face value is greater than the change
    return (
        [status, change] = changeDue ? ["INSUFFICIENT_FUNDS", []] : ["OPEN", cacheChange.filter(unit => unit[1] !== 0)],
        {'status': status,'change': change}
    );
}

// Numbers in the cid mean amount of each face value of coin/cash
console.log(checkCashRegister(19.5, 20, [["PENNY", 5], ["NICKEL", 5], ["DIME", 5], ["QUARTER", 5], ["LOONIE", 1], ["TOONIE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["FIFTY", 0]]));