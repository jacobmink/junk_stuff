

const startDate = new Date(2018, 11, 10);
const rightNow = new Date();
// day in ms:
const oneDay = 1000*60*60*24;
startDate_ms = startDate.getTime();
rightNow_ms = rightNow.getTime();

const milliDiff = rightNow_ms - startDate_ms;
const dateDiff = milliDiff/oneDay;
let hoursDiff = milliDiff/1000/60/60;
hoursDiff = hoursDiff - (16*dateDiff);
// console.log(hoursDiff);
const minDiff = hoursDiff*60;
// console.log(minDiff);
const secDiff = minDiff*60;
console.log(secDiff);

let sum = 0;
var time_is_money = function (money, months, days) {
    let secondMoney = money/months/days/8/3600;
    const upTilNow = secDiff*secondMoney;
    // sum = secDiff * secondMoney;
    sum += secondMoney;
    let full = upTilNow + sum;
    console.log(full);

    document.getElementById('money').innerHTML = 'Money spent since course start: $' + full.toFixed(2);

    setTimeout(time_is_money.bind(null,money,months,days), 1000);
}

// time_is_money(14000, 3, 20);