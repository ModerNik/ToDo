import React from 'react';
import './App.css';
import {Card} from './components/card';

let cardsCounter = 0;

function App() {
    return (
        <div>
            <h1>ModerNik's ToDo</h1>
            <div className='bodyBox'>
                <div className='inputBox'>
                    <input className='inputTask' type="text" placeholder="Add a new task" />
                    <button className='confirmButton'>ADD</button>
                </div>
                <Card id={cardsCounter} text='123' state={false}></Card>
                <Card id='2' text='123' state={false}></Card>
            </div>
        </div>
    );
}

export default App;
