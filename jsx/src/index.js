// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click me!';
}


// Create a react component
const App = () => {
    const buttonText = 'Click me!';

    return (
        <div>
            <label htmlFor="name" className="label">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white', border: '1px solid red' }}>Submit</button>
            <button style={{ backgroundColor: 'blue', color: 'white', border: '1px solid red' }}>{buttonText}</button>
            <button style={{ backgroundColor: 'blue', color: 'white', border: '1px solid red' }}>{getButtonText()}</button>
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

