import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DrizzleProvider } from "drizzle-react";
import drizzleOptions from '../drizzleOptions'
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <DrizzleProvider options={drizzleOptions}>
            <App/>
        </DrizzleProvider>
    </BrowserRouter>
);

export default Root;