import React, { Component } from 'react';
import getWeb3 from "./utils/getWeb3";
import NoShowContract from "../../build/contracts/NoShow.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservationInstance: null,
            myAccount: null,
            web: null
        };
    }
    componentWillMount() {
        getWeb3
            .then(results => {
            this.setState({
                web3 : results.web3
            });
            this.instantiateContract();
        })
            .catch(() => {
            console.log("ERR finding Web3");
            });
    }
    instantiateContract() {
        const contract = require("truffle-contract");
        const noshow = contract(NoShowContract);
        noshow.setProvider(this.state.web3.currentProvider);

        this.state.web3.eth.getAccounts((error, accounts) => {
            if (!error) {
                noshow.deployed().then(instance => {
                    this.setState({ reservationInstance: instance, myAccount: accounts[0] });
                });
            }
        });
    };

    render() {
        return <div className="App">Reservation</div>;
    }
}

export default App;
