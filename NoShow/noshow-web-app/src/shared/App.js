import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Register, Reservation } from 'pages';
import Menu from '../components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/reservation" component={Reservation}/>
            </div>
        );
    }
}

export default App;