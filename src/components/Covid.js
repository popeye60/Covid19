import React from 'react';

class Covid extends React.Component {
    render(){
    let data = this.props.data;
        return (
        <>
            <div>{data.NewConfirmed}</div>
            <div>{data.Recovered}</div>
        </>
        )
    }
}
export default Covid;
