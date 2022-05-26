import React from 'react';
import quesFiveCode from '../../../images/Blogs/blog-ques5-code.png'

const Blogs = () => {

    return (
        <div>
            <h2 className='mt-5 mb-10 text-3xl text-secondary font-bold text-center uppercase'>Blogs</h2>

            <div className=' flex justify-center'>
                <div className='border grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-48 gap-10 mt-8 lg:p-40 p-8'>


                    {/* ---------- QUESTION - 1  */}

                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                            <ul className="menu bg-base-100 p-2 rounded-box">
                                <li>
                                    <span className='text-base'> 1 - Keeping component state local where necessary</span>
                                </li>
                                <li>
                                    <span className='text-base'>2 - Code-splitting in React using dynamic import()</span>
                                </li>
                                <li>
                                    <span className='text-base'>3 - Virtualize a Large List Using react-window</span>
                                </li>
                                <li>
                                    <span className='text-base'>4 -                     Use React.Suspense and React.Lazy for Lazy Loading Components
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* ---------- QUESTION - 2  */}

                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title">Different ways to manage a state in a React application?</h2>
                            <ul className="menu bg-base-100 p-2 rounded-box">
                                <li>
                                    <span className='text-base'> 1 - Data state</span>
                                </li>
                                <li>
                                    <span className='text-base'>2 - Control state</span>
                                </li>
                                <li>
                                    <span className='text-base'>3 - Session state</span>
                                </li>
                                <li>
                                    <span className='text-base'>4 - Location state
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* ---------- QUESTION - 3  */}

                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title">How does prototypical inheritance work?</h2>
                            <p className='w-auto'>Prototypal Inheritance is a Javascript feature that allows you to add methods and attributes to objects. It is a technique that allows one object to inherit the attributes and methods of another. Object. getPrototypeOf and Object. setPrototypeOf have traditionally been used to get and set the [[Prototype]] of an object.</p>

                        </div>
                    </div>




                    {/* ---------- QUESTION - 4  */}


                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title"> What is a unit test? Why should write unit tests?</h2>
                            <p className='w-auto'>Unit Testing is a method where JavaScript test code is written for a web page or web application module. For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand.</p>

                        </div>
                    </div>



                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                            <p className='my-2 text-xl underline underline-offset-2  font-semibold'>Code</p>
                            <img className='w-96' src={quesFiveCode} alt="" />

                        </div>
                    </div>



                    <div className="card bg-base-100 shadow-xl" style={{ width: '600px' }}>
                        <div className="card-body">
                            <h2 className="card-title">Why you do not set the state directly in React?</h2>
                            <p className='w-auto'>When you set the state directly and call setState() with an empty object. The previous state will be polluted with your mutation. Due to which, the shallow compare and merge of two states will be disturbed or won't happen, because you'll have only one state now.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;