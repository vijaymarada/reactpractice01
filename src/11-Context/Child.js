import React from "react";
import GrandChild from "./GrandChild";

class Child extends React.Component {

    render() {
        return (
            <div>
                <GrandChild></GrandChild>
            </div>
        )
    }
}
export default Child;