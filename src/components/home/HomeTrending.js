import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./HomeTrending.css"

function HomeTrending({ img, title, price, pos_rating, neg_rating, a, btn, id }) {
    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            items: {
                img: img,
                title: title,
                price: price,
                pos_rating: pos_rating,
                neg_rating: neg_rating,
                btn: btn,
                id: id
            }

        })

    }
    return (
        <div className='homeTrending mx-2 mb-4'>
            <img className={a && 'im'} src={img} alt="" />
            <div className='rating'>
                {pos_rating && Array(pos_rating).fill().map((_) => <span>&#9733;</span>)}
                {neg_rating > 0 && Array(neg_rating).fill().map((_) => <span>&#9734;</span>)}
            </div>
            <p>{title}</p>
            <span>{price && `$${price}`}</span>
            <div className='wrapper-btn'>
                <button onClick={addToBasket} className='btn btn-outline-success text-uppercase' type="">{btn}</button>
            </div>

        </div>
    )
}

export default HomeTrending


