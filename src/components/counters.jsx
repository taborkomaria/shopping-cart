import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 1},
            { id: 4, value: 0}
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    render() {
        return (
            <React.Fragment>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset all counters
                </button>
                {this.state.counters.map( counter => (
                    <Counter 
                        key = {counter.id} 
                        onIncrement = {this.handleIncrement}
                        onDecrement = {this.handleDecrement}
                        onDelete = {this.handleDelete} 
                        counter = {counter}
                    />
                ))}
            </React.Fragment>
        );       
    }
}


 
export default Counters;