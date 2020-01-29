import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar';

import classes from './Layout.css';

class layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <main className={classes.main__content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default layout;