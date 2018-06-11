import React from 'react';
import HomeChild from './homeChild';

export default class Home extends React.Component {
    constructor () {
        super(); // 继承基类的属性和方法
        this.state = {
            name: 'orange',
            age: 24
        }
    }
    componentWillMount () { // 父组件向子组件传递属性值
        this.setState({
            name: this.props.name,
            age: this.props.age
        })
    }
    clickChangeAge (age) {
        this.setState({age: age});
    }
    changeAgeEvent (event) {
        this.setState({age:event.target.value});
    }
    render () {
        return (
            <div>
                <p>{this.state.name} : {this.state.age}</p>
                <input type="button" value="点我" onClick = {this.clickChangeAge.bind(this, 50)}/>
                <HomeChild changeAgeEvent = {this.changeAgeEvent.bind(this)} />
            </div>
        )
    }
}