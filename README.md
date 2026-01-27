Javascript is a high level programming language that can be used on the client and server side with Node.js

What is JS used for?

DOM (Document Object Model) manipulation -> can change data or elements like text, titles, color etc 
Event Handling
Asynchronous Requests (API) -> Interact with the Backend-Servers via API Calls through HTTP requests to request or transmit data which is often used in SPAS (Single Page Applications) to load and update dynamic contents without reloading the entire page
Animations & Effects -> (Request Animation Frame Method) libraries like "animate CSS" & "gsap"
Data Manipulation (Sorting, Filtering etc) -> functions like map, filter, reduce, sort etc. 
Storing Data -> Local Storage, cookies, sessions etc
Create SPAS (Single Page Applications) -> Normally Vue or other Frameworks are used
Creating API's & Web services -> Node.js Deno 

Why learn JS?
Used for many different things (API's, Aplications, dynamic web pages)
Electron to build Desktop apps. (For example VS Code & Postman)

There are 3 major ways to display an alert:

1. Inline onclick calling alert directly in HTML
<button onclick="alert('Hello!')">Click me</button>

2. Inline onclick calling a JavaScript function
<button onclick="showAlert()">Click me</button>
<script>
function showAlert() {
  alert('Hello!');
}
</script>

3. Adding event listener in JavaScript
<button id="myBtn">Click me</button>
<script>
document.getElementById('myBtn').addEventListener('click', function() {
  alert('Hello!');
});
</script>

4. Adding a delay with the Timeout function
setTimeout(() => {
    alert("MyFunction Alert on click appears after 2 seconds.");
}, 2000);


There are 6 major ways to display a console messages

1. console.log()

2. console.error()

3. console.warn()

4. console.table({name: 'John', email: 'john@example.com'})

5. console.group('simple');
console.log();
console.error();
console.warn();
console.groupEnd();

6. const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cCustom Message', styles);


The 2 mayor ways of making comments

1. // single line comment

2. /* multiple lines comment */


The mayor shortcuts

1. SHIFT + UP/DOWN => mark up or down

2. SHIFT + RIGHT/LEFT => mark to the left or right

3. CMD + RIGHT/LEFT => move to the end or beginning of the line

4. OPT + RIGHT/LEFT => move to the end or beginning of the word

5. OPT + UP/DOWN => move whole line up or down

6. SHIFT + CMD + RIGHT/LEFT => mark to the end or beginning of the line

7. SHIFT + OPT + RIGHT/LEFT => mark to the end or beginning of the word

8. SHIFT + OPT + UP/DOWN => copy current line up or down

9. CMD + Z => undo last change

10. CMD + D => select next occurance of highlighted text

11. CMD + SHIFT + L => select all occurances of hightlighted text

12. OPT + CLICK => select with cursor where to insert or delete something at several places

13. CMD + SHIFT + O => search a file or folder

14. CMD + OPT + F => search in the current file

15. CTRL + ˜ => toogle terminal

16. CMD + B => toogle sidebar 


the major naming conventions
=> Only Letters, numbers, underscores and dollar signs are allowed.
=> can't start with a number


the major ways to declare a variable

1. var

2. let
=> needs to be initialized before using it
=> can be reassigned

3. const 
=> declare something that doesn't change
=> needs to be initilized before using it
=> cannot be reassign but can be manipulated


the major ways of declaring multiple variables

1. let a, b;

2. const c = 4, d = 2;


the major reference types

1. array
const arr = [1,2,3];
arr.push(4);
console.log(arr); // output: 1,2,3,4

2. object
const obj = { name : 'john', age : 30};
obj.name = 'jane'; => changes the name
obj.email = 'email@email.com' => adds a new field / property

3. function
function dosmth(){ 
  console.log('done');
}


the major primitive data types
=> are stored directly in the "stack" (memory) where it is accessed from
1. String -> sequen of characters enclosed in double quotes or single quotes
const str1 = 'Hello';
const str2 = "Hello";

2. Number -> integer and float point numbers
const int = 42;
const float = 3.14;

3. Boolean -> true or false / logical entity
const true = true;

4. Null -> intentional absence of any object value
const obj = null;

5. Undefined -> absence of any assigned / defined value
let smth1;
const smth2 = undefined;

6. Symbol -> Built-in object whose constructor returns a unique symbol
const id = Symbol('id')

7. BigInt -> numbers greater than "Number" / large integers
const n = 9999999999999999n


the major reference types (objects)
=> are non-primitive values and when assigned to a variable the variable is given a reference to that value
=> are stored in the heap and accessed by reference
1. arrays

2. functions

3. object literals


JS is a dynamically-typed laguage => it means you don't have to explicitly declare or specify the data type of variables in JS
TS is a superset of JS whoch allows static-typing which can make the code more verbose and less prone to errors

the major multi-word formatting

1. firstName = camelCase

2. first_name = underscore

3. FirstName = PascalCase => in most frontend frameworks this is the convention

4. firstcase = lowercase


the major type conversions 

the major ways to change a string to number / integer

1. parseInt()
let amount = '111';
amount = parseInt(amount); // 111

2. unary +
amount = +amount; // 111

3. Number()
amount = Number(amount); // 111


the major ways to convert a number to string

1. toString()
let amount = 111;
amount = amount.toString(); // '111'

2. String()
amount = String(amount); // '111'


the major way to convert a string to decimal / float
=> the type will be displayed as number

1. parseFloat()
let amount = '99.9';
amount = parseFloat(amount); // 99.9


the major way to convert numbers to boolean

1. Boolean()
let amount = 0;
amount = Boolean(amount); // false
// if amount is any other number than 0 then it's always true


the major ways of getting a NaN (Not a Number)

1. Math.sqrt(-1);

2. 1 + NaN;

3. undefinded + undefined

4. 'string' / 3

5. parseInt('string')


the major operators

1. Arithmetic: +, -, *, /, %

Assignment Operators
x = 10;

x += 5; // x = x + 5;

x -= 5; // x = x - 5;

x *= 5; // x = x * 5;

x /= 5; // x = x / 5;

x %= 5; // x = x % 5;

x **= 5; // x = x ** 5;

Concatenation
x = 'Hello' + ' World';

Exponent 
x = 2 ** 3; // equals 8

Increament
x = 1;
x = x + 1;
x++;

Decrement
x = x - 1;
x--;

Comparison Operators
=> Always use the tripple equal as it saves you heaache and errors
x = 2 == 2 // only tests the value not the type
x = 2 == '2' // also true as the value is the same
x = 2 === '2' // false as they are of different types (number and string)
x = 2 === 2 // true as they have the same type and value
x = 2 != 2 // false as thye are equal
x = 2 !== 2 // false as they have the same type and value

x = 10 > 5; // 10 is greater than 5 = true
x = 10 < 5; // 10 is less than 5 = false
x = 10 <= 5; // 10 is less than 5 or equal to 5 = false
x = 10 >= 5; // 10 is greater than 5 or equal to 5 = true


Type coercion
x = 5 + '5' // results in 55 (string)

x = 5 + Number('5') // results in 10 (number)

x = 5 * '5' // results in 25 (number) -> multiplication between strings doesn't make any sense

x = Number(null); // results in 0 (number)

x = Number(true); // results in 1 (number)

x = Number(false); // results in 0 (number)

x = 5 + true; // results in 6 (number)

x = 5 + false; // results in 5 (number) as false = 0

x = 5 + undefined; // results Nan (number)


Working with strings
let x;
const name = 'James';

x = 'Hello world, my name is ' + name;

Template literals
=> way easier than the above
x = `Hello world, my name is ${name}`; // string interpolation
x = `Hello world, my name is ${21*2}`; // can do any Javascript expression between curly braces

String Propeeties and Methods
const s = 'hello world';
const str = new String('hello world');

Access a protoype method
x = str.__proto__; // shows us all the different methods 

Access methods
x = s.length; // 11 as it is the amount of characters of the string 
x = str.toUpperCase(); // HELLO WORLD
x = str.toLowerCase(); // hello world

Access value by key
x = str[0]; // h as it is accessing the first character of the string
x = str.charAt(0); // h as it is getting the first letter
x = str.indexOf('h'); // 0 as it finds where 'h' starts in the string

x = str.substring(0, 4); // hell as it takes characters from 0 to 3 (not including 4)
x = str.substring(7); // orld as it takes everything from the 7th character onwards to the end

x = str.slice(0, 5); // hello as it does the same thing as substring
x = str.slice(-11); // hello world as it starts at the beginning
x = str.slice(-11, -6); // hello as it starts at the beginning and goes 5 letters back

x = str.trim(); // removes any whitespace from the beginning or end of a string

x = str.replace('world', 'John'); // hello John as it replaces 'World' with 'John'

x = str.includes('hell'); // true as hell is included in the string

x = str.valueOf(); // string as it returns the primitive value of the string

x = str.split(' '); // ["hello", "world"] as it splits the string into an array at each space
x = str.split(''); // splits by each character

Working with Numbers

let x;

const num = new Number(5);

x = num.toString(); // "5" as it converts the number to a string

x = num.toString().length; // 1 as it returns the length of the string

x = num.toFixed(2); // "5.00" as it rounds the number to two decimal places and the type is a string

x = num.toPrecision(2); // "5.0" as it rounds the number to two digits and the type is a string

x = num.toExponential(2); // "5.00e+0" as it returns the number in exponential notation two decimal places and the exponent

x = num.toLocaleString('en-US'); // "5" as it converts to a localized number string

x = num.valueOf(); // 5 as it returns the primitive value of the number object

x = Number.MAX_VALUE; // 1.7976931348623157e+308 The maximum safe integer is a constant which is equal to the highest possible integer, that can be represented in JavaScript.

x = Number.MIN_VALUE; // 5e-324 The minimum safe integer is a constant which is equal to the lowest possible integer, that can be represented in JavaScript.


Math Object

x = Math.sqrt(9); // 3 as it returns the square root of the number

x = Math.abs(-5); // 5 as it returns the absolute value of the number

x = Math.round(4.6); // 5 as it rounds to the nearest integer
x = Math.round(4.2); // 4 as it rounds to the nearest integer

x = Math.ceil(4.2); // 5 as it rounds up to the next highest integer
x = Math.floor(4.6); // 4 as it rounds down to the next lowest integer

x = Math.pow(2, 3); // 8 as it returns 2 raised to the power of 3

x = Math.min(4, 5); // 4 chooses the smaller number among the given arguments

x = Math.max(4, 5); // 5 chooses the larger number among the given arguments

x = Math.random(); // generates a random floating point number between 0 (inclusive) and 1 (exclusive)

x = Math.random() * 10; // generates a random floating point number between 0 and exclusive 10

x = Math.floor(Math.random() * 10); // generates a random integer number between 0 and 9 (inclusive) and 10 exclusive


Date & times

let d;

d = new Date(); // is a object representing current date & time

d = d.toString(); // converts to string format of the date and time

d = new Date(2025, 0, 1); // creates an object for Jan 1 2025
d = new Date(2025, 0, 1, 12, 34, 56); // creates an object for Jan 1 2025 at 12:34:56

if the year is at first it might be off by 1 day
d = new Date('2025-01-01'); // creates an object for Jan 1 2025
d = new Date('2025-01-01T12:34:56'); // creates an object for Jan 1 2025 at 12:34:56
d = new Date('01/01/2025 12:34:56'); // creates an object for Jan 1 2025 at 12:34:56
d = new Date('01-01-2025'); // creates an object for Jan 1 2025 

d = Date.now(); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
d = new Date('01-01-2025 12:34:56')
d = d.getTime(); // returns the number of milliseconds for the exact timestamp
d = d.valueOf(); // same as getTime

d = Math.floor(Date.now() / 1000); // gives us the time in seconds


Date Object Method

let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth(); // is 0 based so january is 0 and december is 11
x = d.getMonth() + 1; // now gives us the correct months so january is 1 and december is 12

x = d.getDate(); // gives us the day of the month

x = d.getDay(); // gives us the day of the week based with sunday being 0, saturday being 6

x = d.getHours(); // gives us the hours

x = d.getMinutes(); // gives us the minutes

x = d.getSeconds(); // gives us the seconds

x = d.getMilliseconds(); // gives us the milliseconds

x = '${d.getFullYear}-${d.getMonth() + 1}-${d.getDate()}'; // outputs for example '2021-07-23'

x = Intl.DateTimeFormat('en-US').format(d); // format in US english 10/20/2025
x = Intl.DateTimeFormat('en-GB').format(d); // format in UK english 20/10/2025
x = Intl.DateTimeFormat('default').format(d); // format to default where we are located
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // format to October
x = d.toLocaleString('default', { month: 'short' }); // format to Oct
x = d.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/Los_Angeles' }); // Friday, October 20, 2025 at 1:23:45 PM


Array Basics
-> special type of 'object' and data structure that stores multiple values

const arr = [1, 2, 3, 4]; 
// 1, 2, 3, 4 are called elements or items in array
// elements can be numbers, strings, booleans, objects, etc. basically any data type 
// there can also be arrays within arrays 
// the index starts from 0 and go up to n-1 where n is number of elements in array
// elements in arrays are mutable so they can be changed or manipulated

Different ways to create arrays

Array Literal
const numbers = [1, 2, 3];
const mix = [1, 'Hello', true, null];

Array Constructor
const str = new Array('a', 'b', 'c');

to access a specific element in array use brackets notation with its index.
numbers[0] // returns 1
'This is ${str[2]}ool' // returns "This is cool"

numbers.length; // returns the length of the array or how many elements are inside the array
numbers.length = 2; // changes length of the array

str[2] = 'm'; // changes value of element at index 2 to "m" 
str[3] = 'n'; // adds new element at index 3 and sets it to "n"
str[str.length] = 'v'; // adds new element to end of array (index n+1)


Array Methods

arr.push('last element'); // adds an element to the end of the array

arr.pop(); // removes last element from the array.

arr.unshift('first element') // adds first element in the array 

arr.shift(); // removes first element from the array

arr.reverse() // reverses the whole order of elements in the array

arr.includes('element') // returns true or false depending on whether it finds the specific element in the array

arr.indexOf('element') // returns index of first occurrence of specified element or -1 if not found

arr.slice(1) // returns a new array containing only the elements from index 1 to the end of the original array while the old array will be unchanged
arr.slice(1, 3) // returns a new array containing only the elements from index 1 to 2 (not including 3) while the old array will be unchanged
 
arr.splice(1, 3) // returns a new array starting at index 1 and taking 3 more items while removng those from the old array wherefore it will be modified
arr.splice(3, 1) // removes the item at index 3 in the array

chaining methods

arr.slice(1, 3).reverse().toString().charAt(0) // converts the reversed 2 elements to string and returns first character


Nesting Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(arr2); // nests the array inside the other one

arr1[3][0] // accesses 4 the first element of the nested array inside the arr1

const arr3 = [arr1, arr2]; // 2D array or matrix

arr3[0][1]; // gives us the 2nd element from arr1 which is 2


Concatinating Arrays

arr1.concat(arr2); // returns a new array with all elements of both arrays inside


Spread Operator (...)

[...arr1, ...arr2] // creates a new array and puts each element of both arrays into it


Flatten Arrays

arr = [1, 2, [3, 4], 5]; // nested array
arr.flat(); // returns [1, 2, 3, 4, 5]


Static Methods on Array Object

Array.isArray(arr) // checks if arr is an array returns true
Array.isArray('arr') // checks if 'arr' is an array returns false

Array.from('12345') // creates a new array from any iterable object such as an HTML collection or a string in this case an array of [1, 2, 3, 4, 5]

const a = 1, b = 2, c = 3;
Array.of(a, b, c) // creates an array of the arguments passed to it [1, 2, 3]


Object Literal
=> data structure that holds key/value pairs
=> keys should always be written together without space in between otherwise they could only be accessed with person['first name']

const testObj = { 
  name: 'John',
  age: 30
};

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Str',
    city: 'Berlin'
  },
  hobbies: ['Reading', 'Swimming'],
};

