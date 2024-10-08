ECMAScript
ECMAScript is a standardized scripting language specification that JavaScript follows.
It defines the features, syntax, and behavior of JavaScript. JavaScript is an implementation of ECMAScript.

================================================================================================================================================================================
Scopes: In JavaScript, there are two main types of scopes: global scope and local scope. 

Global Scope: Variables declared outside any function or block have a global scope. They can be accessed from any part of the code, including other functions.

var globalVariable = "I am global";
function exampleFunction() {
    console.log(globalVariable);  // Accessing the global variable
}
exampleFunction();  // Output: I am global

-------------------------------------------------------------------------
Local Scope: Variables declared within a function have a local scope. They are only accessible within that function.

function exampleFunction() {
    var localVariable = "I am local";
    console.log(localVariable);  // Accessing the local variable
}
exampleFunction();  // Output: I am local

// Trying to access the local variable outside the function will result in an error
// console.log(localVariable);  // This will throw an error

--------------------------------------------------------------------------------
It's worth noting that starting from ES6 (ECMAScript 2015), the let and const keywords also introduce block scope,
meaning they are scoped to the nearest enclosing curly braces {} rather than the entire function.

function exampleFunction() {
    if (true) {
        let blockScopedVariable = "I am block-scoped";
        console.log(blockScopedVariable);
    }
    // console.log(blockScopedVariable);  // This will throw an error
}

================================================================================================================================================================================
var keyword:
'var' is used to declare variables with function scope. 
It can be reassigned and redeclared within its scope.

let keyword:
let is used to declare variables with block scope.
It can be reassigned but not redeclared within its scope, and is not hoisted

let x = 5;
let x = 10; // Redeclaration of the variable 'x'
-------------------
y = 5
y = 10  # Reassignment of the variable 'y'

const keyword:
'const' is used to declare variables with block scope.
It cannot be reassigned or redeclared once initialized, and is not hoisted.
const does not make objects or arrays immutable, only their reference cannot be changed.

================================================================================================================================================================================
Named functions: 
These are functions that have a specified name and can be invoked using that name.
They are defined with the 'function' keyword followed by the function name and parameters.
	function add(x, y) {
	  return x + y;
	}
	
	// Using the named function
	const resultNamed = add(3, 5);
	console.log(resultNamed); // Output: 8

Anonymous functions: 
These are functions that do not have a specified name.
They are usually defined inline as function expressions or as arrow functions.

	const addArrow = (x, y) => {
	  return x + y;
	};
	
	// Using the arrow function
	const resultArrow = addArrow(3, 5);
	console.log(resultArrow); // Output: 8

================================================================================================================================================================================

-----------let keyword-----------------------------
	for(let i=0; i<5; i++)
	{
	  setTimeout(function() {
	    console.log(i);
	  }, 0);
	}
	
	o/p :
	0
	1
	2
	3
	4

With let, a new variable i is created for each iteration of the loop.
This means that each setTimeout callback function will capture the value of i at that particular iteration,resulting in the expected output:
Each callback function holds a reference to a separate i variable with its own value.

---------var leyword----------------------------
	for(var i=0; i<5; i++)
	{
	  setTimeout(function() {
	    console.log(i);
	  }, 0);
	}
	
	o/p:
	5
	5
	5
	5
	5

With var, there is only one variable i that is hoisted to the top of the function scope (or the global scope if this code is not within a function).
As a result, by the time the setTimeout callbacks are executed, the i variable has already reached its final value (i.e., 5) due to the loop completing.
This leads to a somewhat unexpected output:
In this case, all the callback functions capture the same i variable, which has the value of 5 after the loop completes.
	
----------------------------------------------------------
To get expected output need to implement IIFE's
	for(var i=0; i<5; i++){
	  (function(arg){
	    setTimeout(function() {
	      console.log(arg)
	    }, 1000);
	  })(i)
	}
	//0,1,2,3,4,

Here, IIFE (Immediately Invoked Function Expression) is used to create a new scope for each iteration of the loop,
capturing the current value of i for each timeout function. This way, you'll get the output 0, 1, 2, 3, 4.
	or
IIFE is used to create a closure by capturing the current value of the loop variable.


================================================================================================================================================================================

let arr = [{ name: 'y', age: 26 }, { name: 'x', age: 26 }, { name: 'z', age: 27 }];

// Initialize an empty object to store the result
let output = {};

// Iterate through the array
arr.forEach((item) => {
  const { name, age } = item;

  // Check if the age already exists as a key in the output object
  if (output[age] === undefined) {
    output[age] = [];
  }

  // Add the name to the corresponding age key in the output object
  output[age].push(name);
});

console.log(output);
{ 26: ['y', 'x'],  27: ['z'] }

---------------------------------------------------------------for loop---------------------
let output = {};
for(let i=0 ; i <arr.length; i++) {
  const { name, age } = arr[i];
  if (output[age] === undefined) {
    output[age] = [];
  }
  output[age].push(name);
};

console.log(output);
{ 26: ['y', 'x'],  27: ['z'] }
================================================================================================================================================================================
create a promise useing settimeout with 3 milliseconds.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 3 milliseconds");
    // reject("rejected after 3 milliseconds")
  }, 3); // 3 milliseconds
});

myPromise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err)
});

================================================================================================================================================================================
get the value which occured 2 times first occurance and print the value
const ar = ["a", "b", "c", "b", "a", "a"];

const result = ar.find((value, index, array) => array.indexOf(value) !== index);
console.log(result);

Output: b

// Use filter to find elements that occur more than once
const result = ar.filter((value, index, array) => array.indexOf(value) !== index);

// Print the first value that occurs twice
console.log(result[0]);

Output: b

--------------------------------------------------------------------------------------------------------

const ar = ["a", "b", "c", "b", "a", "a"];

// Step 1: Count occurrences of each element
const countMap = {};
ar.forEach((value) => {
  if (countMap[value]) {
    countMap[value]++;
  } else {
    countMap[value] = 1;
  }
});

// Step 2: Find the first element with exactly two occurrences
let result = null;
for (const key in countMap) {
  if (countMap[key] === 2) {
    result = key;
    break;
  }
}

// Step 3: Print the result
console.log(result); //b
================================================================================================================================================================================

// Convert the number to a string, reverse it, and convert it back to a number
function reverseNumber(num) {
  const reversedStr = num.toString().split('').reverse().join('');
  const reversedNum = parseInt(reversedStr, 10);
  return reversedNum;
}

const reversed = reverseNumber(12345);
console.log(reversed); // Output: 54321
--------------------------------------------------------------------------------
function reverseNumber(num) {
    // Convert number to string and split into array of characters
    const data = num.toString().split('');

    // Initialize an empty array to store reversed characters
    let result = [];

    // Loop through the characters array in reverse order
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]); // Push each character to the result array
    }

    // Join the result array into a string and convert it back to a number
    // Use parseFloat to handle cases where the reversed number might start with '0'
    // Example: reverseNumber(120) should return 21, not 021
    return parseFloat(result.join(''));
}
const reversed = reverseNumber(12345);
console.log(reversed); // Output: 54321
================================================================================================================================================================================
check the value which occured first 2 times and print the value
const ar = ["a", "b", "z", "b", "a", "a"];
const frequency = {};

