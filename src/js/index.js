var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));