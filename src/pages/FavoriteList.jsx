import React from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { connect } from 'react-redux';

function FavoriteList(props) {
    const { favorites } = props;

    return (
        <div className="container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center">
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-row align-items-center justify-content-center ">
            {
                favorites.length
                    ? favorites.map((product) => {
                        return <div>
                            <FavoriteItem
                                {...product}
                                key={product.id}
                            />
                        </div>
                        })
                    :<p className="ml-5 text-info"> No items added in favorite list! </p>
            }
        </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorite.favorites
    };
}
export default connect(mapStateToProps)(FavoriteList);