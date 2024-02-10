//● How can you select an element by its ID using JavaScript?

const identity = document.getElementById("")

//● How can you select all elements of a specific class name?
const elements = document.querySelectorAll('.className');


//● How can you select the first child element of a given element?

const firstChildElement = parentElement.firstElementChild;

//● How can you select all elements that match a specific CSS selector?

const element = document.querySelectorAll('your-css-selector');

//● How can you change the text content of an element?

     element.textContent = "Javascript is hard but sweet"

//● How can you modify the value of an HTML attribute?

     element.setAttribute("name", "value")
    //e.g
     document.getElementById("mine").value = 
     "Hillaryvalue"

 //● How can you add a new element to the DOM?

     let newElement =document.createElement('div')newElement.textContent = 'my name is James';
     newElement.classList.add('new-class');
     const parentElement = document.getElementById('parentElementId');
     parentElement.appendChild(newElement);

//● How can you remove an element from the DOM?
const elementToRemove = document.getElementById('elementId');
elementToRemove.remove();


//● How can you access the parent element of a given element?
const childElement = document.getElementById('childElementId');
const parentElement = childElement.parentNode;


 //● How can you access the next sibling element of a given element?
const currentElement = document.getElementById('currentElementId');
const nextSiblingElement = currentElement.nextElementSibling;


 //● How can you iterate over all child elements of a given element?
       let allChild =document.getElementsByClassName("allchild")
       allChild.forEach((child, index) =>){
        console.log(child, index)
       }
      
//  ● How can you find all elements matching a specific condition within a subtree?

const rootElement = document.getElementById('rootElementId');
const matchingElements = rootElement.querySelectorAll('.className');

matchingElements.forEach(element => {
    console.log(element);
});


//● How can you change the inline style of an element using JavaScript?

   document.getElementById("").style.color ="green"

//● How can you add or remove CSS classes from an element?

const element = document.getElementById('elementId');
element.classList.remove('className');


//● How can you toggle between two different styles for an element?

const element = document.getElementById('elementId');

function toggleStyles() {
    if (element.classList.contains('defaultStyle')) {
        
        element.classList.remove('defaultStyle');
        element.classList.add('alternateStyle');
    } else {
       
        element.classList.remove('alternateStyle');
        element.classList.add('defaultStyle');
    }
}

toggleStyles();



//● How can you dynamically create and add a CSS stylesheet to the document?

const styleElement = document.createElement('style');

const cssRules = `
    .newStyle {
        color: blue;
        font-size: 16px;
    }
`;
styleElement.appendChild(document.createTextNode(cssRules));

document.head.appendChild(styleElement);


 //● Explain the syntax and purpose of the forEach method in JavaScript.
 
    forEach(function(currentValue, index ,arr),thisValue)
   
// The forEach method in JavaScript iterates over elements in an array and executes a callback function for each element. It's a concise way to perform actions on array elements without needing to use explicit loops.


// ● How does forEach differ from traditional for loops in terms of scope and

// forEach: It goes through each item in a list one by one and does something with it. It's like a worker going through each task in a to-do list and completing them.

// for loop: It's like you going through your to-do list step by step, and you have more control over how you go through the list, like starting from any point or skipping tasks.


//● Write code to double each element in an array using forEach.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
    array[index] = number * 2;
});

console.log(numbers);


// ● Create a new array containing only strings from a mixed array using forEach.

const mixedArray = [1, 'apple', true, 'banana', 42, 'orange'];

const stringArray = [];
mixedArray.forEach(item => {
    if (typeof item === 'string') {
        stringArray.push(item);
    }
});

console.log(stringArray);



//● Filter an array to include only even numbers using forEach.

const num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens =[]
num.forEach((num) => {
     if (num % 2 === 0){
          evens.push(num);
     }
})

console.log(evens);


//● Demonstrate how to access the current index within a forEach callback.

lconst array = ['a', 'b', 'c', 'd'];

