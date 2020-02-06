import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

// props- ingredients, totalPrice
class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 1,
            meat: 1,
            salad: 1
        }
    };

    render() {
        return(
            <CheckoutSummary ingredients={this.state.ingredients} />
        );
    };
}

export default Checkout;