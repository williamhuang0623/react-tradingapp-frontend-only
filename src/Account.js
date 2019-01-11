import React from "react";
import Hidden from "./Hidden";
//Home is where AUTH function is
import Home from "./Home"; 

class Account extends React.Component {
    render() {
        let account_update = (
            <form action="#" method="POST" name="signup">
                <h3>Your Details</h3>
                <input type="text" name="fname" placeholder="First Name"/>
                <input type="text" name="lname" placeholder="Last Name"/>
                <input type="email" name="email" placeholder="johndoe@xyz.com"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="date" name="DOB" />
                <select name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="submit" name="SUBMIT" value="Update Information"/>
            </form>
        );
        
        return (
            <div>
                <div className="row">
                    <div className="float-right">
                        <h5>Welcome Back, Steve Bitondo!</h5>
                    </div>
                    <div className="col-md-12 account-container">
                        <h1>Account</h1>
                        {account_update}
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;