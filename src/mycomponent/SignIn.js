import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignIn extends Component {
    render() {
        return (
            <div style={{
                
                backgroundColor:"white",padding:'40px',width:'500px',borderRadius:"10px",overflow:"hidden",margin:"0px auto"}}>
                <h1 style={{color:"black",textAlign:'center'}}>Sign In</h1>
                <div style={{margin:"0px auto",padding:'0px',width:"408px",}}>
                <h5 style={{color:"black",margin:"0px"}}>Email Address</h5>
                <input style={{fontSize:"20px",width:"400px",}} type="text" placeholder="Email Address"></input>
                <h5 style={{textAlign:"left",color:"black",margin:"0px"}}>Password</h5>
                <input style={{fontSize:"20px",width:"400px"}} type="password" placeholder="Password"></input>
                </div>

            </div>
        )
    }
}
