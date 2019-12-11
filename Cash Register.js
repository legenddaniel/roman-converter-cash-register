const checkCashRegister = (price, cash, cid) => {

    const currency = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    }

    let [cacheChange, status, changeDue, change] = [cid, '', cash - price, []];
    const cashCal = money => money.flat().filter(a => typeof a === 'number').reduce((a, b) => a + b);
    const balance = cashCal(cid);
    cid.reverse();

    // First we count how much we need for this face value of cash, then take all/part of a specific face value of cash out of the cid and set it as the change, finally calculate how much left for the calculation of next face value of cash. *100/100 for rounding issue
    for (let unit = 0; unit < cid.length; unit++) {
        const need = currency[cid[unit][0]] * Math.floor(changeDue / currency[cid[unit][0]]);
        cacheChange[unit][1] = (need <= cid[unit][1]) ? need : cid[unit][1];
        changeDue = Math.round((changeDue - cid[unit][1]) * 100) / 100;
    }

    // "CLOSED": number of change is exactly the same as the balance in the cash register
    // "insufficient funds": either we don't have enough money, or we only have cash whose face value is greater than the change
    if (!changeDue && cashCal(cacheChange) === balance) {
        status = "CLOSED";
        change = cid.reverse();
    } else if (changeDue) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else {
        status = "OPEN";
        // remove the face value which is not used
        change = cacheChange.filter(unit => unit[1] !== 0);
    }

    return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));