// Count the frequency of each element in the array
ar.forEach(item => {
  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }
});
console.log(frequency) //{ a: 3, b: 2, z: 1 }

// Find the value that occurs 2 times
for (const item in frequency) {
  if (frequency[item] === 2) {
    console.log(item);
    break; // Stop after finding the first value that occurs 2 times
  }
}

Output: b

================================================================================================================================================================================
Advance Interview Concepts
NPM:- npm is a package manager. npm is a repository where all the libraries, frameworks, and tools are available.

Types of Dependency:- There are two types of dependency.
1) Dev Dependency- Generally required in the developing phase
2) Normal Dependency- Used in the production phase

◽Difference between caret and tilde 
1) Caret (^): The caret is used to specify a range of compatible versions with some flexibility.
	When used with a major version number, it allows for backward-compatible updates.
2) Tilde (~): The tilde is used to specify a range of versions with a more restrictive approach.
	It allows only for updates within the same major version and includes patch-level updates.

◽Package.json:- It is a configuration for npm. It keeps attracting, of what version is installed in our app.

◽Package-lock.json:- It locks the version and keeps the exact version record.

◽Node-Modules:- It contains the code which we fetch from the NPM or we can say it is like a database where our all code exists.

◽Parcel:- Parcel is a web application bundler that simplifies the process of building and bundling web applications.
Parcel simplifies the development workflow by providing a fast, easy-to-use, and zero-configuration bundling solution.
It reduces the initial setup time, improves development productivity with features like HMR, and automatically optimizes the performance of the bundled output.

◽Superpower of Parcel:-
Caching => Faster Builds
Image Optimization
Minification
Bundling
Compressing
Consistent Hashing
Code Splitting
Differential Bundling - Support older browsers
Diagnostic
Error Handling
HTTPS
Tree Shaking

◽Tree Shaking:- Tree shaking is a technique used in JavaScript module bundlers,
such as Webpack or Parcel, to eliminate unused code from the final bundled output.
It helps optimize the bundle size by removing dead or unreachable code.
================================================================================================================================================================================
Event Loop:

The event loop is a fundamental concept in JavaScript that allows it to handle asynchronous operations
and maintain a responsive user interface in a single-threaded environment.
It plays a crucial role in the execution of JavaScript code,
especially when dealing with tasks like network requests, user interactions, timers, and more.

1. Single-Threaded Nature of JavaScript:
JavaScript is a single-threaded language, meaning it has only one main execution thread to process code.
This single thread executes code sequentially, line by line, and can handle one task at a time.

2. Blocking vs. Non-Blocking:
In a single-threaded environment, if a task takes a long time to complete (e.g., fetching data from a server), it can block the entire program, making it unresponsive.
JavaScript uses non-blocking operations to avoid this issue. It starts an operation and continues executing other tasks while waiting for the non-blocking operation to complete.

3. Event Loop Overview:
The event loop is a mechanism that allows JavaScript to manage and execute asynchronous operations efficiently.
It consists of three main components: the call stack, the callback queue (task queue), and the microtask queue.

4. Call Stack:
The call stack is a data structure that keeps track of the execution context of functions.
When a function is called, its context is pushed onto the stack. When it completes, it's popped off the stack.

5. Callback Queue (Task Queue):
The callback queue, often referred to as the task queue, stores tasks or functions (callbacks) that are ready to be executed.
These tasks typically include I/O operations, timers (e.g., setTimeout), and event handlers (e.g., click events).

6. Microtask Queue:
The microtask queue is a special queue that stores tasks with higher priority than those in the callback queue.
Promises and certain APIs (e.g., MutationObserver) generate microtasks.
When promises are resolved or rejected, their associated callbacks are added to the microtask queue.

Event Loop Flow:
The event loop continuously checks the call stack to see if it's empty. If the call stack is empty.
It first checks the microtask queue. If there are microtasks, they are executed one by one, in order of insertion, until the microtask queue is empty.
After the microtask queue is empty, the event loop checks the callback queue and executes tasks (callbacks) from there one by one, also in the order they were added.
This cycle continues, with the event loop checking and executing microtasks and tasks,
ensuring that asynchronous operations are processed efficiently without blocking the main program.

In simple terms, the event loop allows JavaScript to handle multiple asynchronous tasks,
ensuring that they are executed in a non-blocking manner and in a specific order.
It helps maintain the responsiveness of web applications and ensures predictable behavior in an otherwise single-threaded environment.
================================================================================================================================================================================

Closures- 
A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing.
they retain a reference to those variables even if the outer function has completed.
OR
A closure is the combination of a function and the lexical environment within which that function was declared.
OR
When inner function can have access to the outer function variables and parameter.

The return statement does not execute the inner function - function is only executed only when followed by ()parathesis, but rather than returns the entire
body of the function.

Uses/advantages of closures:
Closures enable data encapsulation and help create private variables in JavaScript.
-event handlers
-callback functions
-Encapsulation: can store data in separate store
-Object data privacy
-Module Design Pattern
-Currying
-Functions like once
-memoize
-setTimeouts
-Iterators
-maintaining state in async world

Disadvantages of closures:
1. Creating function inside a function leads to duplicate in memory and cause slowing down the application means use only when required privacy.
2. As long as the clousers are active, the memory can't be garbage collected means if we are using clousers in ten places then untill all the 10 process complete 
it hold the memory and can overcome to set closure to Null.

const outerFunction =(a)=>{
  let b=10;
  const innerFunction =()=>{
    let sum = a+b;
    console.log(sum)
  }
  innerFunction()
}
outerFunction(5)// 15
--------------------------------
const outerFunction =(a)=>{
  let b=10;
  const innerFunction =()=>{
    let sum = a+b;
    console.log(sum)
  }
  return innerFunction
}
outerFunction(5) //output : 
 ()=>{
    let sum = a+b;
    console.log(sum)
  }
--------------------------------
const outerFunction =(a)=>{
  let b=10;
  const innerFunction =()=>{
    let sum = a+b;
    console.log(sum)
  }
  return innerFunction
}
let inner = outerFunction(5)
console.log(inner)
inner() //15
------------------------------ Standard
var globalVar = "xyz";

function outerFunc(outerArg) {
    var outerVar = 'a';

    function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +  //outerArg = 123
        "innerArg = " + innerArg + "\n" +  //innerArg = 456
        "outerVar = " + outerVar + "\n" +  //outerVar = a
        "innerVar = " + innerVar + "\n" +  //innerVar = b
        "globalVar = " + globalVar);  //globalVar = xyz
    };
    innerFunc(456);
}
outerFunc(123);  


================================================================================================================================================================================
Prototype: 
Prototype allow to easily define methods to all the instances of object. It stored in the memory once but every object instances can access it.
	
1. Javascript is a prototype based language, so, whenever we are creating a function using javascript, javascript engine adds a prototype property inside a function,
Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the
other objects to inherit these methods and properties.
2. We are creating prototype in constructor function. All the intances of objects can able to access properties and methods from constuctor function.
3. The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and 
modifiable and object's prototype property (aka attribute) is not visible.
4. object's prototype property is invisible. Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.
5. prototype is useful in keeping only one copy of functions for all the objects (instances).
6. An Object has a prototype. A prototype is also an object. Hence Even it may have its own prototype object. This is referred to as prototype chain.

