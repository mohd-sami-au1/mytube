import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.googleCallback = this.googleCallback.bind(this);
    }

    googleCallback(response){
        if(!response || !response.accessToken){
            alert("Google signin failed. Please try again");
            return;
        }
        let user = {
            token: response.accessToken,
            name: response.profileObj.name
        }
        localStorage.setItem("user", JSON.stringify(user));

        // window.location.href = "/";         // For full page reload and then redirecting

        this.props.history.push("/");       // Redirecting without full page reload
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 className="text-danger">Login using Google</h2>
                        <hr />
                        <GoogleLogin 
                            clientId="253598194229-90kkf0t65d0s0udro8msfpiomls3cpsi.apps.googleusercontent.com"
                            onSuccess={this.googleCallback}
                            onFailure={this.googleCallback}
                            buttonText="Login"
                            scope="https://www.googleapis.com/auth/youtube"

                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;