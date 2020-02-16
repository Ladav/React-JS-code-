import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        // redirect to previous page(burger builder page)
        console.log('[Checkout.js checkoutCancelledHandler', this.props);
        this.props.history.goBack();

    };

    checkoutContinuedHandler = () => {
        console.log('[Checkout.js checkoutContinueHandler', this.props);
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        let summary = <Redirect to='/' />;
        if (this.props.ingredients) {
            summary = (
                <div>
                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.props.ingredients} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    };
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    };
};

export default connect(mapStateToProps)(Checkout);