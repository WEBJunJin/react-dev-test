import React from 'react';

export default class Hearder extends React.Component {
    componentWillMount () {
        console.log('Hearder - 组件挂载之前');
    }
    componentDidMount () {
        console.log('Hearder - 组件挂载之后');
    }
    render () {
        return (
            <header>
                <h1>这里是头部</h1>
            </header>
        )
    }
}