import React from 'react';
import './card.css';


const BLACK = '#000000'
const LIGHT_GRAY = '#00000060'

interface cardProps {
    cardID: number;
    text: string;
    state: boolean; // true = completed, false = not completed
    deleteTask: (id: cardProps['cardID']) => void
    changeState: (id: cardProps['cardID']) => void
    editTask: (id: cardProps['cardID']) => void
}

export const Card: React.FC<cardProps> = ({ cardID, text, state, deleteTask, changeState, editTask }) => {
    return (
        <div className='card' key={cardID} onClick={() => changeState(cardID)}>
            <div style={{ textDecoration: state ? 'line-through' : 'none', color: state ? LIGHT_GRAY : BLACK, transition: '300ms' }}>{text}</div>
            <div className='buttonsBox'>
                <button onClick={(e) => { e.stopPropagation(); editTask(cardID) }} className="material-symbols-outlined" style={{color: state ? LIGHT_GRAY : BLACK, transition: '300ms'}} >edit</button>
                <button onClick={(e) => { e.stopPropagation(); deleteTask(cardID) }} className="material-symbols-outlined" style={{color: state ? LIGHT_GRAY : BLACK, transition: '300ms'}}>delete_forever</button>
            </div>
        </div>
    );
}