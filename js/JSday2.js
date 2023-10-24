//JavaScript Assignment
var length = 0;
var width = 0;
var height = 0;

width = 10;
height = 15;
length = 23;

var product = length * width * height;
console.log(product);

//Check product id odd or even
if(product % 10 != 0){
    console.log('product is odd number');
}else{
    console.log('product is even number');
}

//Check product if divisible by 3
if(product % 3 == 0){
    console.log('divisible by 3');
}else{
    console.log('not dividible by 3');
}

console.log('Jason C. Solomon');