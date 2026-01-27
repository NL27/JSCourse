// Capitalize the first letter of the string 'developer'
// const str = 'developer';

// charAt();
// string[];
// .toUpperCase();
// substring()
// slice()

// console.log(myStr);

// Solution:
/* let myStr = str[0].toUpperCase() + str.slice(1, 9); */


// Create calculations with random numbers for x & y to get the sum, difference, product, quotient and rmndr.
// let x, y;

// x = Math.ceil(Math.random() * 100);
// y = Math.ceil(Math.random() * 50);

// sum = x + y;
// diff = x - y;
// prod = x * y;
// quot = x / y;
// rm = x % y;

// console.log(`Sum: ${x} + ${y} = ${sum} \nDifference: ${x} - ${y} =  ${diff} \nProduct: ${x} * ${y} = ${prod} \nQuotient: ${x} / ${y} =  ${quot} \nRemainder: ${x} % ${y} = ${rm}`);


// Create from the below array the output [6, 5, 4, 3, 2, 1, 0]
// const arr = [1,2,3,4,5];

// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// console.log(arr);


// Get an array with the output of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] from arr1 & arr2
// const arr1 = [1,2,3,4,5];
// const arr2 = [5,6,7,8,9,10];

// const arr = arr1.concat(arr2.splice(1));

// console.log(arr);


// // Create a library with 3 objects each containing title, author and status. Status is another object that has the properties own, reading and read which are all boolean values. Set own to true and reading and read to false.

// const library = [
//   {
//     title: "1",
//     author: "A",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     }
//   },
//   {
//     title: "2",
//     author: "B",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     }
//   },
//   {
//     title: "3",
//     author: "C",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     }
//   },
// ]

// // set all the read values to true without editing the initial object. Set the values using dot notation

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// // destruct the title from the first book and rename the variable to firstBook

// const { title: firstBook } = library[0];

// // Turn the library object into a JSON string

// const str = JSON.stringify(library);

// // create a function that takes an array of numbers as an argument and returns a random number from the array
// function rand(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
// }

// console.log(rand([1, 2, 3])); 


// // create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature converted to Celsius
// // for bonus point write it in a 1 line arrow function

// const temp = f => ((f - 32) * 5) / 9;

// function getCelsius(f){
//   return ((f - 32) * 5) / 9;
// };


// create an arrow function called minMax() that takes an array of numbers as an argument and returns an object with two properties: min (smallest number in the array) and max (largest number in the array)
// hint: use Math.min() and Math.max() to get the miin and max and use the Spread ... operater to spread values of an array into seperate arguments

// const minMax = (arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return {min, max};
// };

// console.log(minMax([1,2,3,4])); // {min: 1, max: 4}


// // Create an IIFE that takes in the length and width of a rectangle and outputs it to the console in a message as soon as the page loads
// // hint: the area of a rectangle is length * width and no need to return anything just log the console

// (function(length, width) {
//   console.log('length ' + length + ' and width ' + width + ' The area is ' + length * width);
// })(2, 2);

// ((length, width) => {
//   console.log('length ' + length + ' and width ' + width + ' The area is ' + length * width);
// })(2, 2);


// // create a function called calculator() that takes in three arguments: a number, an operator (either +, -, *, /), and another number
// // the function should return the result of the operation on the two numbers if anything else than the four operators is passed it should return 'Invalid Operator'
// // hint: you can use if statements or switch cases

// function calculator(num1, op, num2) {
//   switch(op) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num1 / num2;
//     default:
//       return 'Invalid Operator';
//   }
// }

// console.log(calculator(3, '-', 5));


// // print out for the name Jill 'Jill is the best'

// const names = ['Jack', 'Jill', 'Jane'];

// for (let i = 0; i < names.length; i++){
//   if (i === 1){
//     console.log(names[i] + ' is the best');
//   } else {
//     console.log(names[i]);
//   }
// }


// // Fizzbuzz print/log the numbers from 1-100 for multipless of 3 print Fizz and for multiples of 5 print Buzz and for multiples of 3 & 5 print FizzBuzz

// for (i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     } else if ( i % 3 === 0){
//         console.log('Fizz');
//     } else if ( i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


