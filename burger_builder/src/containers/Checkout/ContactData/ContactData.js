import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../../axios-orders';

import classes from './ContactData.css';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState((prevState, prevProps) => {
            return { loading: !prevState.loading };
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                username: "ladav",
                address: "\\0o0/",
                zipCode: "160016",
                country: "hindustan"
            },
            email: "test@test.com",
            delivery: "fastest"
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

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="zipcode" placeholder="zipcode" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER NOW</Button>
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