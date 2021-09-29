import React from "react";

class GrandChild extends React.Component {

    render() {
        return (
            <div>This color was {this.context}</div>
        )
    }
}
export default GrandChild;