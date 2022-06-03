import React, {Component} from 'react';
import SimpleStorage from 'react-simple-storage';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            username: "mflores98",
            first: "first",
            last: "last"
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
                <SimpleStorage parent={this}/>
                <h2>{this.state.username}</h2>
                <input onChange={this.handleUsername} placeholder={this.state.username}/>

                <Name name={this.state.count}/>
                <Button handleClick={this.handleClick} text="reset"/>
                <Button handleClick={this.addByOne} text="Add" />
                <Button handleClick={this.subByOne} text="Sub" />

                <div>{this.state.first} {this.state.last}</div>
                <UserForm id="firstName" label="First Name" onChange={this.handleFirst}/>
                <UserForm id="lastName" label="Last Name" onChange={this.handleLast}/>
            </div>
        );
    }
}

const Name = (props) => {
    return (
        <h1>{props.name}</h1>
    );
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    );
}

const UserForm = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} onChange={props.onChange}/>
        </div>
    );
}

export default Counter;