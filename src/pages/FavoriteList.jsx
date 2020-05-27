import React from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';

function FavoriteList(props) {
    const { favorites } = props;

    return (
        <Layout>
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
                    :<div className="d-flex flex-column align-items-center">
                    <p className="h3 text-center"> Nu ai produse favorite! </p>
                    <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
            }

        </div>
        </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorite.favorites
    };
}
export default connect(mapStateToProps)(FavoriteList);