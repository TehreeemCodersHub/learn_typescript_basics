"use strict";
let sales = 123445;
let ISBOOLEAN = false;
let level;
let number = [12, 13];
let datas = [];
datas[0] = 1;
console.log('datas' + datas);
console.log(datas);
const tuple = ['tehreem', 2];
var sizes;
(function (sizes) {
    sizes["small"] = "data";
    sizes[sizes["medium"] = 2] = "medium";
    sizes[sizes["large"] = 3] = "large";
})(sizes || (sizes = {}));
;
console.log(sizes[1]);
var Weekend;
(function (Weekend) {
    Weekend["sunday"] = "sun";
    Weekend["monday"] = "mon";
    Weekend["tuesday"] = "tue";
    Weekend["wednesday"] = "wed";
})(Weekend || (Weekend = {}));
function gaetDay(day) {
    if (day === 'helo') {
        return Weekend.sunday;
    }
    return Weekend.sunday;
}
let day = gaetDay('helo');
function calculateTax(income, income_tax = 14000) {
    if (income_tax > 50000) {
        return income * .8;
    }
    return income * 3;
}
calculateTax(12000);
let employee = { names: 'ali', ages: 12,
    retire: (date) => {
        console.log(date);
    } };
function dataels(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    return parseInt(weight) * 5;
}
dataels(10);
dataels('ok');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
const customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map