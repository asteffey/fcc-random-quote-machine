import React from 'react';
import store from "../store";
import { Provider } from 'react-redux'
import App from './App'

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
