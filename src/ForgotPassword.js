import React from "react";

class ForgotPassword extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form method="POST" action="#" name="forgotPassword">
                        <h3>Forgot your password? Not to worry. Please enter your username/email</h3>
                        <input type="email" placeholder="johndoe@xyz.com"/>
                        <input type="submit" value="Send Reset Email"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;