import React from 'react';
import { isConditionalExpression } from 'typescript';
import './card.css';

interface CardProps {
    cardID: number;
    text: string;
    state: boolean; // true = completed, false = not completed
}

export function Card({ cardID, text, state }: CardProps) {
    return (
        <div className='card' key={cardID}>
            <div className='textBox'>
                {text}
                <button className='stateButton' background-color={state ? 'green' : 'white'} />
            </div>
        </div>
    );
}