person.name; // accesses the value of the property with key "name" => John
person['age']; // also works, accesses the value of the property with key "age" => 30
person.address.street; // access nested properties
person.hobbies[0]; // Access the first array element

person.name = 'Josh'; // reassigns the value of the property with key "name"

delete person.age; // removes the age property from the object

person.occupation = 'Engineer'; // adds a new property to the object

person.greet = function() { console.log(`Hello, my name is ${this.name}.`); }; // adds a method to the object

person.greet(); // calls the greet method of the person object and it's name => logs "Hello, my name is Josh." to the console


Object Spread Operator

const todo = new Object();
const task = {}; // same as above also creates an empty object 

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // gives an object with all 4 values inside
const obj4 = Object.assign({}, obj1, obj2); // also works the same as spread operator above

// array of objects 
const todos = [ 
  { id: 1, name: 'Todo One' },
  { id: 2, name: 'Todo Two' },
];

todos[0]; // gives us the whole object
todos[0].name; // logs "Todo One"

Object.keys(todos); // returns an array of keys => ['id', 'name']
Object.keys(todos).length; // returns the length of the array

Object.values(todos); // returns an array of values => [{…}, {…}]0: {id: 1, name: 'Todo One'}1: {id: 2, name: 'Todo Two'}
Object.entries(todos); // returns an array of entries => [Array(2), Array(2)]

todos.hasOwnPropery('name'); // true


Destructing & Naming

const firstName = 'John';
const lastName = 'Smith';

const person = {
  firstName: firstName,
  lastName: lastName,
};

const person = {
  firstName, // name is same as variable
  lastName,
};

console.log(person.firstName); // John


Destructuring

const todo = {
  id: 1,
  title: 'Todo1',
  user: {
    name: 'John',
  }
}

const id = todo.id; // old way
const {id, title} = todo; // new way (destructured)
const { user: {name} } = todo; // new way (destructured)

const {
  id,
  title,
  user: { name },
} = todo;

const {
  id: todoId, // rename a property simply needs a colon 
  title,
  user: { name }, // using curly brackets for destructuring
} = todo;


Destructuring Arrays
const arr = [1, 2, 3, 4];

const [first, second] = arr; // gives us the first and second elements of the array 1, 2
const [first, second, ...rest] = arr; // gives us the first and second elements of the array 1, 2 and the rest in an array [3, 4] it's like the spread operator


JSON
=> JSON (JavaScript Object Notation) is a format for storing and exchanging data via API's
=> JSON is text that follows specific rules (key:value pairs) "id": "1",
name.json file
[
  {
    "id": 1,
    "title": "todo #1",
  }
]


Turning JS Objects into JSON format

const post = {
  id: 1,
  title: 'hello',
  body: 'this is a test',
};


