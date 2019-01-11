import React from "react";
import Hidden from "./Hidden";

class Fees extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="float-right">
                    <h5>Welcome Back, Steve Bitondo!</h5>
                </div>
                <div className="col-md-11 fee-container">
                    <h1>Fees</h1>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Donec nec interdum nibh. Proin at malesuada nibh. Morbi felis ante, mattis ac nulla at, interdum blandit metus. Suspendisse ut felis eget risus euismod posuere at id massa. Aliquam condimentum id justo eget varius. Pellentesque porttitor dignissim convallis. Fusce fermentum ligula dui. Phasellus rutrum efficitur mauris vel mollis. Duis interdum hendrerit diam, ac iaculis eros vehicula ac. Sed sem turpis, euismod at imperdiet non, suscipit sit amet velit. Nulla facilisi. Morbi convallis erat vel euismod elementum. Suspendisse consequat in dui ut laoreet. Nulla ac dolor lorem.</p>
                    <button className="float-right">Learn More</button>
                </div>
            </div>
        )
    }
}

export default Fees;