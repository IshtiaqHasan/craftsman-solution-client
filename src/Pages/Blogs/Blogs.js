import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2 className='text-3xl font-bold text-center'>Questions & Answers</h2>
            <h4 className='text-2xl'>Question-1: How will you improve the performance of a React Application?</h4>

            <ul className='list-disc text-xl m-5' >Answer:
                <li> By setting component state local where necessary.</li>
                <li> React components needs to be memoizing to prevent unnecessary re-renders.</li>
                <li>By using dynamic import Code-splitting in React.</li>
                <li>Virtualization of Windowing or list in React.</li>
                <li> By creating a functional component that will collect all props and redistribute them to other components</li>
            </ul>

        </div>
    );
};

export default Blogs;