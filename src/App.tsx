import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card';

let cardsCounter = 0;

export type cardProps = {
    cardID: number;
    text: string;
    state: boolean;
}

function App() {
    const [cards, setCards] = useState<cardProps[]>([]);
    const [inputText, setText] = useState('');

    useEffect(() => {
        const cardsParser = JSON.parse(localStorage.getItem('cards') || '[]');
        cardsCounter = JSON.parse(localStorage.getItem('cardsCounter') || '0');
        console.log('cardsCounter', cardsCounter);
        console.log(cardsParser);
        if (cardsParser) {
            cardsParser.map((card: cardProps) => {
                setCards((cards) => [...cards, card]);
                console.log(card);
            })
        }
        console.log(cards, 'cards');
    }, []);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
        localStorage.setItem('cardsCounter', JSON.stringify(cardsCounter));
    }, [cards]);

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputText) {
            setText('');
            setCards([...cards, { cardID: ++cardsCounter, text: inputText, state: false }]);
        }
    }

    const deleteTask = (id: cardProps['cardID']) => {
        setCards(cards.filter((card) => card.cardID !== id));
    }

    const editTask = (id: cardProps['cardID']) => {
        setCards(
            cards.map((card) => {
                if (card.cardID === id) {
                    card.text = prompt('Edit task', card.text) || card.text;
                }
                return card;
            })
        );
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

    const clearAll = () => {
        setCards([]);
        cardsCounter = 0;
    }

    return (
        <div className='mainBox'>
            <h2 className='appName'>ModerNik's ToDo</h2>
            <div className='bodyBox'>
                <form onSubmit={addTask} className='inputBox'>
                    <input className='inputTask' type="text" placeholder="Add a new task"
                        value={inputText} onChange={e => { setText(e.target.value); }} />
                    <button type='submit' className='confirmButton'>ADD</button>
                </form>
                <div>
                    {cards.map((card) => (
                        <Card key={card.cardID} cardID={card.cardID} text={card.text} state={card.state} deleteTask={deleteTask} changeState={changeState} editTask={editTask}/>
                    ))}
                </div>
            </div>
            <button onClick={clearAll} style={{color: 'red', backgroundColor: '#303030', marginTop: '10px'}} className="material-symbols-outlined">delete_forever</button>
        </div>
    );
}

export default App;