// const companies = [
//     {name: 'one', category: 'tech', start: 2000, end: 2010},
//     {name: 'two', category: 'finance', start: 1980, end: 1990},
//     {name: 'three', category: 'retail', start: 1975, end: 1995},
//     {name: 'four', category: 'tech', start: 2004, end: 2014},
//     {name: 'five', category: 'retail', start: 1987, end: 2005},
// ];

// // print companies that are retail

// const retail = companies.filter(function (comp){
//     if (comp.category === 'retail') {
//         console.log(comp);
//     }
// })

// const ret = companies.filter((comp) => comp.category === 'retail'); // does the same as above 


// print companies that started in or after 1980 and ended in or before 2005

// const startAndEnd = companies.filter(function (comp){
//     if ((comp.start >= 1980 && comp.end <= 2005)) {
//         console.log(comp);
//     }
// })

// const startEnd = companies.filter((comp) => comp.start >= 1980 && comp.end <= 2005); // does the same as above 


// // print companies that lasted 11 years or more

// const lastTenYears = companies.filter((comp) => (comp.end - comp.start) >= 11);
// console.log(lastTenYears);


// // create an array of company names

// const compNames = companies.map((comp) => comp.name); // creates an array with the comapny names


// // create an array with just company and category

// const compCat = companies.map((comp) => {
//     return{
//         name: comp.name, 
//         category: comp.category,
//     };
// }); // returns and arrau with only the company name and category


// // create an array of the length of each company in years

// const compYears = companies.map((comp) => (comp.end - comp.start)); // creates an array with the year duration of each company


// // create an array of objects with the name and the length of each company in years

// const compYears2 = companies.map((comp) => {
//     return{
//         name: comp.name, 
//         years: comp.end - comp.start,
//     };
// });


// // take the ppl array and create an array called yppl that stores objects with only name of age 25 and under

// const ppl = [
//     {name: 'one', category: 'tech', age: 20},
//     {name: 'two', category: 'finance', age: 30},
//     {name: 'three', category: 'retail', age: 21},
//     {name: 'four', category: 'tech', age: 27},
//     {name: 'five', category: 'retail', age: 19},
// ];

// const yppl = ppl
//     .filter((p) => p.age <= 25)
//     .map((p) => ({name: p.name}));
// console.log(yppl)


// // add all the positive numbers in the array

// const numbers = [2, 20, 5, -10, -20];

// const posNbrs = numbers
//     .filter((nbr) => nbr >= 1)
//     .reduce((total, nbr) => total + nbr);

// console.log(posNbrs);


// // capitalize the first letter of each word in the array and put it into a new array

// const words = ['one', 'two', 'three'];

// const cap = words.map((str) => str.charAt(0).toUpperCase() + str.slice(1));

// console.log(cap);


// DOM manipulation

// console.log(document.links[0]); // will give us the 1st element of all the links in the document

// document.write('Hello'); // will write Hello to the end of the file but we would rather write it at a specific place

// document.body.innerHTML = '<h1>Hello World</h1>'; // will replace all of our content with Hello World and make it h1

// console.log(document.getElementById('main')); // this will give us the element with id 'id'
// const main = document.getElementById('main'); // storing it in a variable
// main.innerHTML = '<h1>Hello World</h1>'; // replacing all the content inside of our div with Hello World and making it h1

// document.querySelector('#main h1').innerText = 'Hello'; 

// output = document.documentElement; // gives us everything back

// output = document.head; // gives us the head back
// output = document.body; // gives us the body back

// output = document.head.children; // gives us an array of all children from head tag (title, meta tags)
// output = document.body.children; // gives us an array of all children from body tag (p, divs etc)

// output = document.doctype; // this is the type of HTML file we have
// output = document.URL; // this is the URL to our webpage
// output = document.characterSet // gives us the 8 bit encoding format
// output = document.contentType; // gives us the content type e.g. text/html

// output = document.forms; // give us a collection of forms
// output = document.forms[0]; // getting first form from our collection
// output = document.forms[0].id; // getting the id of the first form from our collection
// output = document.forms[0].method; // getting the method of the first form from our collection (the default is always get)
// output = document.forms[0].action; // getting the page where the first form from our collection is on

// document.forms[0].id = 'form1'; // changing the id to form1

