import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../UI/Modal/Modal';

const withErrorHandling = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, (error) => {
                this.setState({error: error});
            });
        };

        componentWillUnmount() {
            axios.interceptors.response.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        };
    };
};

export default withErrorHandling;