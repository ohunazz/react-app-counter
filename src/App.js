import React from "react";
import "./App.css";

// class Button extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.onClick}>{this.props.children}</button>
//         );
//     }
// }

// class App extends React.Component {
//     state = {
//         counter: 0,
//         counterBy2: 0
//     };
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         counter: 0
//     //     };
//     // }

//     handleCounter = (e) => {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     };

//     handleCounterBy2 = () => {
//         this.setState({
//             counterBy2: this.state.counterBy2 + 2
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <Button onClick={this.handleCounter}>
//                     Click Me {this.state.counter}
//                 </Button>
//                 <Button onClick={this.handleCounterBy2}>
//                     Click MeClick Me {this.state.counterBy2}
//                 </Button>
//             </div>
//         );
//     }
// }

class App extends React.Component {
    state = {
        showMenu: false
    };

    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };

    // closeMenu = () => {
    //     this.setState({
    //         showMenu: false
    //     });
    // };

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    };

    render() {
        return (
            <main>
                {/* <button onClick={this.openMenu}>Menu</button>
                {this.state.showMenu ? (
                    <div className="menu">
                        <button onClick={this.closeMenu}>X</button>
                    </div>
                ) : null} */}

                <button onClick={this.toggleMenu}>Menu</button>
                {this.state.showMenu ? (
                    <div className="menu-dropdown"></div>
                ) : null}
            </main>
        );
    }
}

export default App;
