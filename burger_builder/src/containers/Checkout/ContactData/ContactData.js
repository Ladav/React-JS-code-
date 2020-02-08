import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from '../../../axios-orders';

import classes from './ContactData.css';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Forms/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },
            zipCode:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    option: [
                        {value: 'fastest', displayValue: 'fastest'},
                        {value: 'slowest', displayValue: 'slowest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState((prevState, prevProps) => {
            return { loading: !prevState.loading };
        });

        const orderFormElements = {};
        for(let elementName in this.state.orderForm) {
            orderFormElements[elementName] = this.state.orderForm[elementName].value; // {name: 'itsvalue'}
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderFormElements
        };

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false });
            });
    }

    inputChangedHandler = (event, elementName) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedForm[elementName]
        }
        updatedFormElement.value = event.target.value;
        updatedForm[elementName] = updatedFormElement;
        this.setState({orderForm: updatedForm});
    }

    render() {
        let formElementsArray = [];
        for(let key in this.state.orderForm) {
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
                changed={(event) => this.inputChangedHandler(event, el.id)} />);
            })}
            <Button btnType="Success" >ORDER NOW</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter Your Contact Data...</h3>
                {form}
            </div>)
    };
}

export default ContactData;