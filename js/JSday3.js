var arr = [1, 2, '3', 4, 5];
console.log(arr);
console.log(arr[2]);
console.log('the value of 3rd index is:', arr[3]);

var myName = 'Jason';
console.log(myName[2]);
console.log(myName[10]);

var cars = ['Toyota', 'Honda', 'BMW', 'Mitsubishi', 'Tesla', 'Ferrari'];
console.log(cars);
var cars2 = ['Porche', 'Isuzu', 'Lamborghini'];
console.log(cars2);

console.log('Using at:', cars.at(2)); //cars.at(2) is similar with cars[2];
console.log('Concat:', cars.concat(cars2)); //concatinate cars and cars2
console.log('cars length:', cars.length);
console.log('cars2 length:', cars2.length);
console.log('Sorted cars in Ascending:', cars.sort());//Sort from ascending
console.log('Sorted cars2 in Ascending:', cars2.sort());//Sort from ascending
console.log('Sorted cars in Desccending:', cars.reverse());//Sort from descending
console.log('Sorted cars2 in Desccending:', cars2.reverse());//Sort from descending

console.log('Splice method:', cars2.splice(0,1)); // .splice(Index No., No. of items starting from index)
console.log('After Splice:', cars2);

var carsPush = cars.push('Mazda');
console.log('Push Method (cars):', cars);//add element to the end of the array

cars.pop();
console.log('Pop method (cars):', cars); //delete last element of the array

cars2.unshift('Kia');//add element from the beginning of the array
console.log('Unshift method (cars2):', cars2);