// output = document.links; // getting all the links of the page
// output = document.links[0]; // getting the first link of the page
// output = document.links[0].href; // getting the href of the first link
// output = document.links[0].href = 'example.com'; // changing the href to example.com
// output = document.links[0].id = 'link'; // assigns the 1st link id to be 'link'
// output = document.links[0].className = 'class-name'; // assigning the class name of the 1st link to be 'class-name' (we can apply multiple classes by separating them with space e.g. className = "class1 class2")
// output = document.links[0].classList; // gives us a collection of all classes in the 1st link

// output = document.images; // getting all images on the page
// output = document.images[0]; // getting first image from our collection
// output = document.images[0].src; // giving src of the image

// const forms = Array.from(document.forms); // converting a HTMLCollection to an array
// document.forms.forEach((form) => console.log(form)); // iterating over the forms


// Do NOT necessarily use the above for DOM manipulation as there are better ways below


// document.getElementById('main');
// document.getElementById('main').id;
// document.getElementById('main').class;
// document.getElementById('main').className;
// document.getElementById('main').getAttribute('id');

// //Set Attributes
// const main = document.getElementById('main');

// main.id = 'new-id';
// document.getElementById('main').id = 'new-id'; // same as line above
// document.getElementById('main').title = 'new-title';
// document.getElementById('main').setAttribute('class', 'title');

// // Get/change content
// main.textContent = 'Hello';
// main.innerText = 'Hello2';
// main.innerHTML = '<strong>Hello3</strong>';

// // Change styles
// main.style.color = 'red';
// main.style.backgroundColor = 'black';
// main.style.padding = '10px';
// main.style.borderRadius = '10px';

// // document.querySelector()

// document.querySelector('h1');
// document.querySelector('#app-title');
// document.querySelector('.container');
// document.querySelector('input[type="text"]');
// document.querySelector('li:nth-child(2)').innerText;

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'orange';

// // use these methods on other elements

// const list = document.querySelector('ul');
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';


// DOM SELECTORS

// querySelectorAll() & querySelector() will probably the only 2 functions we need to use

// const listItems = document.querySelectorAll('.item');

// listItems[1].computedStyleMap.color = 'red'; // will work as it is for 1, but not all in array

// listItems.forEach((item, index) => {
//     item.style.color = 'purple' // will change the color for all to purple
    
//     if (index === 1){
//         item.remove(); // will remove only second item
//     }

//     if (index === 0){
//         item.innerText = 'hello'; // will replace everything with 'hello'
//         item.innerHTML = `Test <button>X</button>` // will replace everything with this
//     }
// }); 

// const listItems2 = document.getElementsByClassName( 'item' ); // Gives us a HTML Collection

// const listItemsArray = Array.from(listItems2); // transform it to an array to be able to run it in a forEach loop

// listItemsArray.forEach((item) => {
//     item.innerText = 'hi';  // changes the inner text of each element
// });

// const listItems3 = document.getElementsByTagName( 'li' ); // Gives us a HTML Collection


// // get child elements

// const parent =  document.querySelector('.parent');

// let output;

// output = parent.children; // gives us a HTML collection of all children elements of the parent

// output = parent.children[1]; // select second element in the collection
// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'First Child'; // first child of the parent
// parent.lastElementChild.innerText = 'Last Child'; // last child of the parent

// console.dir(output); // will show us all the methods that can be called on output

// // get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// // sibling elements
// const secondItem = document.querySelector('.child:nth--child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;
// output = secondItem.previousElementSibling; // previous sibling of the selected item

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'blue';


// // Traversing the DOM

// const parent = document.querySelector('.parent');
// let output;

// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].innerHTML;
// output = parent.childNodes[3].outerHTML;
// output = parent.childNodes[3].innerText = 'Child one';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';

// // parent node

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement; // same as above in this case

// child.parentNode.style.backgroundColor = 'yellow'; // change color of the parent to yellow
// child.parentNode.style.padding = '10px';

// // sibling

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling; 
// output = secondItem.previousSibling;


// // Create and Append Elements

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// const text = document.createTextNode('Hello World!');
// div.appendChild(text);

// document.body.appendChild(div); // adds the element to the end of the body

// document.querySelector('ul').appendChild(div); // adds the element inside a ul


// // innerHTML vs createElement

// // quick & dirty and less efficient and doesn't work with event handlers automatically
// function createListItem(item) {
//     const li = document.createElement('li');

