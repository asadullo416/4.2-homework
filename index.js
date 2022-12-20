// Birinchi masala massiv elementlarining yig'indisini hisoblash //
let massiv = [1, 2, 3, 4, 5, 6,];
let sum = 0;

massiv.forEach(function (elem) {  
    sum += elem; 
})
// console.log(sum)


// uchinchi masala necta odam ovoz berganini topuvchi masala //

var voters = [
    {name:'Bob' , age: 30, voted: true}, 
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let ovozberganlar = 0;


voters.forEach(function (ovoz) {
    if (ovoz.voted == true) {
        ovozberganlar += ovoz.voted;
    }
})
// console.log(`${ovozberganlar} kishi ovoz bergan`)







// yettinchi masala musbat sonlarning yig'indisini topish //

let numbers = []

let sonlarYigindisi = 0;

function func (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sonlarYigindisi += numbers[i]
        }
    }
}

func([1, -4, 12, 0, -3, 29, -150]);
//console.log(sonlarYigindisi)