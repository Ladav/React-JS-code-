import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../UI/Spinner/Spinner';
import * as orderActionCreator from '../../store/action/index';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();     
    };

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => 
                <Order key={order.id} ingredients={order.ingredients} price={order.price} />
            );
        }

        return (
            <div>
                {orders}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(orderActionCreator.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));