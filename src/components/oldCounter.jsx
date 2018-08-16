import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/>
                <h1 className={this.getBadgeClasses()}>{this.fomatCount()}</h1>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <ul>
                    {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
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

/*function Counter() {
    return (
        <React.Fragment>
            <h1>Hello World</h1>
            <button>Increment</button>
        </React.Fragment>
    )
}*/
 
export default Counter;