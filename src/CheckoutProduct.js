import React from 'react'
import './CheckoutProduct.css'
import StarRateIcon from '@material-ui/icons/StarRate'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(rating).fill().map(() => <p><StarRateIcon /></p>)}
                </p>
                {!hideButton &&
                    <button
                        className="checkoutProduct__button"
                        onClick={removeFromBasket}
                    >Remove from Basket</button>}

            </div>

        </div>
    )
}

export default CheckoutProduct
