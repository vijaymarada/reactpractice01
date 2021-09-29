import React from "react";

class Message extends React.PureComponent{
    render(){
        return(
            console.log("Called message class"),
        <b>{this.props.Message}</b>
        )
    }
}
export default Message