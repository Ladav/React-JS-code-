import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

class layout extends Component {
    render() {
        return (
            <Aux>
                <div>sidebar navigation bropdown</div>
                <main className={classes.main__content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default layout;