Convert to JSON string
=> if you use the Fetch API or HTTPS requests it will normally automatically stringify it

const str = JSON.stringify(post);


Parse JSON striing back to JS object

const obj = JSON.parse(str);


to access an element it first needs to be parsed
console.log(str.id) // will log undefined
console.log(obj.id) // will log 1


const posts = [
  {
  id: 1,
  title: 'hello',
  },
  {
  id: 2,
  title: 'hello2',
  }
];

const str2 = JSON.stringify(posts); // will return a JSON array with 2 objects inside


Function Basics

function sayHello() {
  console.log('Hello'); // only declares/defines what the function should do but does not execute it unless the function is called
}

sayHello(); // will log Hello in the console as the function is invoked/called 

function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10); // will log 15 in the console as the function was invoked/called

function subtract(num1, num2) {
  return num1 - num2; // everything after the return will not be executed as we already exited the function
}

const result = subtract(10, 2); // this function call is stored in the variable 'result' and we can then use it later

console.log(result, subtract(20, 5)); // will log 8 15 in the console the second form can be useful as sometimes you don't need to return anything


Params & Arguments

Default Params
function registerUser(user = 'Bot'){ // user will be bot if no user was passed into the function
  return user + 'is registered'; // returns a string & user is only available in the function scope
}

console.log(registerUser('John')); // logs John is registered


Rest Params

function sum(...numbers) { // numbers will become an array of all parameters passed to the function
  return numbers;
}

console.log(sum(1,2,3)); // logs [1, 2, 3]

function sum(...numbers) { // summing up all the numbers in the array & returns their total
  let total = 0;

  for (const num of numbers) { // for each one of the numbers we call it num
    total += num; // add number to total
  }

  return total;
}

console.log(sum(1,2,3)); // logs 6


Objects as params

function loginUser(user) {
  return 'User ${user.name} with id ${user.id} logged in';
}

const user = {
  id: 1;
  name: 'John';
};

console.log(loginUser(user)); // logs "User John with id 1 logged in"
console.log(loginUser({ id: 2, name: 'Jane', })); // logs "User Jane with id 2 logged in"


Array as params

function rand(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(rand([1, 2, 3])); 


function rand(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(rand(1, 2, 3)); 


Global & Function Scope

window // when typed into the console gives us access to all global variables
window.alert('hello'); // will create an alertn saying hello
alert('hello'); // will do the same as above

const x = 100;

console.log(x, 'in global'); // will log 100 in global

function test1(){
  console.log(x, 'inside function'); 
}

test1(); // will log 100 inside function

if (true) {
  console.log(x, 'in block'); // will log 100 in block
}

function test2() {
  const y = 50;
  console.log(y); // will only be visible within the function as it's local variable scope
}

function test2() {
  const y = 50;
  console.log(x + y); // will return 150 because it takes the global value of x
}

function test2() {
  const x = 1;
  const y = 50;
  console.log(x + y); // will return 51 because it overwrites the global value of x with the local variable scope 1
}

test2(); // will run and log 50

//console.log(y); // this will throw an error as y is not defined outside the function test2() 


Block Scope
// always use let or const instead of var in block scope

if (true) {
  const a = 100; // is block scoped
  let b = 100; // is block scoped
  var c = 100; // is function scoped
}

for (let i = 0; i <= 5; i++) { // let i will be re-declared in each iteration of the loop because it's block scoped
 console.log(i); 
}

console.log(c) // will work as var is not block scope but a & b will not work because they are declared in block scope and only accessible within that block scope


Function Scope
// var is function scoped

function run() {
  var d = 5;
  console.log(d);
}

run(); // will log 5

console.log(d); // throws an error => ReferenceError: d is not defined


Global Scope

const foo = 1; // will not be added to the window object
var bar = 2; // will get added to the window object 


Nested Scope
from the parent function one() x can be accessed by the child function two() but not the other way around

function one(){
  const x = 1;

  function two(){
    const y = 2;
    console.log(x + y);
  }

  console.log(y) // will throw an error => ReferenceError: y is not defined

  two();
}

one(); // logs 3

if (true){
  const x = 1;

  if (x === 1){
    const y = 2;
    console.log(x + y); // will log 3
  }
  console.log(y) // will throw an error => ReferenceError: y is not defined
}


Function Declaration

console.log(addDollar(100)); // will log $100 and it works!

function addDollar(value){
  return '$' + value;
}

console.log(addDollar(100)); // will log $100

console.log(addPlus(100)); // will not work => ReferenceError: Cannot accesss 'addPlus' before initialization

Function Expression
const addPlus = function(value){
  return '+' + value;
}

console.log(addPlus(100)); // will log +100


Arrow Functions

const add = (a, b) =>{
  return a + b;
}

const subtract = (a, b) => a - b; // same as above just with subtraction as it has implicit return

const double = a => a * 2; // will only work for single parameters without ()

Returning an Object

const createObj = () => ({ // needs to have ({ name: 'John', }) otherwise it will not work
  name: 'John',
});

const numbers = [1,2,3];

numbers.forEach(function (n) { 
  console.log(n); // will log 1 2 3 each in a new line
});

Arrow function in a callback
numbers.forEach((n) => console.log({})); // does the same as above


IIFE (Immediately invoked function expressions)
if you have 2 script.js files with each const user, you can use IIFE to avoid any conflict between them

otherscript.js
const user = 'Brad';

script.js
const user = 'John' // will not work

(function() { 
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from IIFE');
  hello(); // will only work inside the IIFE
})(); // will be invoked directly after calling the function due to ()

hello(); // will not work as it is only declared inside the IIFE

(function (name) {
  console.log('Hello ' + name); // will return 'Hello John'
})('John'); // passing an argument to the IIFE

NOT REALLY USED only for recursion
(function hi() {
  console.log('hi');
  hi(); // calls itself recursively which will crash your browser by causing infinite loops
})(); 


Execution Context
// when running any JS a special environment is created to handle transformation & execution of code.
// => the EXECUTION CONTEXT it contains the currently running code and everything that aids it's execution.
// there is also a global execution context as well as a function execution context for every function invoked/called
// MEMORY the variable environment where all variables and functions are stores as key:value pairs in memory
// EXECUTION (CODE) the thread of execution each line of code is executed line by line (JS is single threaded & synchronous)

// Memory creation phase:
// create the global object (browswer: window, node.js: global)
// create the 'this' object and bind it to the globa object
// setup memory heap for storing variables and function references
// store functions and variables in global execution context and set to "undefinded"

// Execution Phase:
// Execute code line by line
// Create a new execution context for each function call

// you can see it if you go in the browser to sources and set a breakpoint for the first constant you declare e.g. const x = 100;
// it will write x: <value unavailable>


Call Stack
// stack of functions to be executed
// manages execution contexts
// Stacks are LIFO (last in first out)
// pushes and pops the functions to the top of the stack


if, else-if & else statements

const hour = 12;

if ( hour < 12 ) {
  console.log('Good Morning');
} else if ( hours < 18 ) {
  console.log('Good Afternoon');
} else {
  console.log('Good Evening');
}


nested if

if ( hour < 12 ) {
  console.log('Good Morning');
  if ( hour === 6 ){
    console.log('Wake Up!');
  }
} else if ( hours < 18 ) {
  console.log('Good Afternoon');
} else {
  console.log('Good Evening');
  if ( hour >= 21 ){
    console.log('ZZZZzzz...');
  }
}

if (hour >= 7 && hour < 16) { // hour is between 7 and 16 (not including 16)
  console.log('Work!')
}

if (hour === 6 || hour === 20) { // hour is either 6 or 20
  console.log('Brush your teeth!');
}


Switches

const month = 1;

switch (month){
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  default:
    console.log('Something else.');
}


switch (true){
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  case hour >= 18:
    console.log('Good Evening');
    break;
  default:
    console.log('Hello');
    break;
}


Truthy & Falsy Values

Falsey values are:
fasle
0
"" or '' (empty string)
null
undefined
NaN (Not a Number)

Truthy values are:
Everything that is not falsey
true
'0' (0 in a string)
' ' (space in a string)
'false' (false in a string)
[] (empty array)
{} (empty object)
function () {} (empty function)


Truthy and falsey caveats

const child = 0;

if (child){ // 0 is falsey
  console.log('You have ${child} children');
} else {
  consol.log('Please enter number of children');
}

if (child !== undefined){ // 0 is truthy
  console.log('You have ${child} children');
} else {
  consol.log('Please enter number of children');
}

if (!isNaN(child)){ // 0 is a number therefore it is truthy (is it not not a number)
  console.log('You have ${child} children');
} else {
  consol.log('Please enter number of children');
}


Checking for empty arrays

const arr = [];

if (arr) { // says that array has elements even tho it is empty
  console.log('Array has elements');
} else {
  console.log('Array is empty');
}

if (arr.length > 0) { // only if arr has at least 1 element
  console.log('Array is not empty)');
} else {
  console.log('Array is empty');
}


Checking for empty objects

const user = {};

if (user) { // says the object exists even tho it is empty
  console.log('User exists');
} else {
  console.log('No User');
}

if (Object.keys(user).length > 0) { // gives us an array of the keys which we can take the length of
  console.log('User exists');
} else {
  console.log('No User');
}


Loose Equality (==) instead of ===

console.log(false == 0); // true 
console.log('' == 0); // true
console.log(null == undefined); // true

console.log(false === 0); // false as it also checkes the type
console.log('' === 0); // false
console.log(null === undefined); // false


Logical Operators

console.log(10 < 20 && 30 > 20 && 40 > 30); // true as long as all 3 conditions are true

console.log(10 < 20 || 30 > 20 || 40 > 30); // true if at least one of the condition is true

&& will return first falsey value or the last value
let a;

a = 10 && 20; // will make a = 20 as all are true
a = 10 && 0 && 20; // will make a = 0 as it's a falsey value
a = '' && 0 && 20; // will make a = '' as it's the first falsey value

const arr = [];

arr.length > 0 && console.log(arr[0]); // will not print anything if the array is empty

|| will return the first truthy value or the last value

let b;

b = 10 || 20; // will make b = 10 as all are true
b = 0 || 20; // will make b = 0 as it's falsey
b = 0 || null || ''; // will make b = '' as all are falsey and it will take the last


?? returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20; // will make c = 10 as it's not null or undefined
c = 0 ?? 20; // will make c = 0 as it's not null or undefined
c = '' ?? 20; // will make c = '' as it's not null or undefined
c = null ?? 20; // will make c = 20 as the left side value is null
c = undefined ?? 20; // will make c = 20 as the left side value is undefined


Logical Assignment

||= assigns the right side value only if the left is a falsey value

let a = false; // a must be falsey for the ||= to work

if (!a) {
  a = 10;
}

a = a || 10; // same as above but shorter syntax

a ||= 10; // same as above but even shorter

console.log(a) // will return 10

&&= assigns the right side value only if the left is a truthy value

let b = 10;

if (b) {
  b = 20;
}

b = b && 20; // same as above but shorter syntax

b &&= 20; // same as above but even shorter

console.log(b) // will return 20


??= assigns the right side value only if the left is null or undefined

let c = null; // will only work if c = null or c = undefined

if (c === null || c === undefined){
  c = 20;
}

c = c && 20; // saem as above but shorter syntax

c &&= 20; // same as above but even shorter

console.log(c) // will return 20


Ternary Operator

const age = 18;

if statement
if (age >= 18){
 console.log("You are an adult");
} else {
  console.log("You are a child");
}

ternary operator
age >= 18 ? console.log("You are an adult") : console.log("You are a child"); // same as above just shorter syntax

assigning a conditional value to a variable
const isAdult = age >= 18 ? true : false; // will assign true or false to the isAdult variable based on the age value
const isAdult2 = age >= 18 ? 'You are an adult' : 'You are a child'; // will assign one of the strings to the isAdult variable based on the age value

multiple statements
const auth = true;
let redirect2;

if (auth){
  alert('Welcome');
  redirect2 = '/dashbord';
} else {
  alert('Access denied');
  redirect2 = '/login';
}

const redirect = auth ? (alert('Welcome'), '/dashboard') : (alert('Access denied'), '/login'); // same as above but shorter syntax

auth ? console.log('Welcome') : null; // will do nothing if auth is false
auth && console.log('Welcome'); // same as above 


For Loops

for (let i = 0; i <= 10; i++){
  if (i === 7){
    console.log('7 is my lucky Number');
  } else {
    console.log('Number ' + i);
  }
}

Nested loops

for (let i = 1; i <= 10; i++){
  console.log('Number ' + i);
  
  for (let j = 1; j <= 5; j++){
    console.log(`$[i] * ${j} = ${i*j}`);
  }
}

Loop through an array
const names = ['Jack', 'Jill', 'Jane'];

for (let i = 0; i < names.length; i++){
  console.log(names[i]);
}


Break & Continue

for (let i = 0; i <= 20; i++){
  if (i === 15){
    console.log('Breaking...');
    break; // breaks out of the loop
  }
  console.log(i);
}

for (let i = 0; i <= 20; i++){
  if (i === 13){
    console.log('Skipping 13...');
    continue; // continues outside of the if statement
  }
  console.log(i);
}


While & Do While Loop

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

loop over arrays

const arr = [1,2,3];

while (i < arr.length){
  console.log(arr[i]);
  i++;
}

nesting while loops

while (i <= 5){
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5){
    console.log(`$[i] * ${j} = ${i*j}`);
    j++;
  }
  i++;
}

do while loops // run at least once

do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);


