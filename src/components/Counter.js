import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            username: ""
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ count: 0 });
    }

    addByOne = (e) => {
        e.preventDefault();
        this.setState({ count: this.state.count + 1 });
    }

    subByOne = (e) => {
        e.preventDefault();
        this.setState({ count: this.state.count - 1 });
    }

    handleUsername = (e) => {
        e.preventDefault();
        this.setState({ username: e.target.value })
    }

    handleFirst = (e) => {
        e.preventDefault();
        this.setState({ first: e.target.value });
    }

    handleLast = (e) => {
        e.preventDefault();
        this.setState({ last: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>{this.state.username}</h2>
                <input onChange={this.handleUsername} placeholder={"Type here..."}/>

                <Count count={this.state.count}/>

                <Button handleClick={this.handleClick} text="Reset"/>
                <Button handleClick={this.addByOne} text="Add" />
                <Button handleClick={this.subByOne} text="Sub" />
            </div>
        );
    }
}

const Count = (props) => {
    return (
        <h1>{props.count}</h1>
    );
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    );
}

export default Counter;