import React from "react";
import Hidden from "./Hidden";

class Support extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="float-right support-float">
                    <h5>Welcome Back, Steve Bitondo!</h5>
                </div>
                <div className="support-container">
                    <h1>Support</h1>
                    <ul>  
                        <li>Knowledgebase</li>
                        <li>Tickets</li>
                    </ul>
                    <div className="col-md-4">
                        <img src="./icons/Asset_10.png" className="support-icons"/>
                        <p>FAQ</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./icons/Asset_10.png" className="support-icons"/>
                        <p>Documentation</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./icons/Asset_10.png" className="support-icons"/>
                        <p>Open Ticket</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Support;