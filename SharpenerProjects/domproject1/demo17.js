
// // var getA = function(a){
// //     return a;
// // }

// let getA = a=> a;

// console.log(getA(1));

// //let square = a => a*a;

// let square = (a) => { return a*a};

// console.log(square(2));

// let multiply = (a,b) => {return a*b};

// console.log(multiply(4,5));

// var x = function(){

//     this.value = 1;
//     setTimeout(function(){
//        this.value++;
//        console.log(this.value);
//     },1);
// }
// x();

// var y = (...n) => {
//     console.log(n[1]);
// }

// y(1,2,3);

var helper = function(){
    console.log(arguments[1]);
}

helper(1,2,3);