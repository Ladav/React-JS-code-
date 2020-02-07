import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    };

    UNSAFE_componentWillMount() {
        this.setState({loading: true});
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                
                for(let uniqueOrder in res.data) {
                   fetchedOrders.push({...res.data[uniqueOrder], id: uniqueOrder});
                }
                this.setState({ orders: fetchedOrders ,loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error);
            });
    };

    render() {
        let orders = null;
        if(this.state.orders) {
            orders = this.state.orders.map(order => 
                <Order key={order.id} ingredients={order.ingredients} price={order.price} />
            );
        }

        if (this.state.loading) {
            orders = <Spinner />
        }

        return (
            <div>
                {orders}
            </div>
        );
    };
}

export default withErrorHandler(Orders, axios);