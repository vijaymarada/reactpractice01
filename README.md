## Important points to run all examples

    If you are trying examples other than react redux (i.e. from 1-17 folders)
    Please uncomment below changes in index.js and comment Redux provider lines 

    ```
      // <React.StrictMode>    //uncomment this while not using redux
      //   <App />
      // </React.StrictMode>,

        <Provider store={store}>
            <App />
        </Provider>,
        
    ```    

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Mutation   
    Mutable - changes
    Immutable- Doesn't change 

### Pure	
    1. Pure Functions  
   		○ Should have parameters
		○ Should return result
		○ Should not have side effects

        -->  Object.Assign() Used  to achieve pure
             … spread operator to create a new object     
    2. Push fn changes the original array -- not a pure functions   instead use concat fn.
    3. Create new app npx create-react-app test
    4. Function component : We return the body
    5. Class component : We return in side the render  (Class app extends React.Component)
    6. Arrow functions doesn't need to bind
    ```
        class Counter extends React.Component {
            constructor(props) {
                super(props)
                this.state = { counter: 0 }
                this.onIncrement = this.onIncrement.bind(this)
                //this.onDecrement = this.onDecrement.bind(this)
            }
            onIncrement() {
                this.setState({ counter: this.state.counter + 2 })    //Binding is required Line:8
            }
            onDecrement = () => this.setState({ counter: this.state.counter - 2 })  // Binding is not required

            render() {
                return (
                    <div className="App">
                        <p>Counter:  {this.state.counter}</p>
                        <CounterFn counter= {this.state.counter} /><br />
                        <button onClick={this.onIncrement}>Increment</button><br />
                        <button onClick={this.onDecrement}>Decrement</button>
                    </div>
                );
            }
        }
        export default Counter;
    ```
    7. Axios uses to make web service calls
	8. Pure functions 
		○ Should have parameters
		○ Should return result
		○ Should not have side effects
    9. Formik lib to design forms 

### Hooks
	1. Before 16.8.0
        State base Component use Class
        Static base use functional

	2. After 16.8.0
	    React functional components for both Stateful and stateless

        Class - State  setState
        Function - hooks useState
        
        Hooks only for functions 

        Aim of the HOOKS is to statisfy/Support all the state functionalities there in component into functions
### UseEffect
    Fires at the time of page load   === componentDidMount
    Can do conditionally also
    
### Redux
    1. State Management framework
    2. Independent framework (can use in jquery, Angualr...)
    3. Redux can be used for both class and functional components 

        ○ User Interface (HTML, JQuery, React)
        ○ Action
        ○ Middleware (Fetching and transform)(optional)
        ○ Reducer (State management) (pure function) 
        ○ Store (reducer + middleware) 

            UI(action) ---> Action {type:''} ---> Middleware(one or more) --> Reducer(state manager) --> UI
                                          (fetching & transform)  
    Advantages:
        ○ Clean code 
        ○ Reusability
        
        npm install redux
        npm install react-redux (plug-in for integration React and Redux)

### Redux-Saga
    

    