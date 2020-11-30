import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="+ Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="- Decrement" clicked={this.props.onDecramentCounter}  />
                <CounterControl label="+ Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="- Subtract 15" clicked={this.props.onSubtractCounter}  />
                <CounterControl label="* Multi 2" clicked={this.props.onMultiResult} />
                <hr />
                <button className="btn-primary" onClick={() => this.props.onStoreResult(this.props.ctr)}>
                    Store Results
                </button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        <li className="list" key={strResults.id}>
                            {strResults.value}
                            <button className="delete" onClick={() => this.props.onDeleteResult(strResults.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return   {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecramentCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            value: 10,
        }),
        onSubtractCounter: () => dispatch({
            type: actionTypes.SUBTRACT,
            value: 15
        }),
        onStoreResult: (result) => dispatch({
            type: actionTypes.STORE_RESULTS,
            result: result
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULTS,
            resultId: id
        }),
        onMultiResult: () => dispatch({
            type: actionTypes.MULTI,
            value: 2
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);