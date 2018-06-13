import React from 'react';

export default class homeChild extends React.Component {
    render () {
        return (
            <div>
                <p>
                    用户修改年龄：
                    <input type="text" value={this.props.age} onChange={this.props.changeAgeEvent}/>
                    {this.props.age} {this.props.id}
                </p>
            </div>
        )
    }
}