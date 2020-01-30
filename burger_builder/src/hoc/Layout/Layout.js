import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class layout extends Component {
    state = {
        showSideDrawer: false
    };

    showSideDrawerHandler = () => {
        this.setState({showSideDrawer: true});
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.closeSideDrawerHandler} />
                <main className={classes.main__content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};

export default layout;