import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE } from "./favoriteConstants";

const initialState = {
    favorites: []
}

export function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            let productInFavorite = false;
            const updatedFavorites = state.favorites.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavorite = true;
                } 
            })

            if (!productInFavorite) {
                return Object.assign({}, state, {
                    favorites: [
                        ...state.favorites,
                        {
                            ...action.payload.product,
                        }
                    ]
                })
            } 
        case REMOVE_FROM_FAVORITE:
            const filteredProducts = state.favorites.filter(product => {
                return product.id !== action.payload.product.id
            });

            return Object.assign({}, state, {
                favorites: filteredProducts
            });
        default:
            return state;
    }
}

