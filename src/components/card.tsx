import React from 'react';
import './card.css';

interface CardProps {
    id: string;
    text: string;
    state: boolean; // true = completed, false = not completed
}

export function Card({ id, text, state }: CardProps) {
    return (
        <div className='card' id={id}>
            <div className='textBox'>
                {text}
                <button className='stateButton' background-color={state ? 'green' : 'white'} />
            </div>
        </div>
    );
}