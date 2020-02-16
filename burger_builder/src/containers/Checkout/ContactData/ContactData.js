import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import classes from './ContactData.css';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Forms/Input/Input';
import * as orderAction from '../../../store/action/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validations: {
                    isRequired: true
                },
                valid: false,
                touched: false,
                type: 'Name'
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validations: {
                    isRequired: true
                },
                valid: false,
                touched: false,
                type: 'Street Name'
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: '',
                validations: {
                    isRequired: true
                },
                valid: false,
                touched: false,
                type: 'Country Name'
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validations: {
                    isRequired: true,
                    maxLength: 6,
                    minLength: 6
                },
                valid: false,
                touched: false,
                type: 'zipcode'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validations: {
                    isRequired: true
                },
                valid: false,
                touched: false,
                type: 'Email'
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    option: [
                        { value: 'fastest', displayValue: 'fastest' },
                        { value: 'slowest', displayValue: 'slowest' }
                    ]
                },
                validations: {},
                value: 'fastest',
                valid: true
            }
        },
        isFormValid: false
    };

    validateElement = (value, rules) => {
        let isValid = true;
        if(rules) {
            if (rules.isRequired) isValid = value.trim() !== '';
            if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid === true;
            if (rules.minLength) isValid = value.length >= rules.minLength && isValid === true;
        }

        return isValid;
    };

    orderHandler = (event) => {
        event.preventDefault();

        const orderFormElements = {};
        for (let elementName in this.state.orderForm) {
            orderFormElements[elementName] = this.state.orderForm[elementName].value; // {name: 'itsvalue'}
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderFormElements
        };

        this.props.onPurchaseOrder(order);
    }

    inputChangedHandler = (event, elementName) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedForm[elementName]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validateElement(updatedFormElement.value, updatedFormElement.validations);
        updatedFormElement.touched = true;
        updatedForm[elementName] = updatedFormElement;

        let isFormValid = true;
        for(let elementName in updatedForm) {
            isFormValid = updatedForm[elementName].valid && isFormValid;
        }
        console.log(isFormValid)
        this.setState({ orderForm: updatedForm, isFormValid: isFormValid });
    }

    render() {
        let formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(el => {
                    return (
                        <Input
                            key={el.id}
                            elementType={el.config.elementType}
                            elementConfig={el.config.elementConfig}
                            value={el.config.value}
                            invalid={!el.config.valid}
                            requireValidations={el.config.validations}
                            touched={el.config.touched}
                            type={el.config.type}
                            changed={(event) => this.inputChangedHandler(event, el.id)} />);
                })}
                <Button btnType="Success" disabled={!this.state.isFormValid}>ORDER NOW</Button>
            </form>);
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter Your Contact Data...</h3>
                {form}
            </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPurchaseOrder: (orderData) => dispatch(orderAction.purchaseOrder({orderData}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));