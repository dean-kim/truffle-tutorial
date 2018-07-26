// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
// import { DrizzleProvider } from "drizzle-react";
//
// import drizzleOptions from './drizzleOptions'
//
//
// ReactDOM.render(
//     <DrizzleProvider options={drizzleOptions}>
//         <App />
//     </DrizzleProvider>,
//     document.getElementById("root")
// );
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();