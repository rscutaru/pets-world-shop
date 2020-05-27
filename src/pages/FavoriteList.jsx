import React from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { connect } from 'react-redux';

function FavoriteList(props) {
    const { favorites } = props;

    return (
        <div className="row my-4">
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
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorite.favorites
    };
}
export default connect(mapStateToProps)(FavoriteList);