For of loop

looping through arrays
const items = ['item1', 'item2', 'item3'];

for (let i = 0; i < items.length; i++){
  console.log(items[i]);
}

for (const item of items){ // same as above
  console.log(item);
}

for (let item of items){ // samme as above
  console.log(item);
}


looping through arrays of objects
const users = [{id:1, name:'John'}, {id:2, name:'Jane'}];

for (const user of users){
  console.log(user.name);
}


loop over strings

const str = 'Hello World';

for ( const letter of str){ // same as above
 console.log(letter);
}


loop over maps

const map = new Map();
map.set('a',1);
map.set('b','string');

for (let [key, value] of map){
  console.log(key, value);
}


For in loop // looping through objects

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'purple',
};

for (const key in colorObj){
  consol.log(key); // gives us the key
  consol.log(colorObj[key]); // gives us the value

}

const colorArr = ['blue', 'red', 'purple'];

for (const key in colorArr){
 console.log(key); // gives us the keys which are the indexes of the colorArr
 console.log(colorArr[key]); // gives us the values of the colorArr
}


High order array methods

array.forEach()

const strings = ['one', 'two', 'three'];

// console.log(strings.__proto__);

string.forEach(function (item)){ // loops over the array and applies the function to it
  consol.log(item);
}

strings.forEach((item) => console.log(item)); // does the same thing as above

strings.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr)); // gives us the index, value and the array itself 

function logStr(strings){
  console.log(strings); 
}

strings.forEach(logStr); // passes in every string into the function no need to execute the function with () at the end as the forEach does it

const Objs = [
  { name: 'one', age: 20 },
  { name: 'two', age: 18 },
  { name: 'three', age: 21 },
];

Objs.forEach((item) => console.log(item))); // gives us the whole array with 3 objects
Objs.forEach((item) => console.log(item.name))); // gives us the values of name for each object


array.filter()

const nbrs = [1,2,3,4,5,6,7,8,9];

const evenNbrs = nbrs.filter(function (number){
  return number % 2 === 0;
}); // creates a new array with all the even numbers

const evenNbr = nbrs.filter((number) => number % 2 === 0); // arrow function does the same as above

const evenNbrss = [];
nbrs.forEach((number) => {
  if (number % 2 === 0){
    evenNbrss.push(number);
  }
}); // for each loop does the same as above


array.map()

const nbrs = [1,2,3,4,5,6,7,8,9];

const doubleNbrs = nbrs.map((number) => number * 2); // creates a new array with all the double numbers

const doubleNbrs2 = [];

nbrs.forEach((number) => {
  doubleNbrs2.push(number * 2);
}); // for each loop does the same as above


chain map methods
const sqrtDouble = nbrs
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const sqrtDouble2 = nbrs
  .map(function (number){
    return Math.sqrt(number);
  })
  .map(function(sqrt){
    return sqrt * 2;
  }); // does the same as above


chaining different methods

const evenDouble = nbrs
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
// this filter out all odd numbers and then doubles them


array.reduce()

const sum = nbrs.reduce(function (accumulator, currentValue){
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator and then it counts all the numbers together

const sum2 = nbrs.reduce((acc, cur) => acc + cur, 0); // same as above just shorter


using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of nbrs){
    acc += cur;
  }
  return acc;
}; // same as aboove but with a for loop and can also be done with a forEach loop too


const cart = [
  { id: 1, price: 10 },
  { id: 2, price: 20 },
  { id: 3, price: 30 },
]

// reduce to calculate total amount in the cart

const totalAmount = cart.reduce((acc, cur) => acc + cur.price, 0); // 60


Document Object Model (DOM)
=> is the programming interface for web/HTML elements
=> is a structure that can interact via JS
=> includes tags, attributes, text nodes, etc
=> represented as a tree structure

in the <html> there is <head> and <body>
within <head> there is <title> and <meta>
within <title> there is a 'text node'
within <meta> there is a 'attribute'

within <body> there is a <div> which has a 'attribute'
within <div> there is <h1> which has a 'text node' and 'attribute'
within <div> there is also <p> which has a 'text node'


querrySelector() & querySelectiorAll() // are the 2 functions we will probably need for the rest of the time

parentElement(), nextSibling(), previousSibling(), firstChild(), lastChild() are importatn to remember


Events
are actions or occurances happening in systems you're programming which the systems tells you about so the code can react to them
e.g. click on an element, type into a text field, hover over an element, submit a form, closing a window, dragging an element, resizing an element etc

you can listen on those event actions 

<button onclick="alert('clear')"></button>

<button onclick="onClear()"></button>
function onClear(){ alert('clear') };

But it is not recommended to clutter up your HTML with in-line event listeners
Instead you can use a JS Event Listener which is the second way

const clearBtn = document.querySelector('#clear');

clearBtn.onclick = function () { alert('clear'); };

or the third way which is recommended is to use the "Add Event Listener Method"
clearBtn.addEventListener('click', function() { alert('clear') });
clearBtn.addEventListener('click', () => alert('clear')); // does the same as above just shorter syntax

an alert is a blocking operation wherefore it will first show the alert and then do the rest e.g. show a console log

you can also just put in the function instead but without () otherwise it will directly be executed
clearBtn.addEventListener('click', onClear);

we can and should remove an EventListener if we delete an element 
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