<A>Several Types:
1. Object.prototype- It is a prototype OBJECT of object(cunstruction function where it will inherit all properties of Object.protorype). 
Prototype Object of Object.prototype is NULL.
2. Array.prototype-Prototype Object of Array.prototype is Object.prototype and Prototype Object of Object.prototype is NULL.
3. Function.prototype
4. Example-
var person = function(name){
   this.name = name;
}
person.prototype.age = 21;
var piya = new person("Piya");
var priya = new person("Priya");
console.log(piya.age) //21
console.log(priya.age) //21

<B>Purpose/Use of prototype:
1) to find properties and methods of an object 
2) to implement inheritance in JavaScript

<C>Difference between Prototype and __proto__:
1. In reality, the only true difference between prototype and __proto__ is that the former is a property of a class constructor, 
   while the latter is a property of a class instance.
2. Instances have __proto__, classes have prototype.
3. Instances of a constructor function use __proto__ to access the prototype property of its constructor function.
4. __proto__ is invisible property of an object. It returns prototype object of a function to which it links to. 
5. __proto__ is Deprecated. 
6. Example:
function Person(name){
    this.name = name
 }; 
var eve = new Person("Eve"); 
eve.__proto__ == Person.prototype //true
eve.prototype  //undefined
7. Example:
function Person() {
    this.name = 'John'
}
// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23
const person1 = new Person();
console.log(person1.name); // John
console.log(person1.age); // 23

================================================================================================================================================================================
CSS Positions:

1. Static: HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties. 
   Object can't move. it is always positioned according to the normal flow of the page.
2. Relative: Object can move. It is positioned relative to its normal position. If want gap from its actual placed position then use it. It work with left,
   right, top, bottom properties.
3. Fixed: Not allow to scroll up or down. is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
   The top, right, bottom, and left properties are used to position the element. The element is positioned relative to the browser window
4. Absolute: it is work with relative i.e, w.r.t parent. It is positioned relative to the nearest positioned ancestor (instead of positioned relative to the 
   viewport, like fixed). if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
5. Sticky: An element with position: sticky; is positioned based on the user's scroll position. Internet Explorer does not support sticky positioning. 
   You must also specify at least one of top, right, bottom or left for sticky positioning to work. Use for to create menu.

================================================================================================================================================================================
Time based Event:

SetTimeout: 
1. allows us to run a FUNCTION ONCE, after the interval of time
2. setTimeout() executes the passed function after given time. The id_value returned by setTimeout() function is stored in a variable and 
   it’s passed into the clearTimeout() function to clear the timer. 
3. Syntax- let timerId = setTimeout(function, milliseconds, [arg1], [arg2], ...)
4. Don't make a mistake by adding brackets () after the function otherwise gives undefined and nothing will scheduled.
5. Example-
let timerId = function sayHi(phrase, who) {
  console.log( phrase + who );
}
setTimeout(timerId, 1000, "Hello", "John"); 

SetInterval:
1. allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
2. setInterval() executes the passed function for the given time interval. The number id value returned by setInterval() function is stored 
   in a variable and it’s passed into the clearInterval() function to clear the interval.
3. Syntax-
4. Example
let timerId = function sayHi(phrase, who) {
  console.log( phrase + who );
}
setInterval(timerId, 1000, "Hello", "John");

ClearTimeout:
1. This method is used to cancel a setTimeout().  Inside the method you have to reference the timeoutID.
clearTimeout(timerId)

ClearInterval:
1. This method is used to cancel a setInterval().  Inside the method you have to reference the intervalID.
clearInterval(timerId)
================================================================================================================================================================================
                                          
Debouncing and Throttling in JavaScript: using in search box, scrolling or resize the widow size

1. It Creates impact on performance of your website, but also prevent unnecessary API calls and load on the server.
2. Throttling and debouncing are techniques used to control the frequency of executing a function. It is useful when dealing with user interactions and optimizing performance. 
3. The main difference between throttling and debouncing is that throttling executes the function at a regular interval, while debouncing executes the function only 
   after some cooling period.
4. Example: If you're scrolling, throttle will slowly call your function while you scroll (every X milliseconds). Debounce will wait until after you're done scrolling 
   to call your function.

examples : on button click, mouse move, search bar, window scrolling and window resize allow the user to decide when to execute.

Throttling-
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
                                                                        or
Throttling limits the execution of a function to a specified interval, ensuring that it is not called more frequently than the defined delay.
	
usage:
Scroll Events: Throttling can be applied to the scroll event to limit the frequency of a callback function responsible for updating elements as the user scrolls.
Button Clicks: When dealing with button clicks, throttling can prevent users from triggering a particular action too frequently.

import React, { useState, useEffect, useRef } from 'react';

function ThrottleExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // useRef to store the latest value of count

  useEffect(() => {
    countRef.current = count; // Update countRef with the latest count value after each render
  }, [count]);

  const throttle = (func, delay) => {
    let timeout;

    return function () {
      if (!timeout) {
        func.apply(this, arguments); // `this` and `arguments` context captured
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }
    };
  };

  const handleClickThrottle = throttle(() => {
    setCount(countRef.current + 1); // Use countRef.current to get the latest count value
  }, 1000);

  return (
    <div>
      <p>Throttle Example: {count}</p>
      <button onClick={handleClickThrottle}>Increment</button>
    </div>
  );
}

export default ThrottleExample;

In this example, the throttle function ensures that the handleClickThrottle function can only be called once every 1000 milliseconds (1 second), preventing rapid clicking.
================================================================================================================================================================================

Debouncing- 
No matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.
The Debounce technique allow us to “group” multiple sequential calls in a single one.
                                                        or
Debouncing postpones the execution of a function until a specified amount of time has passed since the last invocation.
It is typically used in scenarios where the function should only be triggered once a certain event has stopped occurring.

usage:
Input Fields:- Debouncing can be used when handling user input in search boxes.It prevents making API calls on every keystroke but instead waits for a short delay after the user stops typing.
Resizing Windows:- When handling the window resize event, debouncing can be used to ensure that a function (e.g., repositioning elements) is only called after the user has finished resizing the window.


import React, { useState, useEffect, useCallback } from 'react';

function DebounceExample() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  };

  const updateOutput = useCallback(
    debounce((inputValue) => {
      setOutput(inputValue);
    }, 1000),
    []
  );

  const handleChangeDebounce = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    updateOutput(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={handleChangeDebounce}
      />
      <p>Debounced Output: {output}</p>
    </div>
  );
}

export default DebounceExample;


In this example, the handleChangeDebounce function is debounced, so it only updates the output state after a 1000ms (1 second) pause in typing.
This is particularly useful for search bars and filtering in real-time.
================================================================================================================================================================================

CALL, APPLY and BIND method: These methods allow us to write a function once and invoke it in a different context. They all attach this into a function (or object) 
and the difference is in the function invocation. Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated 
list of arguments. I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array. Bind is a bit different. 
It returns a new function. Call and Apply execute the current function immediately. The main concept behind all this methods is Function burrowing.

CALL:
1. It is predefined javascript method.
2. call is used to invoke a function with a specified this value and individual arguments passed one by one.
3. It's useful when you know the exact number of arguments the function expects and you can pass them individually. 

APPLY:
1. Apply is also used to invoke a function with a specified this value, but it takes arguments as an array. 
2. It's helpful when you want to pass an array of arguments to a function or when the number of arguments may vary. 