array.forEach(function(element, index) {
    console.log(`Element: ${element}, Index: ${index}`);
});



//● Explain how to break out of a forEach loop early.
     //stop the loop if #y is green

   colors = array["yellow", "green", "pink"];

   forEach(color as #y){
    if (#y== "green")
    console.log(#y)
    break;
   }



//● Can you modify the original array directly within a forEach callback? /Why or why not?

   
// Yes, you can modify the original array directly within a forEach callback. Any changes made to the elements within the callback will persist in the original array. However, it's generally recommended to avoid adding or removing elements from the array during iteration to prevent unexpected behavior.

    let array =[2,3,4]
    array.forEach((element, index) => {
     array[index]= element * 10;

    });
    console.log(array)

//● Describe common use cases for forEach in JavaScript applications.

 // some use cases of foreach are to loop through an array and perform an operation on each element,perform side-effects such as logging users interface updates.check the existance of an element in an array



//● When would you choose forEach over other looping methods?

    //i will choose foreach loop over other loops when i want to loop through all the values in an array or list


//● Explain the syntax and purpose of the for...of loop in JavaScript.
     for (variable of iterable){
     //code block to be executed
}
        //for of ststement lets you loop over iterable data structure such as array,strings,maps,nodelists and more


//● How does for...of differ from traditional for loops and forEach?


    the for..of loop can only loop through arrays, map,set,arguments object.


//● Iterate over an array of numbers and print their squares using for...of.

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    const square = number * number;
    console.log(square);
}



//● Create a new array containing the string lengths of each element in another array using for...of.

const words = ['apple', 'banana', 'orange', 'kiwi'];

const lengths = [];

for (const word of words) {
    lengths.push(word.length);
}

console.log(lengths);


//● Iterate over the keys of an object using for...of loop
//create an object
// Create an object
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (const key of Object.keys(person)) {
  console.log(key);
}



//● Iterate over the values of an object using for...of.
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (const value of Object.values(person)) {
  console.log(value);
}



//● Explain how to access both keys and values in a for...of loop.

const person = {
  name: 'Hillary',
  age:20,
  city: 'Lagos'
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
for (const[ key, value] of object.entries(objectName)){

}


//● Can you modify the original array or object within a for...of loop?

Yes, you can modify the original array or object within a for...of loop.



// ● Describe common use cases for for...of loops in JavaScript applications.

for...of loops are used to easily go through arrays, strings, and other iterable objects in JavaScript. They're handy for looping through collections and handling various data types.


// ● When would you choose for...of over other looping methods?

You would choose for...of over other looping methods when you want a simple and concise way to iterate over iterable objects like arrays, strings, sets, maps, and other collections. It's especially useful when you don't need access to the index of the element and prefer a cleaner syntax for looping. However, if you need to manipulate the index or have more complex looping logic, traditional for loops or other methods like forEach, map, or filter might be more appropriate.



//● Write a for loop that prints numbers from 1 to 10.


  for(let i = 1; i < 11; i++) {
  console.log(i);
}



//● Write a for loop that sums all numbers in an array.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


  


//● Find the largest number in an array using a for loop.

const numbers = [10, 5, 20, 8, 15];
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(largest); 



// ● Create a new array containing the squares of numbers in another array using a for loop.

const numbers = [1, 2, 3, 4, 5];
const squares = [];

for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]);
}

console.log(squares); 


//● Iterate over an object's properties and values using a for loop.

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}



//● Explain the difference between initial, conditional, and increment expressionsin for loops.

Initial Expression: It sets up the loop, typically initializing a counter variable.

Conditional Expression: It determines whether to continue or terminate the loop based on a condition.

Increment Expression: It updates the loop control variable after each iteration.

The initial expression starts the loop, the conditional expression decides whether to continue looping, and the increment expression updates the loop control variable.


