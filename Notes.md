//JSX (JS XML) ---> It allows us to write HTML in react. It makes it easier to write and add HTML in react.It will be compiled into js code by babel tool.
-------------
Rules for JSX  --->
1.<div> , <closing tags> , 
---------------------
//Expression in JSX
With JSX you can write expressions inside curly braces.The expression can be a React variable, or property , or any other valid JS expression JSX will execute the expression and return the result. {}
------------------------
Lists : 
In react, you will render lists with some type of loop. The JS map() array method is generally the preferres method.

Props : The arguments passed into react components via HTML attributes.
Props as children : passing an html tag inside a component and using it as props in the child component.
--------------------

//Conditional Rendering : 
It works the same way conditions work in JS. USe JS operators like {if} or the conditional operator to creaete elements representing the current state and let react update the UI to macth them.
--------------------

//State : --
It is a built in react object that is used to contain data or information about the component. A components state can change over time , whenever it changes the component re-renders.
-----------------------
//Hooks :
They let you use state and other react features without writing a class.
----------------
UseSate :
It is a hook allows us to tract state in a fn component.state generally refers to data or properties that need to be tracking in an application.
-----------------

UseMemo : useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    Syntax : useMemo(calculateValue, dependencies)
Call useMemo at the top level of your component to cache a calculation between re-renders:
Parameters 
calculateValue: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.

dependencies: The list of all reactive values referenced inside of the calculateValue code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison.

Returns 
On the initial render, useMemo returns the result of calling calculateValue with no arguments.

During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.


