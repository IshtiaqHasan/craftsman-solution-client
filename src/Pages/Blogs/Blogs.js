import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2 className='text-3xl font-bold text-center m-5'>Questions & Answers</h2>
            <h4 className='text-2xl font-bold'>Question-1: How will you improve the performance of a React Application?</h4>
            <ul className='list-disc text-xl m-3' >Answer:
                <li> By setting component state local where necessary.</li>
                <li> React components needs to be memoizing to prevent unnecessary re-renders.</li>
                <li>By using dynamic import Code-splitting in React.</li>
                <li>Virtualization of Windowing or list in React.</li>
                <li> By creating a functional component that will collect all props and redistribute them to other components</li>
            </ul>
            <h4 className='text-2xl font-bold'>Question-2: What are the different ways to manage a state in a React application?</h4>
            <ul className='list-disc text-xl m-3' >Answer: There are four main types of state in React apps to manage properly :
                <li> Local state –  we manage Local state data in one or another component.</li>
                <li> Global state – Global state is data we manage across multiple components.</li>
                <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                <li>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
            </ul>
            <h4 className='text-2xl font-bold'>Question-3: How does prototypical inheritance work?</h4>
            <ul className='list-disc text-xl m-3' >Answer:
                <li>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</li>
                <li>Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</li>
            </ul>
            <h4 className='text-2xl font-bold'>Question-4: Why you do not set the state directly in React?</h4>
            <ul className='list-disc text-xl m-3' >Answer:
                <li>The control of the state across all components will loose.</li>
                <li> When the state directly updated, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                <li>If state directly updated, calling the setState() afterward may just replace the update you made.</li>
            </ul>
            <h4 className='text-2xl font-bold'>Question-5:What is a unit test? Why should write unit tests?</h4>
            <ul className='list-disc text-xl m-3' >Answer:
                <li>JavaScript Unit Testing is the process by which JavaScript test code is written on a web page or web application module. It is then integrated with HTML as an in-line event host and used in the browser to check if all functions are working as required. These unit tests are then organized into a test suite.</li>
                <li>unit test allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage. And also Unit tests contribute to higher code quality, contribute to better application architecture & act as documentation.</li>

            </ul>
        </div>
    );
};

export default Blogs;