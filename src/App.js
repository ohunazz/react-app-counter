import React from "react";
import "./App.css";

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    };

    render() {
        return (
            <div className="container">
                <Button onClick={this.decrement}>-</Button>
                <span>Counter: {this.state.counter}</span>
                <Button onClick={this.increment}>+</Button>
            </div>
        );
    }
}

export default App;