//     li.innerHTML = `${item}
//         <button>X</button>`;

//     document.querySelector('.items').appendChild(li);
// }

// // clean & performant
// function createNewItem(item){
//     const div = document.createElement('div');

//     div.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');

//     div.appendChild(button);

//     document.querySelector('.items').appendChild(div);
// }

// createListItem('Test2');


// function createNewItem(item){
//     const div = document.createElement('div');

//     div.appendChild(document.createTextNode(item));

//     const button = createButton('test2');

//     div.appendChild(button);

//     document.querySelector('.items').appendChild(div);
// }

// function createButton(classes) {
//     const button = document.createElement('button');
//     return button;
// }


// // insertAdjacentElement
// function insertElement(){
//     const filter = document.querySelector('.filter');

//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';

//     filter.insertAdjacentElement('beforebegin', h1); // will put it above
//     filter.insertAdjacentElement('afterend', h1); // will put it below
// }

// function insertText(){
//     const item = document.querySelector('li:first-child');

//     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
// }

// function insertHTML(){
//     const clearBtn = document.querySelector('#clear'); // id of clear

//     clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
// }

// // insertBefore Example
// function insertBeforeItem(){
//     const ul = document.querySelector('ul');
    
//     const li = document.createElement('li');
//     li.textContant = 'insertBefore';

//     const thirdItem = document.querySelector('li:nth-child(3)');

//     ul.insertBefore(li, thirdItem);
// }

// // insertAfter custom function
// function insertAfter(newEl, existingEl){
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling); 
// }

// // replace elements
// function replaceItem(){
//     const item = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';

//     item.replaceWith(li);
// }

// function replaceAll(){
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item, index) => {
//         item.outerHTML = '<li>Replace All</li>';
//         // item.innerHTML = 'Replace All'; // does the same as above just no li tags are needed
//     });

//     lis.forEach((item, index) => (item.outerHTML = '<li>ReplaceAll</li>')); // does the same as above but on one line
// }


// // remove item

// function removeItem(){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// }

// function removeItem2(itemNumber){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li')[itemNumber - 1]; // if the -1 isn't there we would have to enter 0 to remove the first item
//     ul.removeChild(li);
// }

// function removeItem3(itemNumber){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li');
//     li[itemNumber - 1].remove();
// }

// const removeItem4 = (itemNumber) => document.querySelectrorAll('li')[itemNumber - 1].remove();

// const text = document.querySelector('p');
// function run(){
//     text.classList.toggle('dark'); // adds or removes 'dark' class from the element to switch between a dark mode and normal mode
//     text.classList.toggle('hidden'); // adds or removes 'hidden' class from the element
// }

// document.querySelector('button').onclick = run;


// // Event Listeners

// function onClear() {
//     // option 1
//     const itemList1 = document.querySelector('ul');
//     itemList1.innerHTML = ''; // Clears all items in the list

//     // option 2
//     const itemList2 = document.querySelector('ul')
//     const items = itemList2.querySelectorAll('li'); // Selects all li elements inside the ul element
//     items.forEach((item) => item.remove());

//     // Option 3 probably the most performant way to delete multiple items
//     const itemList3 = document.querySelector('ul')
//     while (itemList3.firstChild) {
//         itemList3.removeChild(itemList3.firstChild);
//     }
// }


// OOP Game Challenge
// create a constructor to create new Player object with a name
// player should have name, lvl set to 1 by default and points set to 0 bu default
// create a method on prototype called gainXP that takes in a number from 1-10 and adds it to the players points
// if the current points are >= 10 then add 1 to the lvl and decrements the points by 10
// create a nother prototype method called describe that displays the players name, lvl and points

function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;

}

Player.prototype.describe = function() {console.log(`${this.name}, lvl ${this.lvl}, points ${this.points}`);}

Player.prototype.gainXP = function (nbr) {
    this.points += nbr; 
    if(this.points >= 10){
        this.lvl++;	
        this.points -= 10;
    }

    this.describe(); // this would make the player.describe() not needed therefore we could hide this function this is an example of encapsulation & extraction
};

let player1 = new Player('Bob');
let player2 = new Player('Sam');

player1.gainXP(5);
player2.gainXP(15);

// player1.describe();
// player2.describe();