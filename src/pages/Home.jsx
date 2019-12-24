import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../components/HomeCategory';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }

    render() {
        // Nu mai avem nevoie de signOut pasat ca prop!
        const {user, handleSignOut} = this.props;

        return(
            <Layout
                user={user}
                handleSignOut={handleSignOut}
            >
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                route={category}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                            />
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;