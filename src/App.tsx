import React from 'react';
import { hot } from 'react-hot-loader/root';
import { MainInput } from './Components/Input';

class App extends React.Component {
render() {
    return (
        <MainInput />
    );
}
}

export default hot(App);