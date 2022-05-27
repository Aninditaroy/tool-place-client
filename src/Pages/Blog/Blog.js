import React from 'react';
import divider from '../../Assets/separator.png';
const Blog = () => {
    return (
        <div>
            <section class="text-gray-700">
                <div class="container px-5 py-16 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Blog Questions Answer
                        </h1>
                        <img src={divider} alt="" className='mb-10 w-40 mx-auto' />
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="w-full lg:w-1/2 px-4 py-2">
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How will you improve the performance of a React Application?
                                </summary>

                                <span>
                                    Improve the performance of react application to optimize the performance of a React application, including pre-optimization techniques. These include:
                                    <li>Keeping component state local where necessary</li>
                                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                                    <li>Code-splitting in React using dynamic import()</li>
                                    <li>Windowing or list virtualization in React</li>
                                    <li>Lazy loading images in React</li>
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    What are the different ways to manage a state in a React application?
                                </summary>

                                <span>
                                    The state is an object that holds information about a certain component.There are four main types of state you need to properly manage in your React apps:
                                    <li>Local State</li>
                                    <li>Global State</li>
                                    <li>Server State</li>
                                    <li>URL State</li>
                                    We may need to pass props through many component levels. This is known as "prop drilling".
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    How does prototypical inheritance work?
                                </summary>

                                <span>
                                    JavaScript is a prototype-based, Object Oriented programming language.Prototypical inheritance refers to the ability to access object properties from another object.Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
                                    Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.
                                </span>
                            </details>
                        </div>
                        <div class="w-full lg:w-1/2 px-4 py-2">
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Why you do not set the state directly in React?
                                </summary>

                                <span>
                                    When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.And it will lose control of the state across all components.The ui of a component renders based on the state.If i set value directly to products and call the setProducts,it cant rerender the ui,if we set value in setProducts it can rerender ui and result changed can show on ui.
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    What is a unit test? Why should write unit tests?
                                </summary>

                                <span>
                                    In unit test individual units or components of the software are tested. A unit might be an individual function, method, procedure, module, or object. A unit test isolates a section of code and verifies its correctness, in order to validate that each unit of the software's code performs as expected.By using unit test it ensures dependability, security, and high performance, which leads to time-saving, customer satisfaction, and cost-effectiveness.Unit test perform by using jest .Unit tests help to find and fix bugs quickly and easily,it contribute to higher code quality.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;