BIND:
1. Bind method is used to create a new function with a specified this value, without invoking the function immediately.
2. This is useful for creating functions with a fixed this value. However we still need to separetely invoke the returned function.
                                                or
1. Bind returns a new function with a bound this value but does not immediately invoke the function. 
2. It's commonly used when you want to create a new function with a fixed this value to be called later. 

summary :
1. call and apply both invoke a function with a specified this value, but call takes individual arguments, while apply takes an array of arguments. 
2. bind returns a new function with a fixed this value, which can be called later with any number of arguments.
3. These methods are powerful tools for managing the 'this' context  and passing arguments when working with js functions and are commomly used in 
scenarios like event handling, function composition and oop.

Example1:
const employee = {
  fName: "Manoj",
  Lname:"Odela"
}
const Details = function(a, b){
  console.log("Hi "+this.fName+" "+this.Lname+" "+ a +" "+ b)
}

Details.call(employee, "Hello", "How are you"); //Hi Manoj Odela Hello How are you
Details.apply(employee, ["Hello", "How are you"]); //Hi Manoj Odela Hello How are you
let result = Details.bind(employee);
result("good morning", "!"); //Hi Manoj Odela good morning !

Example2:
const obj = {name:"Priya"}
let greeting = function(a,b){
  return a+" "+this.name+" "+b;
}
console.log(greeting.call(obj, "Hello", "How are you?"));
console.log(greeting.apply(obj, ["Hello", "How are you?"]));
let test=greeting.bind(obj);
console.log(test("Hello", "How are you?"))

================================================================================================================================================================================

Hoisting:
1. Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase.
2. This means that you can use variables and functions before they are declared in your code.
3. However, only the declarations are hoisted, not the initializations or assignments.
4. Hoisting is the process of putting all declarations, such as variables and functions, into memory during the compile phase.

-------------------------------------------------------------------
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

1. Variables declared with var will be hoisted and initialized with undefined.
2. Variables declared with let and const, are hoisted, but not initialized with undefined.
3. They can be accessed only after initialization, otherwise we receive a ReferenceError.
4. This is because of the Temporal Dead Zone, a time window where the variable exists but it still uninitialized. 

----------------------------------------------------------------------
greet1();
greet2();
greet3();
greet4();

// function declaration is fully hoisted
function greet1() {
  console.log("HELLO");
}

// TypeError: greet1 is not a function
var greet2 = function () {
  console.log("HELLO");
};

// ReferenceError: Cannot access 'greet3' before initialization
let greet3 =  () =>  {
  console.log("HELLO");
};

//Uncaught TypeError: greeting1 is not a function because its treeting like a variable not a function, so rather then storing a function body it's storing undefined by default.
const greet4 = function () {
  console.log("HELLO");
};

1. Traditional function declarations will be fully hoisted thus making function accessible throughout our code.
2. But with function expressions and arrow functions, we are unable to call a function before it has been declared. 
3. In order to solve these errors Either change the function expression/arrow functions to traditional function declarations or call the function after the declarations.

================================================================================================================================================================================
Window and This:

Window:
1. Javascript engine create global context execution and allocate some memory space. It is a big object with lot of methods and functions which is created in global space 
by JS engine.
2. Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.
3. window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
4. window is the global object, you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.
5. window.document.getElementById("header") is the same as document.getElementById("header").

This:
1. At global level THIS points to the window. 
2. With Window object THIS variable is created by default.
3. This === window //true

Example:
var a=10;
function b(){
 var x=10;
}
console.log(window.a); //10
console.log(a); //10
console.log(this.a); //10
================================================================================================================================================================================

Even Propogation an STOP Propogation: Bydefault event capturing happen first and then even bubbling happen.

Event Bubbling:
1. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. With bubbling, the event is 
   first captured and handled by the innermost element and then propagated to outer elements.
2. Bydefault event bubbling execute. To run event bubbling required to mention 3rd argument as FALSE or nothing.
3. "child clicked"
"parent clicked"
"grandparent clicked"
4. Drawback: Bubbling not occur at blur, focus, resizing of window etc.

Event Capturing or Event Trickling:
1. With capturing, the event is first captured by the outermost element and propagated to the inner elements.
2. To run event capturing required to mention 3rd argument as TRUE.
3. "grandparent clicked"
"parent clicked"
"child clicked"

Example:
html-
<div id="grandparent">
  <div id="parent">
    <div id="child">
      </div>
</div>
</div>

css-
div{
  min-width: 10px;
  min-height: 10px;
  border: 1px solid red;
  padding: 30px;
}

js-
for bubbling:
document.querySelector("#grandparent").addEventListener("click",()=> {console.log("grandparent clicked")}, false);
or
document.querySelector("#grandparent").addEventListener("click",()=> {console.log("grandparent clicked")});
document.querySelector("#parent").addEventListener("click",()=> {console.log("parent clicked")}, false);
or
document.querySelector("#parent").addEventListener("click",()=> {console.log("parent clicked")});
document.querySelector("#child").addEventListener("click",()=> {console.log("child clicked")}, false);
or
document.querySelector("#child").addEventListener("click",()=> {console.log("child clicked")})

------------------------------

for capturing:
document.querySelector("#grandparent").addEventListener("click",()=> {console.log("grandparent clicked")}, true);
document.querySelector("#parent").addEventListener("click",()=> {console.log("parent clicked")},true);
document.querySelector("#child").addEventListener("click",()=> {console.log("child clicked")},true); 

stopPropogation:
document.querySelector("#grandparent").addEventListener("click",()=> {console.log("grandparent clicked")}, false);

document.querySelector("#parent").addEventListener("click",(e)=> {console.log("parent clicked"); e.stopPropogation()},false);

document.querySelector("#child").addEventListener("click",()=> {console.log("child clicked")},false); 

================================================================================================================================================================================
Event Delegation:

1. Event delegation makes use of one of the Event Propagation techniques called Event Bubbling
2. if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
3. In the handler we get event.target to see where the event actually happened and handle it.
4. Less memory usage, better performance.
5. Less time required to set up event handlers on the page.
6. Event delegation is a pattern to handle events efficiently in JavaScript. The main idea is to reduce the number of event handlers on a webpage and thus 
   improving the performance of the website.
7. When there are multiple DOM elements present, instead of adding event handlers on each one of them, you can just add one event handler 
   (on the parent/common ancestor element) which can do the exact same work which all those multiple event handlers were supposed to do.

Example:

html-
Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>
<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { 
      event.target.value++;
      console.log(event.target.value)
    }
  });
</script>
================================================================================================================================================================================
Polyfill:

1. With the help of polyfill can write own implementation of BIND function.
2. Polyfills is a way to use modern features (usually JS) on browsers where it is currently unsupported.  We do this by mimicking the functionality using supported methods 
along with our own logic.
3. A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

Polyfill: Sometimes array push, pop or filter methods and some window's functions like window.localstorage and window.sessionstorage these functions are not supported
by browser, so in this case we can provide our own fallback support or own code that it replace the native functions

Example for bind:
With Bind-
let name ={
  first: "Priya",
  last: "Bagde"
}
let printName = function(){
  console.log(this.first+this.last)
}
let printNameFinal= printName.bind(name)
printNameFinal()

