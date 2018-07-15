import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";

class App extends Component {
    render() {
        const { drizzleStatus, accounts } = this.props;

        if (drizzleStatus.initialized) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Tutorial Token</h1>
                        <p>
                            <strong>Reservation</strong>:{" "}
                            <ContractData
                                contract="NoShow"
                                method="reservation"
                                methodArgs={[{ from: accounts[0] }]}
                            />{" "}

                        </p>
                        <p>
                            <strong>Withdraw</strong>:{" "}
                            <ContractData
                                contract="NoShow"
                                method="withdraw"
                                methodArgs={[accounts[0]]}
                            />
                        </p>
                        <h3>ClientCome</h3>
                    </header>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="reservation"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="clientCome"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="withdraw"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                </div>
            );
        }

        return <div>Loading dapp...</div>;
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        NoShow: state.contracts.NoShow
    };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;