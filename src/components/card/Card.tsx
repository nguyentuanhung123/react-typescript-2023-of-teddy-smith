import React from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
};

const Card = ({companyName, ticker, price}: Props) => {
    return (
        <div className='card'>
            <img src='https://source.unsplash.com/80x80?face' alt='Image'/>
            <div className='details'>
                <h2>{companyName} {ticker}</h2>
                <p>${price}</p>
            </div>
            <p className='infon'>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
        </div>
    )
}

export default Card