setTimeout(() => clearBtn.click(), 5000); // will automatically call the function after 5 seconds without clicking it in our frontend

 
Mouse Events
const logo = document.querySelector('img');

const onClick() = () => console.log('click');
const onDoubleClick() = () => console.log('double click');
const onRightClick() = () => console.log('right click');
const onMouseDown() = () => console.log('left mouse down and hold');
const onMouseUp() = () => console.log('left mouse up');
const onMouseWheel() = () => console.log('mouse wheel for scrolling');
const onMouseOver() = () => console.log('hover with mouse over something');
const onMouseOut() = () => console.log('hover with mouse out of something');
const onDragStart() = () => console.log('click something to drag it');
const onDrag() = () => console.log('draging something while holding the mouse down');
const onDragEnd() = () => console.log('releasing the mouse after dragging');

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mousup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);


The Event Object

'target' - the element that triggered the event
'currentTarget' - the element on which the event listener is attached to
'type' - the type of the event that was triggered (e.g., 'click', 'wheel')
'timeStamp' - the time at which the event occurred, in milliseconds since January 1, 1970
'clientX' - the x position of the mouse click relative to the window
'clientY' - the y position of the mouse click relative to the window
'offsetX' - the x position of the mouse click relative to the element
'offsetY' - the y position of the mouse click relative to the element
'pageX' - the x position of the mouse click relative to the page
'pageY' - the y position of the mouse click relative to the page
'screenX' - the x position of the mouse click relative to the screen
'screenY' - the y position of the mouse click relative to the screen

const logo = document.querySelector('img');

function onClick(e) {
  console.log(e.target, e.currentTarget, e.timeStamp); // will give back the same in this case
}

function onDrag(e) {
  document.querySelector('h1').textContent = `x: ${e.pageX} - y: ${e.pageY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

document.body.addEventListener('click', function(e){
  console.log(e.target, e.currentTarget); // 'target' is whatever is clicked and 'currentTarget' is put on the body
}

document.querySelector('button').addEventListener('click', function(e){
  e.preventDefault();

  console.log('Do this instead');
});


Keybord Events

const itemInput = document.getElementById('item');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  console.log('keydown');
};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);

// key
console.log(e.key); // logs the exact key pressed

// keyCode
console.log(e.keyCode); // logs the ASCII value of the key pressed, but it's deprecated in modern browsers. Use e.code instead for better cross-browser compatibility.

// code
console.log(e.code); // logs a unique identifier for the key pressed, such as "Enter" or "ArrowLeft"

console.log(e.repeat); // logs true if the key is being held down

console.log(e.shiftKey);
console.log(e.altKey);
console.log(e.ctrlKey);
// should also work with cmd and opt for MAC


Input Events
const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');



function onInput(e) {
  console.log(e.target.value); // gives us everything that is within the input field
}

function onCheck(e) {
  console.log(e.target.checked); // gives us back true or false depending on if it is checked
}

function onFocus() {
  console.log('focused');
  itemInput.style.backgroundColor = 'green';
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth= '1px';
}

function onBlur() {
  console.log('not focused');
  itemInput.style.outlineStyle = 'none';

}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput); // can also be used with 'change' but input is recommended
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);


// Form Submission & FormData Object

const form = document.getElemeById('form');

function onSubmit(e){
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please enter all fields');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(e){
  e.preventDefault();

  const formData = new FormData(form);

  const item = formData.get('item');
  const priority = formData.get('priority');
  
  console.log(item, priority);

  const entries = formData.entries();
  for (let entry of entries) {
    console.log(entry);
    console.log(entry[0]);
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit);


Event Bubbling
means that when you have a button inside a div inside a form than it will bubble up from the button clicked to div and then form this can be stopped with
e.stopPropagation()


Event Delegation & Multiple Elements

const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});

const list = document.querySelector('ul');

// this is mainly used for single events
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});


Page Loading & Window Events

window.onload = () => { document.querySelector('h1').textContent = 'Hello World!' };

window.addEventListen('load', () => (document.querySelector('h1').textContent = 'Hello World!')); // 'load' waits for the entire page and until all the contents are loaded

window.addEventListen('DOMContentLoaded', () => (document.querySelector('h1').textContent = 'Hello World!')); // 'DOMContentLoad' runs as soon as the DOM is parsed

console.log('Hello world'); // will get run before the DOM content is loaded which might cause errors if they try to access elements on the DOM

<script src="./script.js" defer></script> // defer will make stop the JS code from running until DOM is fully loaded so errors won't be caused by accessing DOM elements
// in case you want to have your script in the head tag instead of having them above the ending body tag

window.addEventListener('resize', () => {
  console.log(`Resized to ${window.innerWidth} x ${window.innerHeight}`);
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrolledX} x ${window.scrolledY}`);
});


Local Storage / Session Storage
-> Property on the Window interface that allows us to access aa storage object
-> Data stored in the browser as key/value pairs -> values are strings (cannnot store objects)
localStorage & sessionStorage have the same API -> the difference is that localStorage does not expire, while sessionStorage only lasts until the page is closed

local Storage Methods

localStorage.setItem('name', 'John');   // set a value with a key
localStorage.getItem('name');   // get a value using the key
localStorage.removeItem('name');   // remove item using the key
localStorage.clear();   // clear all items in local storage

!!! NEVER STORE SENSITIVE DATA IN LOCAL STORAGE SUCH AS PASSWORDS, CREDIT CARD INFORMATION, 3rd PARTY AUTHENTICATION TOKENS etc !!!!

You can simply upload your javascript sites to netlify.com


Asynchronous JS
-> JS is a single threaded language
-> Single sequential flow of control
-> JS is a syncronous language with asynchronous capabilities
-> a thread has a call stack & memory heap
-> Events are asynchronous 

blocking code

const fs = require('fs');
const filepath = 'text.txt';
const data = fs.readFileSync(filepath, {encoding: 'utf-8'});    // readFileSync is Syncronous and therefore blocking
console.log(data);

let sum = 5+10;
console.log('Sum ', sum);
// console will log data first and then sum


non blocking code

const fs = require('fs');
const filepath = 'text.txt';
fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {console.log(data); });   // readFile is Asyncronous and therefore non blocking

let sum = 5+10;
console.log('Sum ', sum);
// console will log sum first and then data


promise 
is an object that represents the eventual completion or failure of an asynchronous operation or task
which makes it non blocking and synchronous 
-> gets into the PromiseJobs MICROTASK QUEUE which gives them a high priority

Others will get to the normal TASK QUEUE which get executed one by one after another

// Create a promise
const promise = new Promise((resolve, reject) => {
  // do some asynch task
  setTimeout(() => {
    consol.log('Asynch task complete');
    resolve();
  }, 1000);
});

promise.then(() => { console.log('Promise resolved'); });

console.log('Hello from global scope');

// alternatively .then can be used directly on the new Promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    consol.log('Asynch task 2 complete');
    resolve();
  }, 1000);
}).then(() => console.log('Promise 2 resolved'));

// pass data with the promise e.g. a user
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: John, age: 30 });
  }, 1000);
}).then((user) => console.log(user));

// error handling with the promise
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = fasle;

    if (!error) {
      resolve({ name: John, age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((err) => console.log(err)) // e.g. 'Error: Something went wrong'
  .finally(() => console.log('The promise has been resolved or rejected')); // always executed; 


setTimeout() & clearTimeout()

setTImeout(function () {
  console.log('I'm printing second');
}, 0);
console.log("I'm printing first");

clearTimeout()    // cancels setTimeout()


setInterval & clearInterval

const intervalID = setInterval(myCallback, 1000, 'Text');  // will run this every second unless it is stopped

function myCallback(a){
  console.log(a, Date.now()); // shows the Text and timespamp 
}

function stopChange(){
  clearInterval(intervalID);
}

document.getElementById('stop').addEventListener('click', stopChange); 


Callbacks
-> Are not always asynchroneus

const tasks = [
  { title: 'Task 1', body: 'Do something'};
  { title: 'Task 2', body: 'Do something else'};
];

function createTask(task, cb) {
  setTimeout(() => {
    tasks.push(task);
    cb();
  }, 2000);
}

function getTasks() {
  setTimeout(() => {
    tasks.forEach(function (task){
      const dic = document.createElement('div');
      div.innerHTML = `<strong${task.title}</strong> - ${task.body}`;
      document.querySelector('#tasks').appendChild(div);
    });
  }, 1000);
}

createTask({title: 'Task 3', body: 'Do something again'}, getTasks);


Callback to Promise Refactoring

const tasks = [
  { title: 'Task 1', body: 'Do something'};
  { title: 'Task 2', body: 'Do something else'};
];

function createTask(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        tasks.push(task);
        resolve();
      } else {
        reject('Something went wrong');
      }
    
    }, 2000);
  });
}

