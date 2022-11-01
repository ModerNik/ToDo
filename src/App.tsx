import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1>ModerNik's ToDo</h1>
            <div>
                <input className='inputTask' type="text" placeholder="Add a new task" />
                <button className='confirmButton'>ADD</button>
            </div>
        </div>
    );
}

export default App;
