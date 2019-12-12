const checkCashRegister = (price, cash, cid) => {

    const currency = {
        // For simpler calculation we bring penny which is rarely used to here
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
    // 'PENNY': 0 - 200 (0 - 2)
    // 'NICKEL': 0 - 100 (0 - 5)
    // 'DIME': 0 - 100 (0 - 10)
    // 'QUARTER': 0 - 200 (0 - 50)
    // 'LOONIE': 0 - 200 (0 - 200)
    // 'TOONIE': 0 - 200 (0 - 400)
    // 'FIVE': 0 - 100 (0 - 500)
    // 'TEN': 0 - 200 (0 - 2000)
    // 'TWENTY': 0 - 100 (0 - 2000)
    // 'FIFTY': 0 - 50 (0 - 2500)
    // }

    let [cacheChange, status, changeDue, change] = [cid, '', cash - price, []];
    const cashCal = money => money.flat().filter(a => typeof a === 'number').reduce((a, b) => a + b);
    const balance = cashCal(cid);
    cid.reverse();

    // First we count how many we need for this face value of cash, then take all/part of a specific face value of cash out of the cid and set it as the change, finally calculate how much left for the calculation of next face value of cash. *100/100 for rounding issue
    for (let unit = 0; unit < cid.length; unit++) {
        const need = Math.floor(changeDue / currency[cid[unit][0]]);
        cacheChange[unit][1] = (need <= cid[unit][1]) ? need : cid[unit][1];
        changeDue = Math.round((changeDue - cacheChange[unit][1] * currency[cid[unit][0]]) * 100) / 100;
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


console.log(checkCashRegister(19.5, 20, [["PENNY", 5], ["NICKEL", 5], ["DIME", 5], ["QUARTER", 5], ["LOONIE", 1], ["TOONIE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["FIFTY", 0]]));