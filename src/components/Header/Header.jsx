import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/userActions';
import { ReactComponent as Favorite} from '../../assets/icons/favorite.svg';

function Header(props) {
    return (
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Pets World Shop" className="logo" />
                </Link>
                <div>
                    <Link to="/favorites" className="my-5">
                        <button className="btn btn-outline-light">
                        <p className="ml-1 mb-0">{props.numberOfProducts}</p>
                        </button>
                    </Link>
                </div>
                <div>
                    {props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        {props.user
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex  ml-3 mr-3">
                            <Link to="/favorites" className="d-flex h5 mb-0">
                                {/* <button className="ml-3 mr-3 rounded"> */}
                                    Favorite 
                                <Favorite className="ml-1" width="20px" heigth="20px"/>
                                {/* </button> */}
                                {/* <button>Favorite</button> */}
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2" />
                                <p className="ml-1 mb-0">{props.numberOfProducts}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);