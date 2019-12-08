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

    let change = [];
    let status;
    let changeDue = cash - price;
    const cashCal = money => money.flat().filter(a => typeof a === 'number').reduce((a, b) => a + b);
    cid.reverse();

    if (changeDue > cashCal(cid)) {
        status = "INSUFFICIENT_FUNDS";
    }

    for (let unit = 0; unit < cid.length; unit++) {
        change.push(cid[unit]);
        // need: how much we need for this face value of cash
        let need = currency[change[unit][0]] * Math.floor(changeDue / currency[change[unit][0]]);
        // take all/part of a specific face value of cash out of the cid and set it as the change
        change[unit][1] = (need <= cid[unit][1]) ? need : cid[unit][1];
        // how much left for the next face value of cash, *100/100 for rounding issue
        changeDue = Math.round((changeDue - change[unit][1]) * 100) / 100;
    }

    // remove the face value which is not used
    for (let unit = 0; unit < change.length; unit++) {
        if (!(change[unit][1])) {
            change.splice(unit, 1);
            unit--;
        }
    }

    if (!changeDue && cashCal(change) === cachCal(cid)) {
        status = "CLOSED"; // the change is exactly the same as the cid balance
        change = cid.reverse();
    } else if (changeDue) {
        status = "INSUFFICIENT_FUNDS"; // cid balance not enough for the change
        change = [];
    } else {
        status = "OPEN";
        // how much left in the cid after changing
        for (let unit = 0; unit < change.length; unit++) {
            if (!(change[unit][1])) {
                change.splice(unit, 1);
                unit--;
            }
        }
    }

    return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));