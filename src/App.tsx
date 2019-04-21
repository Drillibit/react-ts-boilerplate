import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

class App extends React.Component {
render() {
    return (
        <p>Hello!</p>
    );
}
}

export default hot(App);