Without Bind-
let name ={ first: "Priya", last: "Bagde"}
let printName = function(town, state){ console.log(this.first+" "+this.last+" "+town+" "+state)}
Function.prototype.mybind= function(...args){ //printName arguments
  let obj = this; //printName
  params = args.slice(1)
  return function(...args2){ //printNameFinal arguments
   obj.apply(args[0], [...params, ...args2])
  }
}
-> mybind is added to Function.prototype, so it's available on all functions.
-> It takes any number of arguments using the rest parameter (...args).
-> obj refers to the function (printName in this case) to which mybind is applied.
-> params holds the arguments passed after the first one (which is expected to be the context object).
-> It returns a new function (printNameFinal) that, when called, will invoke the 
   original function (printName) with the specified context (args[0]), followed by concatenated parameters (params and args2).
	
let printNameFinal= printName.mybind(name, "chhindwara")
printNameFinal("MadyaPradesh")

printName.mybind(name, "chhindwara") creates a new function printNameFinal
that binds name as this context and sets "chhindwara" as the first parameter (town) when printNameFinal is called.

printNameFinal("Madhya Pradesh") then calls printName with this set to name, "chhindwara" as town, and "Madhya Pradesh" as state.
================================================================================================================================================================================
Promises:-

👉Why do you need a promise?
✌🏼Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

👉What are the three states of promise ?
✌🏼Promises have three states: 
	pending: initial state, neither fulfilled nor rejected.
	fulfilled: meaning that the operation completed successfully.
	rejected: meaning that the operation failed. In this case an error value will be thrown.
	settled: operation has fulfilled either fulfilled nor rejected.

👉What is promise chaining ?
✌🏼The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

👉What is promise.all ?
✌🏼Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,
Promise.all([Promise1, Promise2, Promise3])
.then(result) => { console.log(result) })
.catch(error => console.log(`Error in promises ${error}`))

👉What are the pros and cons of promises over callbacks ?
✌🏼Pros:
It avoids callback hell which is unreadable
Easy to write sequential asynchronous code with .then()
Easy to write parallel asynchronous code with Promise.all()
Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)
Cons:
It makes little complex code
You need to load a polyfill if ES6 is not supported

👉How to cancel a fetch request ?
✌🏼One shortcoming of native promises is no direct way to cancel a fetch request. But the new AbortController from js specification allows you to use a signal to abort one or multiple fetch calls. 
================================================================================================================================================================================
👉What are default parameters?
✌🏼In E5, we need to depend on logical OR operators to handle default values of function parameters.
Whereas in ES6, Default parameters allow you to assign default values to function parameters.
If a parameter is not provided when the function is called, it will use the default value.

Let's compare the behavior with an examples,
//ES5
var calculateArea = function(height, width) {
   height =  height || 50;
   width = width || 60;
   return width * height;
}
console.log(calculateArea()); //300
//ES6
var calculateArea = function(height = 50, width = 60) {
   return width * height;
}
console.log(calculateArea()); //300

✌🏼After default parameters you should not have parameters without default value-
function printValue(a=1, b) {
    console.log("a = " + a + " and b = " + b);
}
printValue();    // Logs: a = 1 and b = undefined
printValue(7);    // Logs: a = 7 and b = undefined
printValue(7, 3);    // Logs: a = 7 and b = 3

✌🏼Default values for parameters and calling it without arguments-
function add(a=10, b=20)
{
	return a+b;
}
console.log(" Sum is : " + add());   // No argument //30
console.log(" Sum is : " + add(1));   // with one argument //21
console.log(" Sum is : " + add(5,6));   // with both argument  //11

✌🏼JavaScript Default Parameters with null or empty Argument-
function test(a = 1)
{
    console.log(typeof a);
    console.log("Value of a: " + a);
}
test();    // number, Value of a: 1
test(undefined);    // number, Value of a: 1
test('');    // string, Value of a: 
test(null);    // object, Value of a: null

✌🏼Default Parameters are evaluated at Call time-
function append(value, array = []) {
    array.push(value)
    return array
}
append(1)  // [1]
append(2)  // [2], not [1, 2]
================================================================================================================================================================================
JWT Token:
1. JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
2. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a public/private key pair using RSA.
================================================================================================================================================================================
Rest operator:
1. The rest operator is used in function parameters to collect multiple arguments into a single array.
2. It's especially useful when you want to work with a variable number of arguments.
Syntax: It is denoted by three dots (...) followed by a parameter name that will hold the rest of the arguments.

uses:
Collecting Function Arguments:
	function calculateTotal(...items) {
	  return items.reduce((total, item) => total + item, 0);
	}
	const total = calculateTotal(10, 20, 30);

Destructuring:
	const [first, ...rest] = [1, 2, 3, 4, 5];
	// first is 1, rest is [2, 3, 4, 5]

Function Parameters with Variable Arity:
	function multiply(multiplier, ...numbers) {
	  return numbers.map((number) => multiplier * number);
	}
	const result = multiply(2, 3, 4, 5); // [6, 8, 10]

Rest Parameter in Array : 
	function addSum(a,b,c, ...rest){ // ...rest indicating combination of those arguments which are left(rest).
	  console.log(...rest) //6,7
	  console.log(rest) //[6,7]
	  console.log(arguments) //ES5 //{"0":2, "1":3, "2":4, "3":6, "4":7}
	  return a+b+c+rest[0]+rest[1];
	}
	console.log(addSum(2,3,4,6,7)) //22

Rest Parameter in object: 
	var student ={
	  name: "priya",
	  age : 100,
	  hobbies : ["cooking", "dancing"]
	}
	
	//const {age, ...rest} = student; //using destructuring
	//console.log(age, rest) //100 {"name": "priya", "hobbies":["cooking", "dancing"]}

	const {...rest} = student;
	console.log(rest) //{"name": "priya", "age": 100, "hobbies":["cooking", "dancing"]}
======================================================================================================================================================================
	
Spread Operator: 
1. The spread operator allows you to expand an iterable (like an array or a string) into individual elements.
2. It's used for various tasks, such as creating shallow copies of arrays, merging arrays, and passing multiple arguments to functions.
Syntax: It is denoted by three dots (...) followed by the iterable you want to spread.

uses:
Copying Arrays and Objects:
	const originalArray = [1, 2, 3];
	const copyArray = [...originalArray];

Concatenating Arrays:
	const array1 = [1, 2];
	const array2 = [3, 4];
	const combinedArray = [...array1, ...array2];

Passing Function Arguments:
	function add(a, b, c) {
	  return a + b + c;
	}
	const numbers = [1, 2, 3];
	const sum = add(...numbers);


Spread Operator  in Array:
	function getNames(name1, name2, name3){
	  console.log(name1,name2, name3);
	}
	var names =["priya", "riya", "supriya"]
	getNames(...names) //spread operator here used to spread the individual arguments 

spread operator in object: (Change the value of age)
	var student ={
	  name: "priya",
	  age : 100,
	  hobbies : ["cooking", "dancing"]
	}
	
	var newStudent ={
	  ...student, //coping one object to another object
	  age : 101
	}
	console.log(newStudent)
====================================================================================================================================================================

Default Parameter:
1.Default parameters allow you to assign default values to function parameters. 
2. If a parameter is not provided when the function is called, it will use the default value.