function getTasks() {
  setTimeout(() => {
    tasks.forEach(function (task){
      const dic = document.createElement('div');
      div.innerHTML = `<strong${task.title}</strong> - ${task.body}`;
      document.querySelector('#tasks').appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  alert(`${error} occured`)
}

createTask({title: 'Task 3', body: 'Do something again'})
  .then(getTasks)
  .catch(showError);


Promise Chaining

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = fasle;

    if (!error) {
      resolve({ name: John, age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
.then((user) => { 
  console.log(user); 
  return user.name;
})
.then((name) => {
  console.log(name); 
  return name.length;
})
.then((nameLength) => {
  console.log(nameLength);
})
.catch((error) => {
  console.log(error);
  return 123;
})
.then((x) => console.log('This will run no matter what', x)); // when there was an error it will return 'Error: Something went wrong' and in a new line 'This will run no matter what 123' 


Promise.all()

Promise.all([promise, promise2])
  .then((data) => {
    console.log(data);  // gives out an array of the data types of promise & promise2
  })
  .catch((error) => console.log(error));


HTTP Requests
-> Hyper Text Tranfer Protocol for sending & receiving data on the web 
HTTP is a client/server protocol -> requests are initiated by the client (you) and the server will respond with a 'response'
the response could be HTML, CSS, JS files, images or other sources as well as data formatted as JSON or XML

Making requests from JS
If you want to fetch some data and update a specific part of the DOM/webpage you can do this using JS
AJAX / XMLHttpRequest object was the original way of doing this however these days we mostly use the fetch API that is available to us in the browser

HTTP Methods:
GET request -> fetch/retrieve data from server
POST request -> send data to server
PUT & PATCH request -> update data on server
DELET request -> delete data from server

HTTP Status Codes:
100 Range Continue
200 Range Success (200 - Success | 201 - Created | 204 - No Content) 
300 Range Redirects (301 - Resource Moved)
400 Range Client Error (400 - Bad Request | 401 - Unauthorized | 403 - Forbidden | 404 - Not Found | 409 - Conflict)
500 Range Server Error (500 - Error on server)


Fetch API & Async / Await
by default if not otherwise specified it is a get request 
window.fetch()

fetch() // same as above

Fetching a JSON file
// fetches a file from the server and returns a promise therefore we need to use then() and it gets a response back
fetch('./filepath.json') 
  .then((response) => {
    return response.json();
  })
  then((data) => {
    console.log(data);
  }); 

// does the same as above
fetch('./filepath.json') 
  .then((response) => response.json())
  then((data) => console.log(data)); 

axios.get().then(data) // axios is a library that helps you get the data with the first then() instead of like above

Fetching a Text File
fetch('./filepath.txt') 
  .then((response) => response.text())
  then((data) => console.log(data)); 

Fetching from an API
// does the same as above
fetch('./api.github.com/users') 
  .then((response) => response.json())
  then((data) => console.log(data)); 


Fetch Options - Method, Body, Headers

function createPost(post){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    <!-- body: JSON.stringify(post), // could be done like this but it's better to specify the obejcts that we want -->
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    })
  });
}

// same as above just destructed
function createPost({title, body}){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    <!-- body: JSON.stringify(post), // could be done like this but it's better to specify the obejcts that we want -->
    body: JSON.stringify({
      title: title,
      body: body,
    })
  });
}

// same as above just more convenient
function createPost({title, body}){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    <!-- body: JSON.stringify(post), // could be done like this but it's better to specify the obejcts that we want -->
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123'   // often used for authentication
    },
  }).then(res => res.json())  // as we get back a promise we can use .then()
    .then(data => console.log('Post created:', data));
}

createPost({title: 'My Post', body: 'Hello World!'});


Async & Await

// old way of doing it
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: 'John', age: 20});
  }, 1000);
});

<!-- promise.then((data) => console.log(data)); -->

// new way of doing it
async function getPromise() {
  const response = await promise;
  console.log(response);
}   

getPromise(); // does the same as above but uses async & await

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // no .then is needed here as we are awaiting the request
  const data = await res.json();

  console.log(data);
}

getUsers();

<!-- // same as above just with .then
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data));
} -->

// arrow function 
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // no .then is needed here as we are awaiting the request
  const data = await res.json();

  console.log(data);
}

getPosts();


Try... Catch

try {
  console.log(x);
} catch (error) {
  console.log('Error: ' + error);
}

function double(nbr) {
  if(isNaN(nbr)) {
    throw new Error(nbr + ' is not a number');
  }
  return nbr * 2;
}

try {
  const y = double('hello');
  console.log(y);
} catch (error){
  console.log(error);
}


Async & Await Error Handling

