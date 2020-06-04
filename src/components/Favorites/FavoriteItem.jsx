import React from 'react';
import './FavoriteItem.css';
import { connect } from 'react-redux';
import {removeFromFavorite} from '../../redux/favorite/favoriteActions';

function FavoriteItem(props) {
    const {name, price, currency, image, id} = props;

    return(
        <div className="container-fluid container-min-max-width">
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            
            {/* <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button> */}
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>
            <button
                className="btn btn-outline-secondary"
                onClick={() => props.removeFromFavorite({
                    product: {
                        id
                    }
                })}
            >
                Sterge din Favorite
            </button>
        </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorite: (product)=>dispatch(removeFromFavorite(product))
    };
}

export default connect(null, mapDispatchToProps)(FavoriteItem);