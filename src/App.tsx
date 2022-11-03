import React from 'react';
import './App.css';
import {Card} from './components/card';

let cardsCounter = 0;

function App() {
    const addTask = () => {

    }

    return (
        <div>
            <h1>ModerNik's ToDo</h1>
            <div className='bodyBox'>
                <div className='inputBox'>
                    <input className='inputTask' type="text" placeholder="Add a new task" />
                    <button className='confirmButton'>ADD</button>
                </div>
                <Card cardID={cardsCounter} text='123' state={false}></Card>
                <Card cardID={cardsCounter} text='123' state={false}></Card>
            </div>
        </div>
    );
}

export default App;