Syntax: Default parameters are assigned within the function's parameter list using the assignment operator (=).

	function greet(name = "Guest") {
	  return `Hello, ${name}!`;
	}
	const greeting = greet(); // "Hello, Guest!"

====================================================================================================================================================================
In summary:

Spread operator spreads elements of an iterable.
Rest operator collects multiple function arguments into an array.
Default parameter assigns a default value to a function parameter if no value is provided when calling the function.

====================================================================================================================================================================
What is the Temporal Dead Zone 

The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.
In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.
The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone. 

Let's see this behavior with an example, 

function somemethod() { 
  console.log(counter1); // undefined 
  console.log(counter2); // ReferenceError 
  var counter1 = 1; 
  let counter2 = 2; 
} 
====================================================================================================================================================================

What is an IIFE (Immediately Invoked Function Expression) 
IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as it is defined.
It is often used to create a new scope to avoid polluting the global scope and to encapsulate variables.
IIFE syntax involves wrapping a function expression in parentheses and immediately invoking it.

(function () { 
  // logic here 
})(); 

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
i.e, If you try to access variables from the IIFE then it throws an error as below, 

(function () { 
  var message = "IIFE"; 
  console.log(message); 
})(); 
console.log(message); //Error: message is not defined 

However, IIFE can be used to create closures when it captures variables from its surrounding scope.
In the previous example with the loop and setTimeout,, the IIFE is used to create a closure by capturing the current value of the loop variable.
====================================================================================================================================================================
What is the purpose of the array slice method 

1. The slice() method returns the selected elements in an array as a new array object.
2. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element.
3. If you omit the second argument then it selects till the end. 
4. Slice method won't mutate the original array but it returns the subset as a new array.

Some of the examples of this method are, 

let arrayIntegers = [1, 2, 3, 4, 5]; 
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2] 
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3] 
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5] 
 
====================================================================================================================================================================

What is the purpose of the array splice method 
1. The splice() method is used either adds/removes items to/from an array, and then returns the removed item.
2. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted.
3. Then from the Third argument is added to the array. 
4. Splice method modifies the original array and returns the deleted array. 

Some of the examples of this method are, 

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5]; 
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5]; 
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5]; 
 
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5] 
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3] 
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5] 

====================================================================================================================================================================

What is the difference between slice and splice

	Slice							Splice
Doesn't modify the original array(immutable)	Modifies the original array(mutable)
Returns the subset of original array		Returns the deleted elements as array
Used to pick the elements from array		Used to insert or delete elements to/from array

====================================================================================================================================================================

What is JSON and its common operations
JSON stands for JavaScript Object Notation
It is a text-based format
It is useful when you want to transmit data across a network and
it is basically just a text file with an extension of .json.

JSON ARRAY : 
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]

Accessing json data:

let data = {
   "name": "John Doe",
   "age": 25,
   "location": "New York"
   "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
   }
};

console.log(data.name); // Output: John Doe
console.log(data['name']); // Output: John Doe
--------------------------
console.log(data.address.street); // Output: 123 Main St
console.log(data['address']['city']); // Output: New York

Modifying JSON DATA:

data.name = "Jane Doe"; // Modify the name property
console.log(data); // Output: {"name": "Jane Doe", "age": 25, "location": "New York"}
----------------------------
data['name'] = "Bob Smith"; // Modify the name property
console.log(data); // Output: {"name": "Bob Smith", "age": 25, "location": "New York"}

REMOVING JSON DATA

delete data.age; // Remove the age property
console.log(data); // Output: {"name": "John Doe", "location": "New York", "email": "john.doe@example.com", "phone": "555-1234"}

====================================================================================================================================================================

Parsing: 
 The JSON.parse() method is used to parse a JSON string into a JavaScript object.
 The method takes a string as its parameter and returns a JavaScript object.

let jsonString = '{"name": "John Doe", "age": 25, "location": "New York"}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: {"name": "John Doe", "age": 25, "location": "New York"}

====================================================================================================================================================================

Stringification:
 The JSON.stringify() method is used to convert a JavaScript object into a JSON string.
 The method takes an object as its parameter and returns a JSON string.

let data = {
   "name": "John Doe",
   "age": 25,
   "location": "New York"
};

let jsonString = JSON.stringify(data);
console.log(jsonString); // Output: {"name":"John Doe","age":25,"location":"New York"}

====================================================================================================================================================================

Handling Errors: 
When using the JSON.parse() method, it is important to handle errors that may occur during the parsing process.
If the JSON string is not properly formatted, the JSON.parse() method will throw an error. To handle errors, you can use a try-catch block.

let jsonString = '{"name": "John Doe, "age": 25, "location": "New York"}'; // Missing a closing quote for the "name" value

try {
  let jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);
} catch (error) {
  console.log("Error parsing JSON string:", error);
}

====================================================================================================================================================================
Deep Copy:
Deep copy: means that all levels of the object are copied. This is a true copy of the object.
	or
Deep copy creates a completely independent copy of an object or array, including all nested objects and arrays. ensuring that changes in the copy do not affect the original.
To achieve a deep copy, we can use libraries like Lodash's cloneDeep or  we can achieve by using JSON.parse() + JSON.stringify():


import _ from 'lodash'; // Import Lodash

const originalObject ={ data: [1, 2, 3] };

const deepCopyObject = _.cloneDeep(originalObject); // Create a deep copy
deepCopyObject.data.push(4); // Modify the deep copy
console.log('Original Object:', originalObject);
console.log('Deep Copy Object:', deepCopyObject);

In this example, modifying the deepCopyObject won't affect the originalObject or its nested arrays, as it's a deep copy.

--------------------------------------------------------
const person = {
  name: "John",
  address: { city: "New York" },
};

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.name = "Jane";
deepCopy.address.city = "Los Angeles";

console.log(person); // { name: "John", address: { city: "New York" } }

In this example, the deep copy remains entirely separate from the original object, so changes in the copy do not affect the original object.
====================================================================================================================================================================
	
Shallow Copy:
Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
	or
Shallow copy creates a new object or array, but the nested objects and arrays are still references to the original ones.
Modifying the original will affect the copy and vice versa.
A shallow copy can be achieved using the spread operator (…) or using Object.assign():


const person = {
  name: "John",
  address: { city: "New York" },
};

const shallowCopy = { ...person };
shallowCopy.name = "Jane";
shallowCopy.address.city = "Los Angeles";

console.log(person); // { name: "John", address: { city: "Los Angeles" } }
------------------------------------------------------------------------------
	
const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = 'Version 2';
shallowCopy2.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

In this example, both the original person and the shallowCopy share the same address object, so changing the city in one affects the other.
====================================================================================================================================================================

shallow copies are a lot faster than deep copies.
If the depth of your object is equal to one, use a shallow copy.
If the depth of your object is bigger than one, use a deep copy.

====================================================================================================================================================================
map:
Use map when we want to create a new array by transforming each element of an existing array.
Use map() when we need to return a new array.

forEach loop
Use forEach when we want to iterate over elements and perform some action without creating a new array.
Use forEach() when we want to change the original array

for loop
use for loop for iterating over a range of values, including arrays. and it requires manual handling for array transformations.
Use for loop when we need more control over the iteration or when working with non-array iterations.
	Involves three parts: initialization, condition, and increment/decrement.
	Requires explicit indexing and manual array traversal.
	eg: you want to iterate every three elements (i + 3)

