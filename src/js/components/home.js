import React from 'react';

export default class Home extends React.Component {
    componentWillMount () {
        console.log('Home - 组件挂在之前');
    }

    componentDidMount () {
        console.log('Home - 组件挂在之后');
    }

    render () {
        var userName = 'guojingang';
        var html = '性别：\u0020我是女的'; // &nbsp; = \u0020
        return (
            <div>
                <h1>这里是body</h1>
                <p>{userName == '' ? '用户未登录' : userName}</p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML = {{__html : html}}></p>
            </div>
        )
    }
}