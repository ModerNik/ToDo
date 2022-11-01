import React from 'react';
import './App.css';
import {Card} from './components/card';

function App() {
    return (
        <div>
            <h1>ModerNik's ToDo</h1>
            <div className='bodyBox'>
                <div>
                    <input className='inputTask' type="text" placeholder="Add a new task" />
                    <button className='confirmButton'>ADD</button>
                </div>
                <Card id='1' text='123' state={false}></Card>
            </div>
        </div>
    );
}

export default App;