const getUsers = async () => {
  try {
    const response = await fetch('https://httpstat.us/404');

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

// this is not recommended but works
const getPosts = async () => {
  try {
    <!-- const response = await fetch('https://jsonplaceholder.typicode.com/posts'); -->
    const response = await fetch('https://httpstat.us/404');

    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.text();
    console.log(data);
};

getPosts().catch((error) => {console.log(error)});


Async / Await Multiple Promises
// several ways of doing the same thing

async function getAllDataWithFetch() {
  const dataRes = await fetch('./data.json');
  const data = await dataRes.json();

  console.log(data);
}

getAllDataWithFetch();

async function getAllDataPromiseAll() {
  const [dataRes] = await Promise.all([
    fetch('./data.json'),
  ]);

  const data = await dataRes.json();
  console.log(data);
}

getAllDataPromiseAll();

async function getAllDataPromiseAll2() {
  const [data] = await Promise.all([
    fetch('./data.json').then(res => res.json())
  ]);

  console.log(data);
}

getAllDataPromiseAll2();


Page Router & Active Link

const global = {
  currentPage: window.location.pathname,
};

async function displayData() {
  const { results } = await fetchAPIData('data/something');

  results.forEach(smth => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href="index.html?id=${smth.id}">
      ${
        smth.img_path
        ? `<img 
            src="https://images/w500${smth.img_path}" />
          `
      }
        <img src="../images/img.jpg" />
      </a>
      <div class="card-body">
        <h1>${smth.title}</h1>
        <p class="card-text">
          ${smth.text}
        </p>
      </div>
    `;

  document.querySelector('#data-smth').
  appendChild(div);
  });
}

// never put your API_KEY in production projects like this
// you would have your own backend server that you make a request to and thats where you would store this key so that others cannot get it
// then you make your request to the database from your own server
// normally you would have your API key in a .env file on your server and you would not put that into your repository
async function fetchAPIData(endpoint) {
  const API_KEY = 'your_api_key';
  const API_URL = 'https://api_url.com/versionNbr/';

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

  const data = await response.json();
  return data;
}

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      links.classList.add('active');
    }
  });
}

function init(){
  switch (global.currentPage) {
    case '/':
    case '/index.html':         // adding another case will make both do the same
      console.log('Home Page');
      break;
    case '/about.html':
      console.log('About Page');
      break;
    case '/contact.html':
      console.log('Contact Page');
      break;
    case '/imprint.html':
      console.log('Imprint Page');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);


Swiperjs API
// for making a swiper to the left and right
https://swiperjs.com/


WEB APIs

Geolocation API -> gives us the location of the user
leaflet -> to plot the geolocation on a map
canvas API -> lets us draw on the browser
requestAnimationFrame() -> lets us animate things on the window object to create an animated ticking clock on a canvas
Web Audio API -> create a custom music player
Web Video API -> create a custom video player
Web Animations API -> create animations in pure Javascript
Web Speech API -> speech recognition & speech synthesis


OOP / Object Oriented Programming

Object literals
Constructor functions
Prototypes
Prototyp chain & inheritance
Object.create()
call() method
Classes
Inheritance / sub-classes
Static Methods
Getters & setters
Private properties
Flags & descriptors
Sealing & freezing


What is OOP?
its a programming paradigm or way of thinking about structuring code. simply a specific style to implement certain principles
paradigms such as procedural, functional and logic exist. It is common in different languages.

What is an OBject?
self-contained piece of code that is a collection of methods and properties. 
Used as building blocks and can interact with one another.
Many ways to create them -> object literals, constructor functions, classes, factories and more

examples:
User | Post | Comment | UI Component | Product | Order | Cart | Customer | Employee | Message | Book | Item
basically any entity

Why use OOP?
can make code easier to read and understand
prevents spaghetti code
flexible and allows you to build complex applications
easy to reuse parts of it
NOT always needed. OOP can be overkill for smaller projects. It's great for more complex projects, especially if working on a team

Components
Constructor Functions (JS) -> creates a blueprint for an object
Prototypes (JS) -> A way for objects to inherit properties and methods from another
Classes -> Another way to create a blueprint "Syntactic Sugar" in JS but part of many other languages too
Instances -> Objects are "instantiated" using the blueprint (Constructor or Class

4 Basic Principles
#1 Abstraction -> Hiding everything instead of the releveant parts of an object in order to reduce complexity and increase efficency
e.g. fetch() and addEventListener() we don't know how they work we only know about the methods and parts that are relevant to what we want to do. Similarly the user doesn't need to know everything that's inside the object they simply need to know what they use.
#2 Encapsulation -> wrapping up data and methods into a unit such as a class or a function. It usually includes some kind of "data hiding" or "information hiding"
#3 Inheritance -> getting access to properties and methods from a parent class or constructor
#4 Polymorphism -> getting access to properties and methods from a parent class or constructor where they can be use in several different ways and forms

Constructor Functions
// 1. A new empty object is created
// 2. The constructor functio is called with the arguments that we passed in if there are any
// 3. The this keyword is set to the new empty onject.
// 4. The new object is returned from the constructor function

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.heigth = height;
  this.area = function () {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle('Rect 1', 10, 10)
const rect2 = new Rectangle('Rect 2', 20, 20)
const rect3 = new Rectangle('Rect 3', 30, 30)
console.log(rect1.name, rect2.name, rect3.name);
console.log(rect1.area(), rect2.area(), rect3.area());

console.log(rect1.constructor); // will log the whole Rectangle function with everything it has inside
console.log(rect2 instanceof Rectangle); // will log true


Object Properties

// add a property
rect1.color = 'red';
rect2.perimeter = () => 2 * (rect.width + rect2.height)

// delete a property
delete rect2.perimeter;

// check for property
console.log(rect1.hasOwnProperty('color')); // true
console.log(rect2.hasOwnProperty('color')); // false

// get keys
console.log(Object.keys(rect1));

// get values
console.log(Object.values(rect1));

// get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}

Prototypes & Prototype Chain
console.log(rect1.tostring()) // has in [[Prototype]] another [[Prototype]] where it is inside 
console.log(Object.getPrototypeOf(rect1)); // gives us just the prototype with the constructor


Adding Methods to the Prototype Chain

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
}

console.log(rect1.isSquare()); 


Object.create as an alternative way to create new Objects

const rectanglePrototypes = {
  area: function () {
    return this.width * this.height
  },
  perimeter: function () {
    return 2 * (this.width + this.height)
  }
}

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
        value: width,
    },
  });
}

const recy = createRectangle(10, 20);
console.log(rect.area());


Prototypical Inheritance & call()

function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rect(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}

// Inherits shape prototype
Rect.prototype = Object.create(Shape.prototype);

// Example of polymorphisms as the logName method does 2 different things 
Rect.prototype.logName = function () {
  console.log(`Rect Name: ${this.name}`);
};

// Set prototype constructors
Rect.prototype.constructor = Rect;



const rect = new Rect('rectangle 1', 10, 20);

rect.logName(); // will log "Shape Name: rectangle 1"

Literasls VS Constructors

const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf()); // can access the [[Prototype]] functions

console.log(strLit.constructor); // logs f String() { [native code] }
console.log(strObj.constructor); // logs f String() { [native code] }

console.log(strLit instanceof String); // logs false as it is not a instance of new String
console.log(strObj instanceof String); // logs true as it is a instance of new String

// Other Types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit); // logs 20 'number'
console.log(numObj, typeof numObj); // logs Number {20} 'object'

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); // logs true 'boolean'
console.log(boolObj, typeof boolObj); // logs Boolean {true} 'object'

const arrLit = [1, 2, 3];
const arrObj = new Array(1, 2, 3);

console.log(arrLit, typeof arrLit); // logs [1, 2, 3] 'object'
console.log(arrObj, typeof arrObj); // logs [1, 2, 3] 'object'

const funcLit = function (x) { return x * x; }; // this is the same as this "const funcObj = new Function('x', 'return x * x');"

console.log(funcLit, typeof funcLit); // logs the function and everything inside of it and 'function'

console.log(funLit(5)); 

const funcObj = new Function('x', 'return x * x');

console.log(funcObj(3)); 

const objLit = {};
const objObj = new Object();

console.log(objLit, typeof objLit); // logs {} 'object'
console.log(objObj, typeof objObj); // logs {} 'object'


Classes

class Ractangle2 {
  constructor(name, width, height) { // runs every time the class is instantiated
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() { // in classes the function area() is used without function
    return this.width * this.height; 
  }

  logArea() {
    conso.log('Rectangle Area: ' + this.area()); 
  }
}

const square = new Rectangle2('Square', 5, 5);

square.logArea(); // logs "Rectangle Area: 25"
console.log(square.area()); // logs 25
console.log(square); // shows us that area is part of the prototype
console.log(Object.getPrototypeOf(square)); // the constructor prototype and the methods/functions it has


Class Inheritance

// Parent Class
class Shape {
  constructor(name){
    this.name = name;
  }
  logName(){
    consol.log('Shape Name: ' + this.name); 
  }
}

// Sub class
class Ractangle3 extends Shape {
  constructor(name, width, height) {
    super(name); // when extending a class use super()
    this.width = width;
    this.height = height;
  }

  logName() {
    console.log('Rectangle Name: ' + this.name); // would overwrite the parent's logName method
  }
}

const rect = new Rectangle3('Rect 1', 5, 5);
rect.logName(); // Output: 'Shape Name: Rect 1'

console.log(rect instanceof Ractangle3); // true
console.log(rect instanceof Shape); // true as Rectangle3 extends Shape class


Static Methods

class Ractangle4 extends Shape {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  // static method
  static getClass() { 
    return 'Rectangle4'
  }
}

const rect = new Rectangle4('Rect 1', 5, 5);

console.log(rect.getClass()); // will say that getClass is not a function
console.log(Rectangle4.getClass()); // will output "Rectangle4"


bind() & this

class App {
  constructor() {
    this.serverName = 'localhost';

    document.querySelector('button').addEventListener('click', this.getServerName.bind(this)) // needs bind(this) to access the property in the class
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();


Getters & Setters with Classes

class Person {
  constructor(firstName) {
    this._firstName = firstName;
  }

  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1); // first character to uppercase
  }

  set firstName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('jane');
console.log(person1.firstName); // Jane
person1.firstName = 'joe';
console.log(person1.); // will have Joe insstead of Jane


Getters & Setters with defineProperty() Method

// Constructor Function
function Person(firstName) {
  this._firstName = firstName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    }
  });
}

Person.prototype.capitalizeFirst = function(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Object Literal
const PersonObj = {
  _firstName: 'john',

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  }
}

const person1 = new Person('jane'); // is the same as the one below just a different way

const person2 = Object.create(PersonObj);


Private Properties Convention (Encapsulation / Hiding Data)

class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`)

    this._tramsactions.push({
      type: 'deposit',
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`)

    this._tramsactions.push({
      type: 'withdraw',
      amount,
    });
  }


  <!-- getBalance() {
    return this._balance;
  } -->
  // having a getter instead of a function
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);


ES2022 Class Fields for Private Properties

class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`)

    this.#tramsactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`)

    this.#tramsactions.push({
      type: 'withdraw',
      amount,
    });
  }


  <!-- getBalance() {
    return this._balance;
  } -->
  // having a getter instead of a function
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);


Flags & Descriptors

// [[Configurable]] - if true, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if true, the property will be returned in a for...in loop, otherwise not
// [[Writeable]] - if true, the property value can be changed, otherwise not
// [[Value]] - the actual value of the property

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object defineProperty(rectObj, 'name', {
  writable: false;
  configurable: false; 
  enumerable: false; // lets the name not show in loops
});

let descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor); 

rectObj.name = 'New Name'; // will not work
delete rectObj.name; // will not work
delete rectObj.width; // will work

for (let [key, value] of Object.entries(rectObj)) {
   console.log(`${key}: ${value}`); // will only show width and height but not the name
}

console.log(Object.getOwnPropertyDescriptors(rectObj)); // shows all properties including non-enumerable ones


Freezing & Sealing Properties

// Sealing prevents properties from being added or removed -> Can still be changed

// Freezing preves properties from being added, removed, changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptor = Object.getOwnPropertyDescriptor(rectObj;

rectObj.color = 'red'; // will not work
delete rectObj.name; // will not work
rectObj.width = 20; // will work

const circleObj = {
  name: 'Circle 1',
  radius: 5,
};

Object.freeze(circleObj);

circleObj.color = 'red'; // will not work
delete circleObj.name; // will not work
circleObj.radius = 20; // will not work

console.log('Object is sealed?', Object.isSealed(rectObj)); // will return true
console.log('Object is sealed?', Object.isFrozen(rectObj)); // will return false
console.log('Object is sealed?', Object.isSealed(circleObj)); // will return true
console.log('Object is sealed?', Object.isFrozen(circleObj)); // will return true


Storing Locally & Clearing it

class Do {
  constructor() {
    this._val = Storage.getlocallyStored();
  }
}

class Storage {
  
  static getlocallyStored(default = 1111){
    let localStored;
    if (localStorage.getItem('localStored') === null) {
      localStored = default;
    } else {
      localStored = +localStorage.getItem('localStored');
    }
    return localStored;
  }

  static setlocallyStored(val) {
    localStorage.setItem('localStored', val);
  }

  // clear everything
  static clearAll() {
    localStorage.clear();
  }

}


Modules & Tooling

What are modules?
JS files that can be imported to other JS files
Variables, functions and classes can be imported
As well as 3rd-party packages from NPM (Node Package Manager)

Why use models & tooling?
Makes code much more organized and easier to read/write by seperating it into different files
Reusability, Optimization and Customized environments

Types of Modules
Common JS Modules - Commonly used by Node.js
ES Modules (ESM, ES6 Modules) - Commonly used in front-end

How to use them properly
Create a individual file for each class and only import them where they are needed
Also have a utils and config file as well as a node_modules for npm packages

NodeJS

What is Node.js?
JS runntime environment that allows JS to run on the server
Node uses V9 JS engine the same that Chrome uses
Inner workings are similat to the browser, since it uses the v8 engine but it has no 'Window' or 'Document'

How to use it?
Download Node.js from the official website & install it
Create a new file and execute the file from the terminal

asynch function getUser(){
  const response = await fetch('https://api.github.com/users');
  const data = awai response.json();
  console.log(data);
}

getUser();


Exporting a module to other files

// Version 1
const msg = {
  id: 1;
  text: 'Hello World',
};

module.exports = message;

// Version 2
module.exports = {
  id: 1;
  text: 'Hello World',
};

Exporting several functions to other files

function one(str){
  return str.toUpperCase();
};

function two(str){
  return str.toLowerCase();
};

module.exports = {
  one,
  two,
};


Importing a Module in a different file

const msg = require('./nameOfFile');

console.log(msg)

