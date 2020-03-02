const exchangeRate = 23208;
let typeCurrency = prompt("choose your currency USD or VND ?")

const VND = {
    VND: 1,
    USD: 0.000043,
    KRW: 0.052
};

const USD = {
    VND: 23208,
    USD: 1,
    KRW: 1192
};

const KRW = {
    VND: 19.47,
    USD: 0.00084,
    KRW: 1
};

function vndtoUsd(amountVND) {
    let result = amountVND / exchangeRate
    return Math.round(result * 100) / 100
}

function usdtoVND(amountUSD) {
    let result = amountUSD * exchangeRate
    return result
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

function checkTypeOfVnd() {
    let amountVND = parseInt(prompt("How much VND?"))
    if (amountVND) {
        prompt(
            formatCurrency('VND', amountVND) + " is same as " +
            formatCurrency('USD', vndtoUsd(amountVND))
        )
    } else {
        alert("This input require type of number")
        checkTypeOfVnd()
    }
}

function checkTypeOfUSD() {
    let amountUSD = parseInt(prompt("How much USD?"))
    if (amountUSD) {
        prompt(
            formatCurrency('USD', amountUSD) + " is same as " +
            formatCurrency('VND', usdtoVND(amountUSD))
        )
    } else {
        alert("This input require type of number")
        checkTypeOfUSD()
    }

}

if (typeCurrency.toLocaleUpperCase() === 'VND') {
    checkTypeOfVnd()
} else if (typeCurrency.toLocaleUpperCase() === 'USD') {
    checkTypeOfUSD()
}