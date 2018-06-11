var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

export default class Index extends React.Component {
    componentWillMount () {
        console.log('Index - 组件挂载之前');
    }

    componentDidMount () {
        console.log('Index - 组件挂载之后');
    }
    render() {
        return (
            <div>
                <Header/>
                <Home name={'hjj'} age={25}/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));