//variables
function example(){
    let b = 2;
    for(i=0;i<b;i++){
        let b= 0
    }

}
//arrays
//concat - adds/concats two arrays
//copyWithin - copys specified value to other indexes 


//entries -Create an Array Iterator then iterate over the key/value pairs:
function exampleOfEntries(){
    const fruits = ["Banana", "Orange", "Apple", "Mango" ]
    const iterator = fruits.entries();
    for(var e of iterator){
        console.log(e)
    }
}
function exampleOfEntries2(){
    const obj = {a:5,b:7,c:9, d:5, a:4} 
    for(const[key, value] of Object.entries(obj)){
        
        console.log(`${key}: ${value}`)
    }
    
    //any first value is key and 2nd is value after variable u
}

//fill- fill the element with value
function exampleOfFill(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //array.fill(value, start, end)
    console.log( fruits.fill("Kiwi") )
}
function exampleOfFill2(){
    const fruits = [1,2,3,4,5,6,7,8,9];
    //array.fill(value, start, end)
    //does not include the END 
    console.log(fruits.fill("Kiwi", 2, 4))
}

//filter - returns array of all elements that passes the test
function exampleOfFilter(){
    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
    return age >= 18;
    }
    console.log(result);
}
//on string

//find - returns first value that passes test
function exampleOfFind(){
    const ages = [32, 33, 16, 40];
    const result = ages.find(checkAdult);

    function checkAdult(age) {
    return age >= 18;
    }
    console.log(result);
}

//Slice returns a shallow copy of a portion of an array into a new array object
function exampleOfSlice(){
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits.slice(-3))
    //substring includes end and start
}
//forEach
function exampleOfForeach(){
    let text=""
    const fruits = ["apple", "orange", "cherry"];
    fruits.forEach(e=> console.log(e)); 
}


//push last in
//pop last out
//sort
//flat
function exampleOfFlat(){
    const array1 = [1, 2, 3, [4, 5, [6, [7], 8],9 ]];
    console.log(array1.flat(3))
    console.log(array1.flat(Infinity))
    console.log(array1.flat(2))
    console.log(array1.flat(1))
    console.log(array1.flat())
}

//map creates a new array with the results of calling a provided function
var greatestNumber=0;
function exampleOfMap(){
    const array1 = [1, 4, 9, 12, 16];
// pass a function to map
    const map1 = array1.map(x => {
        if(x % 2 == 0){
        //    output(x);
        }
    });
    console.log(map1);
    //function calling
    const map2 = array1.map(x => isPrime(x));
    
// expected output: Array [2, 8, 18, 32]
}
function isPrime(input){
    //add function
}
function output(input){
    console.log(input)
}

//--------TASK- FIND GREATEST USING MAP----------------
var greatestNumber=0;
function taskMap(){
    const array1 = [1, 4, 9, 12, 16];
    const map3 = array1.map(x=> findGreatestNumber(x))
    console.log(greatestNumber);
}
function findGreatestNumber(input){
    if(input>greatestNumber){
        greatestNumber = input;
    }
    return greatestNumber;
}


//for each dont return array/ for each does not return 
//important for chaining


//reducer function on each element of the array, in order
function exampleOfReducer(){
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
   
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
    // expected output: 10
}
//Example
function exampleOfReducer2(){
    const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumX = array1.reduce(
      (accumulator, currentValue) => sum(accumulator,currentValue)
    );
    console.log(sumX);
    // expected output: 10
}
function sum(a,b){
    console.log(a+ "+"+ b)
    return a+b;
}
//-------------TASK OF REDUCE Divides--------------------------
function taskReducer(){
    const array1 = [100, 2, 2];
   
    const initialValue = 0;
    const divideX = array1.reduce(
      (accumulator, currentValue) => divide(accumulator,currentValue)
    );
    console.log(divideX);
    
}
function divide(a,b){
    console.log(a+ "/"+ b)
    return a/b;
}
//if there are 3 arguments the third one is index
function exampleOfReducer3(){
    const array2 = [1, 2, 3, 4, 6, 8, 9];
                //  0  1  2  3  4  5  6  
    const initialValue = 0;
    const sumX = array2.reduce(
      (accumulator, currentValue, indexValue) => sum2(accumulator,currentValue, indexValue)
    );
    console.log(sumX);
    // expected output: 10
}
function sum2(a,b,c){
    if( c % 2 == 0){
        console.log(a+ "+"+ b)
        return a+b;
    }
}
// if there is a string after int it concats it with the number
//after that it changes its type into string

//SORT
function exampleOfSort(){
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

    const array1 = [1, 8, 10, 6, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

}
//anonymous/expression function used through a variable has no name... Variable = (){}
//Recursion function calling it-self/problem converges
//Error Handling using try catch 


//CLOSURES to be studied