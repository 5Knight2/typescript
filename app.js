var num1Element = document.querySelector('#num1');
var num2Element = document.querySelector('#num2');
var btnElement = document.querySelector('button');
var numResults = [];
;
btnElement.addEventListener('click', btn);
function btn(e) {
    e.preventDefault();
    var result = add(+num1Element.value, +num2Element.value);
    numResults.push(result);
    printResult({ val: result, active: false });
}
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + num2;
    else
        return +num1 + +num2;
}
function printResult(result) {
    console.log(result.val);
}
var myPromise = new Promise(function (res, rej) {
    setTimeout(function () { console.log(res('worked')); }, 1000);
});

myPromise
    .then(function (result) { console.log(result.split('o')); });
