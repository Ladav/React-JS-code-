import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreater from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCtr} />
                <CounterControl label="Decrement" clicked={this.props.decreaseCtr}  />
                <CounterControl label="Add 5" clicked={this.props.addToCtr}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractFromCtr}  />
                <hr /> {/**horizontal line*/}
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Save Counter</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCtr: () => dispatch(actionCreater.increment()),
        decreaseCtr: () => dispatch(actionCreater.decrement()),
        addToCtr: () => dispatch(actionCreater.add({value: 5})),
        subtractFromCtr: () => dispatch(actionCreater.subtract({value: 5})),
        onStoreResult: (result) => dispatch(actionCreater.storeResult({result})),
        onDeleteResult: (id) => dispatch(actionCreater.deleteResult({id}))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);   //connect(mapStateToProps, mapActionToProps)