//● Demonstrate how to nest for loops to create multidimensional arrays.

     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newNumbers = [1, 2, 3, 4, 5];
     for (let numbs of numbers) {
     console.log(numbs);
     for (let nnmbs of newNumbers) {
    console.log(nnmbs);
  }
}


//● Break out of a for loop early using the break statement.
 for (let x = 0; x <= 10; x++) {
if (x === 4)
console.log("this loop will break here")
break;
}
  


//● Continue to the next iteration of a for loop using the continue 
//statement.

for (let z = 0; z <= 10; z++) {
if (z === 4)
console.log('this loop will continue')
continue;
}


// ● Describe common use cases for for loops in JavaScript applications.

it is commonly used to run code a set number of time e.g games,banking apps


//● Select an element by its ID using getElementById.

 document.getElementById("meeee")

//● Select all elements of a specific class name using


const elements = document.querySelectorAll('.your-class-name');
     
//● Select the first child element of a given element using firstChild.

const firstChildElement = parentElement.firstChild;


//● Select all elements that match a specific CSS selector using    querySelector

const elements = document.querySelectorAll('.your-selector');



//● Access the parent element of a given element using parentNode.

const parentElement = childElement.parentNode;

if (parentElement) {
  
    console.log(parentElement);
} else {
    console.log("No parent element found.");
}




//● Access the next sibling element of a given element using nextSibling.
// Assuming 'currentElement' is the given element


const nextSiblingElement = currentElement.nextSibling;

if (nextSiblingElement && nextSiblingElement.nodeType === 1) {
  
    console.log(nextSiblingElement);
} else {
    console.log("Next sibling element does not exist or is not an element node.");
}



//● Iterate over all child elements of a given element using childNodes.
//for example i have a parent element as 'bigimages and the children id are 'images'
    const image = document.getElementById("bigimages").childNodes
    for (var i =1; i<images.length;i++)
    images[i].style.zIndex =1



//  ● Find all elements matching a specific condition within a subtree using recursive function.

function findElementsMatchingCondition(node, condition, results = []) {
  
  if (condition(node)) {
      results.push(node);
  }

  if (node.children) {
      for (let child of node.children) {
          findElementsMatchingCondition(child, condition, results);
      }
  }
  return results;
}


//● Explain the difference between childNodes, children, and getElementsByTagName

    childNodes is a property of a Node,children is a property of an element, while getElemenysByTagName takes a tag name as a parameter and returns all tags that have that name

//● Demonstrate how to modify element content (text and attributes) using DOMmanipulation.
   //first you call the id of the element then assign the attribute or text you want.
   
document.getElementById("myimage").src = "land.jpg"
document.getElementById("myhouse").innerText ="New Text"


//● Add a new element to the DOM using createElement and appendChild.
let newElement =document.createElement('d')
     newElement.innerText = 'hello world'
     oldElement.appendChild(newElement)


//● Remove an element from the DOM using removeChild.
  const oral =
   document.getElementById("myOral")
     if(oral.hasChildNodes()){
    oral.removeChild()
    }


//● Change the inline style of an element using style.
 document.getElementById("me").style.color="red"


//● Add or remove CSS classes from an element using classList.
//add class
function myfunction(){
    let victory =
    document.getElementById("myColos")
    victory.classList.add("syle")
}
function myfunction(){
    let victory =
    document.getElementById("myColos")
    victory.classList.remove("syle")
}

//● Toggle between two different styles for an element using JavaScript.
     
     document.getElementById("my-container")
     element.classList.toogle("myStyle")


//● Use a for loop to create 10 new paragraph elements and append them to the
//body of the document.

 for(i=0;i< menubar.length;i+=);{
     const a = document.createElement('b')
     parentElement.appendChild('b')
}

//● Use forEach to iterate over all images on a page and add a border to eachone.
const images = document.querySelectorAll("img")

images.forEach(function(image)){
      image.style.borderImage ="2px sold #d7d7d7"
     console.log(image)
    
}











