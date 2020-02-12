import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionType from '../../store/actions';

const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.7,
    meat: 1.8,
    salad: 0.4
};

class BurgerBuilder extends Component {
    // construtor(props) {
    //     super(props);
    //     this.state = {};
    // }

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    // componentDidMount = () => {
    //     axios.get('/ingredients.json')
    //         .then(res => {
    //             this.setState({ ingredients: res.data });
    //         })
    //         .catch(error => {
    //             this.setState({ error: true });
    //         });
    // };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((acc, el) => {
                return acc + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    };

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;

    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;

    //     const oldTotalPrice = this.state.totalPrice;
    //     const updatedTotalPrice = oldTotalPrice + INGREDIENT_PRICES[type];

    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: updatedTotalPrice
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // };

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount > 0) {
    //         const updatedCount = oldCount - 1;

    //         const updatedIngredients = {
    //             ...this.state.ingredients
    //         };
    //         updatedIngredients[type] = updatedCount;

    //         const oldTotalPrice = this.state.totalPrice;
    //         const updatedTotalPrice = oldTotalPrice - INGREDIENT_PRICES[type];

    //         this.setState({
    //             ingredients: updatedIngredients,
    //             totalPrice: updatedTotalPrice
    //         });
    //         this.updatePurchaseState(updatedIngredients);
    //     }
    // };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        const ingredientsQuery = [];
        for (let key in this.props.ingredients) {
            ingredientsQuery.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.props.ingredients[key]));
        }

        ingredientsQuery.push('totalPrice=' + this.props.totalPrice);
        const queryString = ingredientsQuery.join('&');

        // routing to checkout page
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };
        // {salad: true, bacon: false ... }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.props.totalPrice}
                        ingredientAdded={this.props.addIngredient}
                        ingredientRemoved={this.props.removeIngredient}
                        ordered={this.purchaseHandler} />
                </Aux>);

            orderSummary = <OrderSummary
                price={this.props.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                ingredients={this.props.ingredients} />;
        };

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: (ingName) => dispatch({type: actionType.ADD_INGREDIENT, ingredientName: ingName}),
        removeIngredient: (ingName) => dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));