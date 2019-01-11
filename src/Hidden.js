import React from "react";

class Hidden extends React.Component {
    render() {
        return (
            <div className="hide-content">
                <h3>Please sign in to continue</h3>
                <img src="icons/Asset_1.png" className="block" />
                <a href="/">Home</a>
            </div>
        )
    }
}

export default Hidden;