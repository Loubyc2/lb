import React from 'react';
import "./HomeTrending.css"

function HomeTrending({ img, title, price, pos_rating, neg_rating, a }) {
    return (
        <div className='homeTrending mx-2 mb-4'>
            <img className={a && 'im'} src={img} alt="" />
            <div className='rating'>
                {pos_rating && Array(pos_rating).fill().map((_) => <span>&#9733;</span>)}
                {neg_rating > 0 && Array(neg_rating).fill().map((_) => <span>&#9734;</span>)}
            </div>
            <p>{title}</p>
            <span>{price && `$${price}`}</span>
        </div>
    )
}

export default HomeTrending


