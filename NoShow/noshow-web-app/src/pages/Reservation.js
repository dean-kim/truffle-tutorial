import React, {Component} from 'react';

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";


class Reservation extends Component {
    render() {
        const { drizzleStatus, accounts } = this.props;

        console.log(drizzleStatus);
        console.log(accounts);
        console.log(this.props);

        if (drizzleStatus.initialized) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">About Reservation</h1>
                    </header>
                    <div className="App-intro">
                        <h1 className="App-title">Reservation</h1>
                        <ContractForm
                            contract="NoShow"
                            method="reservation"
                            methodArgs={[{value: 10}]}
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <h1 className="App-title">ClientCome</h1>
                        <ContractForm
                            contract="NoShow"
                            method="clientCome"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <h1 className="App-title">Withdraw</h1>
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
    console.log(state);
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        NoShow: state.contracts.NoShow
    };
};

const AppContainer_reservation = drizzleConnect(Reservation, mapStateToProps);
export default AppContainer_reservation;