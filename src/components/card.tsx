import React from 'react';
import { isConditionalExpression } from 'typescript';
import './card.css';

interface cardProps {
    cardID: number;
    text: string;
    state: boolean; // true = completed, false = not completed
}

export const Card: React.FC<cardProps> = ({ cardID, text, state }) => {
    return (
        <div className='card' key={cardID}>
            <div className='textBox'>
                {text}
                <button className='stateButton' background-color={state ? 'green' : 'white'} />
            </div>
        </div>
    );
}