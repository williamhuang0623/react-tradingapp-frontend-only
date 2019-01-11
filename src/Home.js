import React from "react";
import ForgotPassword from "./ForgotPassword";
class Home extends React.Component {
    authorize(e) {
        //Authorize code goes here
    }
    render() {
        {/* Dummy Auth */}
        let auth = false;
        let signup = (
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
                <input type="submit" name="SUBMIT" value="Sign Up Now"/>
            </form>
        );
        
        let login = (
            <form action="#" method="POST" name="login">
                <p>Email/Username: </p>
                <input type="email" name="email" />
                <p>Password: </p>
                <input type="password" name="password" />
                <a href="#" className="pw-forget">Forgot Password?</a>
                <input type="submit" name="SUBMIT" value="Log In"/>
            </form>
        )
        
        let welcome = (
            <h3>Welcome to Cypher!</h3>
        )
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 home-container">
                        <h1>Home/Login</h1>
                        {auth == true ? welcome : login}
                    </div>
                </div>
            </div>
        )  
        //return <ForgotPassword />;
    }
}
export default Home;