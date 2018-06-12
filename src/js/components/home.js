import React from 'react';
import ReactDOM from 'react-dom';
import HomeChild from './homeChild';
import ReactMixin from 'react-mixin';
import Mixins from './mixins';

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
        // 第一种获取dom元素的方法
        // var myBtn = document.getElementById('myBtn');
        // ReactDOM.findDOMNode(myBtn).style.color = 'red';

        // 第二种 使用组件的refs属性
        // this.refs.myBtn.style.color = 'red';
        debugger
        Mixins.log();
    }
    changeAgeEvent (event) {
        this.setState({age:event.target.value});
    }
    render () {
        return (
            <div>
                <p>{this.state.name} : {this.state.age}</p>
                <input type="button" id="myBtn" ref="myBtn" value="点我" onClick = {this.clickChangeAge.bind(this, 50)}/>
                <HomeChild {...this.props} id={4} changeAgeEvent = {this.changeAgeEvent.bind(this)} />
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string.isRequired, // isRequired 验证必传
    age: React.PropTypes.number // 验证类型
}

Home.defaultProps = {name: 'hjj'} // 默认props

ReactMixin(Home.prototype, Mixins) // es6不支持mixin，需要用ReactMixin插件来兼容


