import React from 'react';

export default class Hearder extends React.Component {
    render () {
        const myStyle = {
            header: {
                backgroundColor: 'black',
                color: 'white',
                paddingTop: '15px'
            },
            pdButton: {
                paddingButton: '15px'
            }
        }
        // 内联样式和css样式的引用
        return (
            <header style={myStyle.header} className="smallFont"> 
                <h1>这里是头部</h1>
            </header>
        )
    }
}