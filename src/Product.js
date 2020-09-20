import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() =>
                        <p><StarRateIcon /></p>
                    )}
                </div>
            </div>
            <img className="product__image"
                src={image} alt="" />

            <button
                className="product__button"
                onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
