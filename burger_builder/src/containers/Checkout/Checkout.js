import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 1,
            meat: 1,
            salad: 1
        },
        totalPrice: 0
    };

    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let [key, value] of query.entries()) {
            // [key, value] -> ['cheese', '0']
            if (key === 'totalPrice') price = +value; // if + is used before still it turn's it into number
            else ingredients[key] = +value;
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        // redirect to previous page(burger builder page)
        this.props.history.goBack();

    };

    checkoutContinuedHandler = () => {
        console.log(this.props)
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props} />} />
            </div>
        );
    };
}

export default Checkout;