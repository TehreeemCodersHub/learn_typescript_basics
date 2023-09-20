let sales: Number = 123445;
let ISBOOLEAN: Boolean = false;
let level;

let number: number[] = [12, 13];

let datas: number[] = [];
datas[0] = 1;
// datas.forEach(n=> n.toLocaleString );
console.log('datas'+ datas);
console.log( datas);
// tuples in typscript equilen to array
const tuple: [string, Number] = ['tehreem', 2]; 
// working on enums

enum sizes {small = 'data', medium = 2, large};
console.log(sizes[1]);

enum Weekend {
    sunday= "sun", monday="mon" , tuesday ="tue", wednesday='wed'
}

function gaetDay(day:string): Weekend {
    if (day === 'helo') {
        return Weekend.sunday;
    }
    return Weekend.sunday;
}

let day:Weekend = gaetDay('helo');
 
// working on function

function calculateTax(income:number, income_tax = 14000): number {
    
    if(income_tax> 50000) {
        return income * .8 ;
    }
    // javascript always return undefine that is not a number
    return income*3;
}
calculateTax(12000);

// working on objectts alias 
type Employee = {
    readonly names:string,
    ages:number,
    retire: (date:Date) => void;

}
let employee: Employee = {names: 'ali', ages:12,
   retire: (date:Date)=>{
    console.log(date);
 }};
 //working on union types

 function dataels(weight: number | string):number {
    if( typeof weight === 'number') {
        return weight*2;
    }
    return parseInt (weight) *5;
 }

 dataels(10);
 dataels('ok');


 type Customer = {
    birthday : Date
 }

function getCustomer(id:number): Customer | null {
    return id === 0 ? null : {birthday: new Date() };
}
const customer=getCustomer(1);

    console.log(customer?.birthday);
