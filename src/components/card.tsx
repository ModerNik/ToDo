import React from 'react';
import './card.css';

const BLACK = '#000000'
const LIGHT_GRAY = '#858A7E'

interface cardProps {
    cardID: number;
    text: string;
    state: boolean; // true = completed, false = not completed
    deleteTask: (id: cardProps['cardID']) => void
    changeState: (id: cardProps['cardID']) => void
}

export const Card: React.FC<cardProps> = ({ cardID, text, state, deleteTask, changeState}) => {
    return (
        <div className='card' key={cardID} onClick={() => changeState(cardID)}>
            <div style={{textDecoration : state ? 'line-through' : 'none', color : state ? LIGHT_GRAY : BLACK}}>{text}</div>
            <button onClick={(e) => {e.stopPropagation(); deleteTask(cardID)}} className='deleteButton'/>
        </div>
    );
}