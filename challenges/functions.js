// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function add(a, b , callback){ 
  console.log(`The sum of ${a} and ${b} is ${a+b}. \n` ); 
  callback(a,b); 
  } 
    
  // disp() function is called just 
  // after the ending of add() function  
  function multi(a,b){ 

  console.log(`This muplication of ${a} and ${b} must be printed after addition, and is: ${a*b}`); 
  } 
    
  // Calling add() function 
  add(5,6,mulDisplay);     
    
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a,b){
  return a+b;
  };
  function consume(a,b,callback){
    return callback(a,b);
  };
  
  
  function multiply(a,b){
    return a*b;
    };
  function greeting(first_name, last_name){
    
    return `Hello ${first_name} ${last_name}, nice to meet you!"`
  };
  

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:  extyernal is a global variable to function myFunction(), at first it searches to see
// external, but doesn't see it so it searches to its extertal block
// the same for variable internal for nestedFunction()


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
