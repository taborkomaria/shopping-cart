import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.counter.value,
    };
    render() {
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.fomatCount()}</span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    +
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );       
    }

    handleIncrement = () => {
        this.setState({count : this.state.count +1});
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    fomatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

 
export default Counter;