find:
find is used to locate the first element in an array that satisfies a given condition.
find is designed for finding a single item,
It returns the first matching element or undefined if no match is found.
Return Type: Element from the array or undefined.

filter:
filter is used to create a new array containing all elements that satisfies a specific condition.
filter is designed for collecting multiple items that meet a specified condition.
It retains elements that satisfy the provided condition and discards the rest.
Return Type: Array containing elements meeting the condition.

reduce:
reduce is used to accumulate values of an array into a single result by applying a function to each element in a sequential manner.
It takes an accumulator and iterates through the array, updating the accumulator with each element.
Return Type: Single value, often the result of the accumulation.

In summary, map and filter both return new arrays, find returns an element or undefined,and reduce returns a single value.
These functions serve different purposes in manipulating and processing data in programming.

====================================================================================================================================================================
Currying :
Currying breaks a function with multiple arguments into a series of unary (single-argument) functions.
Each curried function takes one argument and returns a new function that can be called with the next argument.
This process continues until all the original arguments have been provided, at which point the final function returns the result.
Currying is used to create more reusable and flexible functions, especially in functional programming and when dealing with partial application.

	// Currying example
	function add(a) {
	  return function (b) {
	    return a + b;
	  };
	}
	
	const add5 = add(5);
	const result = add5(3); // Result is 8

Infinite Currying:
Infinite currying is an extension of currying that allows a function to accept an indefinite number of arguments.
A curried function can keep accepting and returning new functions indefinitely.
This enables the function to be used with any number of arguments, making it highly adaptable.
Infinite currying can be useful for creating generic, versatile functions in functional programming.

	// Infinite Currying example
	function infiniteCurry(x) {
	  return function(y){
	    if(y){
	      return sum(x+y);
	    }
	    return x;
	  }
	}
	
	console.log(infiniteCurry(5)(3)(2)(1)(4)());  //15

====================================================================================================================================================================
HOC:
Higher-order components (HOCs) are functions that take a component as input and return an enhanced version of that component.
HOCs allow you to add additional functionalities or modify the behavior of components.
They enable code reuse and abstraction by separating common logic from the component itself.
HOCs are typically used for tasks like authentication, logging, handling data fetching,, or providing context to components.

withDataFetch.js
import React, { useState, useEffect } from "react";

