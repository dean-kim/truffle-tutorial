import React, {Component} from 'react';

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";


class Register extends Component {
    render() {
        const { drizzleStatus, accounts } = this.props;

        console.log(drizzleStatus);
        console.log(accounts);
        // console.log(this.props);

        if (drizzleStatus.initialized) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">About Register</h1>
                    </header>
                    <div className="App-intro">
                        <h1 className="App-title">Register</h1>
                        <ContractForm
                            contract="RestaurantsOwnerRegister"
                            method="registerRestaurant"
                            methodArgs={[{from: this.props.accounts[0],value: 1}]}
                            labels={["To Address", "Restaurant Name"]}
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
        RestaurantsOwnerRegister: state.contracts.RestaurantsOwnerRegister
    };
};

const AppContainer_register = drizzleConnect(Register, mapStateToProps);
export default AppContainer_register;