ReactJS Works on __________ architecture. // MVC  
ReactJS is used for __________ applications.  // single page
Who created (developed) ReactJS?  //Facebook
What is React Native used for?  // Android App Development and ios App Development
What does “V” stand for in MVC?  // View
Which layer of an application does ReactJS handle? //View Layer
By default ReactJS runs on localhost:______.  // 3000
What is the name of the default html file in ReactJS?  // index
Default command to host a ReactJS app to the localhost is: // npm start
Default component provided by ReactJS is:  // APP
____ holds the packages and libraries to make the development process easier. // node_modules
______ file is used for the development of PWAs or Progressive Web Applications. // manifest.json
Which prop is used to create reference of a element? // ref
What is used to uniquely identify an element? // key and ref
What are hooks? //functions
In ReactJS, which one of the following is used to pass data to a component from outside? // props
Props are __________ into other components. // Methods
.............. helps react for keeping their data unidirectional.  // Flux
Arbitrary inputs of components are called ............  // props
Which one of the following is the smallest building block of ReactJS?  // components
Which hook can we use to manage state within our function components? // useState
Can we use async/await with the useEffect hook? //No
We can return a Promise from useEffect.  //No
Which hook should we use if we are dealing with complex state within a function component?  // useReducer
_____ is a way which adds multiple elements to a React Component without wrapping them in an extra DOM node. //   <React.Fragment> </React.Fragment>  and <>  </>
What is the default local host port that a React development server uses?  // 5000

-------------------------------------------------------------------------------------
Everything in React is a _____________  // Component
In which directory React Components are saved?  // inside js/components
What is Babel?  //  Both Compiler and Transpilar
How many elements does a react component return? // Multiple Elements
What does the "webpack" command do? //A module bundler
What is ReactJS?  //A Library for building interaction interfaces
What are the limitations of ReactJS?
  React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development
  React is using inline templating and JSX. This can seem awkward to some developers
  The library of react is too large
How can you access the state of a component from inside of a member function? // this.values
Props are __________ into other components  // Methods
.Which of the following API is a MUST for every ReactJS component?   // renderComponent
What port is the default where the webpack-dev-server will run?  //8080
In React what is used to pass data to a component from outside?  // props
What is a react.js in MVC?  // Controller
ReactJS uses _____ to increase performance  // Virtual DOM
Keys are given to a list of elements in react. These keys should be - // Unique among the siblings only
Which of the following is the correct data flow sequence of flux concept?  //  Action->Dispatcher->Store->View
What is the name of React.js Developer ?  //Jordan Walke
Who Develop React.js? //Facebook
.............. helps react for keeping their data unidirectional  //Flux
At the highest level, React components have lifecycle events that fall into  //Initialization, State/Property Updates, Destruction
If you want to import just the Component from the React library, what syntax do you use?  //   import { Component } from 'react'
If a function component should always render the same way given the same props, what is a simple performance optimization available for it?  //Wrap it in the React.memo higher-order component.
How do you fix the syntax error that results from running this code?
  const  person = (fName, lName) =>
  {
    first:fName,
    last: lName
  }
  console.log(person("john", "wilson"));   ///Wrap the object in parentheses.
// const  person = (fName, lName) =>  ({
    first: fName,
    last: lName
  })


If you see the following import in a file, what is being used for state management in the component?  //React Hooks
How do you access a function fetch() from a h1 element in JSX?  //  <h1>{fetch()}</h1> 
Which method in a React Component should you override to stop the component from updating?  //shouldComponentUpdate
What happens when you call setState() inside render() method?  //Stack overflow error  
Explanation : Call to setState() invokes render(). Calling it inside render is suicidal. It gets into an infinite loop
React is a ______  //Javascript library
ReactJS covers _____  //  User Interface layer in an application
Number of elements, a valid react component can return   //1
props in react can________  // Not be changed in the component
What is the testing library most often associated with React?  // Jest
What is state in react?   // Internal storage of the component
What will happen if you render an input element with disabled = {false}  //It will be rendered as enabled
To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?
  const topics = ['cooking', 'art', 'history'];  //const [first] = ["cooking", "art", "history"] 
How do you handle passing through the component tree without having to pass props down manually at every level?  //React Context
What should the console read when the following code is run?
  const [, , animal] = ['Horse', 'Mouse', 'Cat'];
  console.log(animal);  //Cat
What is the name of the tool used to take JSX and turn it into createElement calls?  // Babel
React Lifecycle method static getDerivedSateFromProps(props , state) is called when ____  // Component is created for the first time
Keys are given to a list of elements in react. These keys should be   //Unique among the siblings only
For uncontrolled components in react  //Source of truth is DOM
Why might you use useReducer over useState in a React component?  //when you want to replace Redux
Which props from the props object is available to the component with the following syntax?  // any that have changed, any that have not changed, child props
Consider the following code from React Router. What do you call :id in the path prop?  //This is a route parameter
What property do you need to add to the Suspense component in order to display a spinner or loading state?  //fallback
What are two ways data gets handled in react?  ///state and props
What can you use to handle code splitting?  //React.lazy
When do you use useLayoutEffect?  // when you need the browser to paint before the effect runs
You have written the following code but nothing is rendering. How do you fix this problem?
  const Heading = () => {  //Change the curly braces to parentheses or add a return statement before the h1 tag.
    <h1>Hello!</h1>;
  };
Which of these terms commonly describe React applications?  // declarative
What is the children prop?  //  a property that lets you pass components as data to other components
Why is it important to avoid copying the values of props into a component's state where possible?  // because you want to allow a component to update in response to changes in the props 
When might you use React.PureComponent?  //when you want a default implementation of shouldComponentUpdate()
What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?  //
What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?
  A. <button onClick="{this.handleClick}>Click Me</button>"
  B. <button onClick="{event => this.handleClick(event)}}>Click Me</button>"  //  Button B will not fire the handler this.handleClick successfully.
What do you call a React component that catches JavaScript errors anywhere in the child component tree?  //error boundaries
In which lifecycle method do you make requests for data in a class component?  //componentDidMount
All React components must act like __ with respect to their props.  //pure functions
Why might you use a ref? //to directly access the DOM node 
What package contains the render() function that renders a React element tree to the DOM?  // ReactDom
What is sent to an Array.map() function?  //  a callback function that is called once for each element in the array
Why is it a good idea to pass a function to setState instead of an object?  //setState is asynchronous and might result in out of sync values.
How do you set a default value for an uncontrolled form field?  //Use the defaultValue property