function withDataFetch(WrappedComponent, url) {
  return function (props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}

export default withDataFetch;
---------------------------------------------------------
postComponent.js

import React from "react";
import withDataFetch from "./DataFetch";

const PostComponent = ({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export const PostComponentWithData = withDataFetch(PostComponent, "https://jsonplaceholder.typicode.com/posts");
----------------------------------------------------------------------------
App.js
import { PostComponentWithData } from "./PostComponentData";

const App = () => {
  return (
    <div className="App">
      <PostComponentWithData />
    </div>
  );
};
export default App;


====================================================================================================================================================================
Higher-Order Functions:
Higher-order functions are functions that can take other functions as arguments or return functions as their results.
In JavaScript,we use higher-order functions to create more generic and reusable code by passing functions as parameters
or returning functions from other functions.

// A higher-order function that takes a function as an argument and applies it to each element of an array
function mapArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

// A function to square a number
function square(x) {
  return x * x;
}

// Using the higher-order function with the square function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = mapArray(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

====================================================================================================================================================================
Prototype inheritance:
Prototype inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects.
Each object has an internal link to another object called its prototype.
If a property or method is not found in an object, JavaScript looks for it in the object's prototype chain until it reaches the top-level Object.prototype.

// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the Animal constructor
Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
  // Call the parent constructor with the current instance as the context
  Animal.call(this, name);
  this.breed = breed;
}

// Set up prototype chain to inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog to the Dog prototype
Dog.prototype.bark = function() {
  console.log("Woof! Woof!");
};

// Create instances of Animal and Dog
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Golden Retriever");

// Test the methods
animal.sayHello();  // Output: Hello, I'm Generic Animal!
dog.sayHello();     // Output: Hello, I'm Buddy!
dog.bark();         // Output: Woof! Woof!

====================================================================================================================================================================
Null: Null represents the intentional absence of any object value. It is a special value that indicates the absence of an object or a non-existent value.
	
	// Assigning null to a variable
	let nullVariable = null;
	
	// Checking if the variable is null
	if (nullVariable === null) {
	  console.log("The variable is null.");
	} else {
	  console.log("The variable is not null.");
	}

	
Undefined: Undefined is a primitive value that is automatically assigned to variables that have been declared but not assigned a value.
It also represents the value returned by functions that do not explicitly return anything.
	
	// Declaring a variable without assigning a value
	let undefinedVariable;
	
	// Checking if the variable is undefined
	if (typeof undefinedVariable === "undefined") {
	  console.log("The variable is undefined.");
	} else {
	  console.log("The variable is defined.");
	}

====================================================================================================================================================================
falsy values in JavaScript
Falsy values are values that are considered false when encountered in a Boolean context. The falsy values in JavaScript are:
	false
	0
	empty string ('')
	null
	undefined
	NaN (Not-a-Number)

====================================================================================================================================================================
Object.seal is a method that seals an object, preventing new properties from being added and making existing properties non-configurable.
However, the values of the existing properties can still be changed.

	const sealedObject = {
	  prop1: 42,
	  prop2: "Hello"
	};
	
	Object.seal(sealedObject);
	
	// Attempting to add a new property
	sealedObject.newProp = "This will not work"; // Ignored in strict mode, TypeError in non-strict mode
	
	// Modifying an existing property
	sealedObject.prop1 = 99;
	
	// Deleting an existing property
	delete sealedObject.prop2; // Ignored in strict mode, TypeError in non-strict mode
	
	console.log(sealedObject); 
	// Output: { prop1: 99, prop2: "Hello" }


====================================================================================================================================================================
Object.freeze is a method that freezes an object, making it read-only and preventing any changes to its properties or their values.
It also makes existing properties non-configurable.
	
	const frozenObject = {
	  prop1: 42,
	  prop2: "Hello"
	};
	
	Object.freeze(frozenObject);
	
	// Attempting to add a new property
	frozenObject.newProp = "This will not work"; // Ignored in strict mode, TypeError in non-strict mode
	
	// Modifying an existing property
	frozenObject.prop1 = 99; // Ignored in strict mode, TypeError in non-strict mode
	
	// Deleting an existing property
	delete frozenObject.prop2; // Ignored in strict mode, TypeError in non-strict mode
	
	console.log(frozenObject); 
	// Output: { prop1: 42, prop2: "Hello" }

====================================================================================================================================================================
Map is a collection of key-value pairs where each key and value can be of any type.
It allows duplicate keys and provides an iterable interface to access, iterate, and modify the elements.

	// Creating a Map
	const myMap = new Map();
	
	// Adding key-value pairs to the Map
	myMap.set("name", "John");
	myMap.set("age", 30);
	myMap.set("isStudent", false);
	
	// Getting values from the Map
	console.log(myMap.get("name")); // Output: John
	console.log(myMap.get("age"));  // Output: 30
	
	// Checking if a key exists in the Map
	console.log(myMap.has("isStudent")); // Output: true
	
	// Deleting a key-value pair from the Map
	myMap.delete("age");
	
	// Iterating over key-value pairs in the Map
	for (const [key, value] of myMap) {
	  console.log(`${key}: ${value}`);
	}
	// Output:
	// name: John
	// isStudent: false

Set is a collection of unique values of any type.
It does not allow duplicate values and provides an iterable interface to access, iterate, and modify the elements.

	// Creating a Set
	const mySet = new Set();
	
	// Adding values to the Set
	mySet.add(10);
	mySet.add("apple");
	mySet.add(true);
	mySet.add(10); // Duplicate entry, ignored
	
	// Checking if a value exists in the Set
	console.log(mySet.has("apple")); // Output: true
	
	// Deleting a value from the Set
	mySet.delete(true);
	
	// Checking the size of the Set
	console.log(mySet.size); // Output: 2
	
	// Iterating over values in the Set
	mySet.forEach(value => {
	  console.log(value);
	});
	// Output:
	// 10
	// apple

====================================================================================================================================================================
WeakMap is a collection of key-value pairs where the keys must be objects and the values can be any type.
Unlike Map, WeakMap allows garbage collection of its keys if there are no other references to them, making it useful in scenarios where memory management is a concern.
	
WeakSet is a collection of unique objects. It also allows garbage collection of its objects if there are no other references to them.

====================================================================================================================================================================
Cookies:
Cookies are small pieces of data stored in the browser. 
They are commonly used for maintaining user sessions, storing user preferences, and tracking user behavior on websites.

	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cookie Example</title>
	</head>
	<body>
	
	<script>
	  // Function to set a cookie
	  function setCookie(name, value, days) {
	    const expires = new Date();
	    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
	  }
	
	  // Function to get a cookie value by name
	  function getCookie(name) {
	    const cookies = document.cookie.split(';');
	    for (const cookie of cookies) {
	      const [cookieName, cookieValue] = cookie.split('=');
	      if (cookieName.trim() === name) {
	        return cookieValue;
	      }
	    }
	    return null;
	  }
	
	  // Function to delete a cookie by name
	  function deleteCookie(name) {
	    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
	  }
	
	  // Example usage
	  setCookie('username', 'john_doe', 7);
	
	  const storedUsername = getCookie('username');
	  console.log('Stored Username:', storedUsername);
	
	  // Uncomment the line below to delete the 'username' cookie
	  // deleteCookie('username');
	</script>
	
	</body>
	</html>


====================================================================================================================================================================
Generator function:
A generator function is a special type of function that can be paused and resumed, allowing for the generation of a sequence of values over time.
It is defined using the function* syntax and uses the yield keyword to yield values.
Generator functions are useful when dealing with asynchronous operations, iteration, and lazy evaluation.


	function* countGenerator() {
	  let count = 0;
	
	  while (true) {
	    yield count++;
	  }
	}
	
	// Creating an instance of the generator
	const counter = countGenerator();
	
	// Using the generator to get the next values
	console.log(counter.next().value); // 0
	console.log(counter.next().value); // 1
	console.log(counter.next().value); // 2
	// ... and so on

In this example, the countGenerator function is a generator function denoted by the function* syntax.
Inside the function, there's an infinite loop (while (true)) that increments the count variable and yields its value using the yield keyword.
When you call counter.next(), the generator function is executed until it encounters a yield statement,
at which point it pauses and returns the value. The next time you call counter.next(),
the function resumes execution from where it was paused until the next yield statement or until it reaches the end of the function.

Generators are often used in combination with the for...of loop to iterate over a sequence of values produced by the generator.

====================================================================================================================================================================
Modules:
Modules are a way to organize and encapsulate JavaScript code. They allow you to split your code into separate files,
with each file being a module that exports certain values or functions.
Modules can import and use values from other modules, promoting modularity, reusability, and maintainability.

	// math.js
	export function add(a, b) {
	    return a + b;
	}
	
	// app.js
	import { add } from './math.js';
	console.log(add(3, 4)); // Output: 7

====================================================================================================================================================================
Exports:
Named Exports:
You can export specific functions, variables, or objects using the export keyword followed by the names you want to export.

	// module.js
	export const myVar = 42;
	export function myFunction() {
	  // function implementation
	}

Importing named exports is done using the import keyword followed by the name in curly braces.
	// anotherModule.js
	import { myVar, myFunction } from './module';

---------------------------------------------------------
Default Exports:
You can export a single "default" value from a module using the export default syntax.
	// module.js
	const myVar = 42;
	export default myVar;


Importing the default export is done without curly braces.
	// anotherModule.js
	import myVar from './module';

--------------------------------------------------------------
Combining Named and Default Exports:
You can also combine named and default exports in a single module.
	// module.js
	const myVar = 42;
	export { myVar as default, myVar };

Importing both named and default exports is done in a similar way.
	// anotherModule.js
	import myVar, { myVar as namedVar } from './module';

--------------------------------------------------------------------
You can use dynamic imports to load modules asynchronously.
	
	// dynamicImport.js
	const myModule = await import('./module');

====================================================================================================================================================================
Memoization:
Memoization is a technique used in programming to optimize functions by caching the results of expensive function calls
and returning the cached result when the same inputs occur again. This can be particularly useful for recursive or computationally expensive functions.
Here's a simple example of memoization in JavaScript:

	// Function to memoize the result of a function
	function memoize(func) {
	  const cache = {};
	  return function (...args) {
	    const key = JSON.stringify(args);
	    if (cache[key]) {
	      return cache[key];
	    } else {
	      const result = func(...args);
	      cache[key] = result;
	      return result;
	    }
	  };
	}
	
	// Original Fibonacci function
	function fibonacci(n) {
	  if (n <= 1) {
	    return n;
	  } else {
	    return fibonacci(n - 1) + fibonacci(n - 2);
	  }
	}
	
	// Memoized Fibonacci function
	const memoizedFibonacci = memoize(fibonacci);
	
	console.log(memoizedFibonacci(5)); // Output: 5
	console.log(memoizedFibonacci(10)); // Output: 55
	console.log(memoizedFibonacci(15)); // Output: 610


====================================================================================================================================================================
MutationObserver:
	A MutationObserver in JavaScript is an interface that provides a way to asynchronously observe changes to the DOM (Document Object Model) and react to those changes.
It allows developers to register a callback function that is notified when specific types of mutations,
such as the addition or removal of elements or changes to attributes,occur within a specified target element or its descendants.
This provides a powerful mechanism for building dynamic and responsive web applications by enabling developers to respond to changes in the structure or content of the document.

// Target element to observe
const targetElement = document.getElementById('target');

// Callback function to handle mutations
const mutationCallback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed!');
    } else if (mutation.type === 'attributes') {
      console.log('Attributes of the observed element have changed!');
    }
  }
};

// Options for the observer (optional)
const observerOptions = {
  childList: true, // Watch for changes in child elements
  attributes: true, // Watch for changes in attributes
  subtree: true, // Watch for changes in the subtree (descendants)
  // other options can be added as needed
};

// Create a new instance of MutationObserver with the callback function
const observer = new MutationObserver(mutationCallback);

// Start observing the target element with the specified options
observer.observe(targetElement, observerOptions);

// Later, you can disconnect the observer when you no longer need it
// observer.disconnect();

====================================================================================================================================================================



















	====================================================================================================================================================================