// Importing several modules from another file
const { one, two } = require('./nameOfFile');

// importing a class module from another file
const Person = require('./nameOfFile');

const person1 = new Person('Name');
person1.greet();

// import a npm package (axios needs to be installed first)

const axios = require('axios');

asynch function getPost(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(res.data);
}

getPost();


Scripts 

in the package.json file
{
  "scripts": {
    "start": "node app.js", // can be run by the command 'npm start'
    "dev": "nodemon app.js" // can be run by the command 'npm run dev'
  },
}


to install npm packages just for development use the -D flag
e.g. npm i -D nodemon


Add a .gitignore file and everything inside it will not get pushed to github
e.g. folder names


ES/ES6 Modules

// Exporting one function for ES Modules
function one(str){
  return str.toUpperCase();
};

export default one;

// Exporting two function for ES Modules
function one(str){
  return str.toUpperCase();
};

function two(str){
  return str.toLowerCase();
};

export {one, two};


// Importing one function to another JS file
import one from "./pathToFile.js";

// Importing two function to another JS file
import {one, two} from "./pathToFile.js";


Module Bundler

Is a tool that takes all the source code (which are normally multiple files) and bundles them together (often times) into a single build file

e.g. Webpack, Snowpack, Parcel, Vite etc


'npm run dev' builds a different site than 'npm run build'


Deplying to the APP / Website

When deploying to a host simply upload your files and whatever is in the dist folder and run 'npm run build' 

When deploying to Netlify or Vercel they take your code from github so you need to specify a build command and build directory
1. create new repository on github
2. run in the terminal 
2.1 git init
2.2 git add .
2.3 git commit -m ''
2.4 copy from git repository
git remote add origin https://github.com/NL27/TrackCalories-Webpack.git
git branch -M main
git push -u origin main
3. go to netlify.com login and click on a dd a new site
3.1 import an existing project from github
3.2 search for the repository
3.3 check the basic build settings (build command and publish directory) and deploy
3.4 it will deploy the app and automatically run npm build on the server


Iterators, Generators & Data Structures

Symbols

const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2); // Symbol() Symbol(foo) Symbol(bar)
console.log(typeof sym); // symbol
console.log(sym1.description); // foo
console.log(sym.description); // undefinded

console.log(Symbol('sym') === Symbol('sym')); // false (as Symbols are always unique)

const user = {
  [Symbol('id')]: 1
};

console.log(user); // Symbol(id): 1

// Symbols are NOT enumerable
console.log(Object.keys(user)) // won't show id
console.log(Object.values(user)) // won't show id either

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)) // only this will show us the [Symbol(id)]

// Symbol.for()
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // will return true as the .for() makes them the same

console.log(Symbol.keyFor(sym3)); // will return the key 'foo' 
console.log(Symbol.keyFor(sym1)); // will return undefinded as nothing was used to define it with .for()

console.log(sym1.toString()); // returns the string Symbol(foo)
console.log(sym3.toString()); // returns the string Symbol(foo)

console.log(sym1.valueOf()); // returns the actual value Symbol(foo)
console.log(sym3.valueOF()); // returns the actual value Symbol(foo)

console.log(Object.getOwnPropertyNames(Symbol)); // gives you a list of all the different options


Iterators

const app = {
  nextIndex: 0,
  teams: ['Red Sox'],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true }
    }

    const returnValue = { value: this.teams[this.nextIndex], done:
    false };
    this.nextIndex++;
    return returnValue;
  },
};

console.log(app.next()) // {value: 'Red Sox', done: false}
console.log(app.next()) // {done: true}

const app = {
  nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function() {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? {value: this.teams[nextIndex++], done: false}
          : {done: true};
      },
    };
  },
};

const iterator = app[Symbol.iterator]();

for (const team of app){
  console.log(team);  // will log all the team names underneath each other
}


Generators

function* createTeamIterator(teams) {
  for (let i = 0; i < < teams.lengt; i++) {
    yield teams[i]
  }
}

const teams = ['Red Sox'];

const iterator = createTeamIterator(teams);

console.log(iterator.next()); // Object done: false value: "Red Sox"
console.log(iterator.next()); // Object done: true value: undefined

for (const team of createTeamIterator(teams)) {
  console.log(team); // outputs all the names of the Teams array
}

console.log([...createTeamIterator(teams)]); // returns an array with all the team names inside

const [first] = createTeamIterator(teams);
console.log(first); // returns the first team as a string


Sets

const set = new Set([1, 2, 2, 3, 4, 4]); // every number needs to be unique to be displayed

console.log(set) // Set(4) {1, 2, 3, 4}

set.add(5); // adds the number 5

console.log(set.has(3)); // returns true
console.log(set.has(6)); // returns false

set.delete(5); // deletes 5

const setArray = Array.from(set);
console.log(setArray); // will return (4) [1, 2, 3, 4] as set only takes unique numbers

for (let item of set) {
  console.log(item); // returns for each item the value in a new line (1, 2, 3, 4)
}

const iterator = set.values();

consolde.log(iterator.next()); // {value: 1, done: false} 

set.clear(); // clears the whole set so it is empty


Maps

const myMap = new Map();

myMap.set('name', 'john');
myMap.set(1, 'blue');

console.log(myMap.get('name')); // john
console.log(myMap.get(1)); // blue
console.log(myMap.size); // 2
console.log(myMap.has(1)); // true
console.log(myMap.has(2)); // false
myMap.delete(1); 

const peopleMap = new Map();
peopleMap.set('jack', {phone: 123, age: 23});
peopleMap.set('joe', {phone: 456, age: 27});

peopleMap.forEach((person) => console.log(person.phone)); // outputs the phone numbers

console.log(peopleMap.keys()); // outputs the MapIterator along with the names {'jack', 'joe'}
console.log(peopleMap.values()); // outputs the MapIterator along with the values {{...}, {...}}
console.log(peopleMap.entries()); // outputs the MapIterator along with the key and an object {'jack' => {...}, 'joe' => {...}}

const iterator = peopleMap.value();

console.log(iterator.next()); 

const peopleArray = Array.from(peopleMap);
console.log(peopleArray); // outputs an array of arrays


Stack (Last In - First Out)

Methods:
push()
pop()
peek()
length()
isEmpty()
clear()

class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    <!-- this._items.pop() // the easy way -->
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this._item[this._count - 1];
    this._count--;

    for (let i = this._count; i > this._items.length; i++) {
      this._items[i] = this._items[i+1];
    }

    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }

}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');


Queues (First In - First Out)

Methods:
enqueue()
dequeue()
peek()
length()
isEmpthy()

class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i+1];
    }

    this._count--;
    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()){
      return 'No items in que';
    }

    return this._items[this._front];
  }

  length() {
    this._count - this._front;
  }

  isEmpty() {
    return this._count === 0;
  }
}

const q = new Queue();

q.enqueue('Item 1');
q.enqueue('Item 2');

q.dequeue();


Linked List

Methods:
insertFirst()
insertLast()
insertAt()
getAt()
removeAt()
printListData()
clearList()

const node1 = {
  value: 111;
};

const node2 = {
  value: 222;
};

const node3 = {
  value: 333;
};

node1.next = node2;
node2.next = node3;
node3.next = null;

class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  // Insert first node (Head)
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert last node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this._length++;
  }

  // Insert at index
  insertAt(value, index) {
    if (index > this._length){
      return;
    }

    if (index === 0){
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;  
    current = this._head;
    let count = 0;

    while (count < index){
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }

  // Get an index
  getAt(index){
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index){
        console.log(current._value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index){
    if (index > this._length) {
      return;
    }

    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index){
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length--;
  }

  // Print list data
  printListData() {
    let current = this._head;
    let list = '';

    while (current) {
      list += current._value + ' ';
      current = current.next;
    }
    console.log(list)
  }

  // Clear list
  clearListData(){
    this._head = null;
    this._length = 0;
  }

}

const list = new LinkedList();

list.insertFirst(111);
list.insertFirst(222);
list.insertLast(333);


Algorithms & Unit Testing

An Algorithm is a set of rules to get an expected output from an input(s)

Unit testing is a way of testing individual parts of the code (acceptance-, system-, integration-, unit- testing)

Jest is a common tool used for unit testing


Node.js

Modules:
fs - work with the file system to manage files and folders
path - Helpers for working with file paths 
os - Operating system information
url - Parse and format URLs
querystring - helper for working with query strings from URLs
http - Create server and listen for HTTPs requests

Postman
Used for doing API requests

Nodemon
Used for live updating the server

Database
Is a organized collectio of data
Database Manaagement Systems (DBMS) is the computerized system that manages your databases
Database systems can run on a file system or across multiple nodes or clusters
There are different types of databases (Relational, NoSQL, etc)

MongoDB
a NoSQL/Document Database -> Data is stored in Documents 
Typically faster and more scalable than traditional databases
Very popular in the JS world (MERN, MEAN, MEVN)
MongoDB Atlas -> Cloud Implementation of MongoDB
MongoDB Compass -> Desktop tool to manage your databases
Mongoose -> Node.js package for working with MongoDB





































































































































gib den jugendlichen zeit sich zu entdecken

erfolg und niederlage erleben

Bei gemeinsamen sachen sich selbst vergessen -> selbsthingabe

raum für stille, reflektion & einsicht schaffen

vorrausschauend und kreativ sein

spiel & sport ernst nehmen aber nicht den Spaß an der Sache verlieren

befreit reiche von Ihren privilegien