import { useState } from 'react';
import './App.css';
import { Card } from './components/card';

let cardsCounter = 1;

export type cardProps = {
    cardID: number;
    text: string;
    state: boolean;
}

function App() {

    const [cards, setCards] = useState<cardProps[]>(
        [
            {
                cardID: 0,
                text: 'This is a card 1',
                state: false
            },
        ]);

    const addTask = () => {
        cards.push({
            cardID: cardsCounter++,
            text: 'This is a card ' + cardsCounter,
            state: false
        });
        console.log(cards);
    }
    const [text, setText] = useState('');

    return (
        <div>
            <h1>ModerNik's ToDo</h1>
            <div className='bodyBox'>
                <div className='inputBox'>
                    <input className='inputTask' type="text" placeholder="Add a new task"
                        value={text} onChange={e => {
                            setText(e.target.value)
                            console.log(text);
                        }} />
                    <button onClick={addTask} className='confirmButton'>ADD</button>
                </div>
                <div>
                    {cards.map((card) => (
                        <Card key={card.cardID} cardID={card.cardID} text={card.text} state={card.state} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
