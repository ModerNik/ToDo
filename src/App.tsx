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

    const [cards, setCards] = useState<cardProps[]>([]);
    const [inputText, setText] = useState('');

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputText) {
            setText('');
            setCards([
                ...cards,
                {
                    cardID: cardsCounter++,
                    text: inputText,
                    state: false
                }
            ])
        }
    }

    const deleteTask = (id: cardProps['cardID']) => {
        setCards(cards.filter((card) => card.cardID !== id));
    }

    const changeState = (id: cardProps['cardID']) => {
        setCards(
            cards.map((card) => {
                if (card.cardID === id) {
                    return { ...card, state: !card.state };
                }
                return card;
            })
        );
    }

    return (
        <div className='mainBox'>
            <h1 className='appName'>ModerNik's ToDo</h1>
            <div className='bodyBox'>
                <form onSubmit={addTask} className='inputBox'>
                    <input className='inputTask' type="text" placeholder="Add a new task"
                        value={inputText} onChange={e => { setText(e.target.value); }} />
                    <button type='submit' className='confirmButton'>ADD</button>
                </form>
                <div>
                    {cards.map((card) => (
                        <Card key={card.cardID} cardID={card.cardID} text={card.text} state={card.state} deleteTask={deleteTask} changeState={changeState} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
