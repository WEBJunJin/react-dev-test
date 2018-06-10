import React from 'react';

export default class Footer extends React.Component {
    componentWillMount () {
        console.log('test');
    }
    render () {
        return (
            <footer>
                <h1>这里是底部</h1>
            </footer>
        )
    }
}