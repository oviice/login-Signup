import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignIn extends Component {
    constructor (){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    onEmailHandler=(event)=>{
        var emailet=event.target.name
        var emailvalue=event.target.value
        var passwordet=event.target.name
        var passwordvalue=event.target.value
        console.log(emailet)
        console.log(emailvalue)
        this.setState({
            [emailet]:emailvalue,
            [passwordet]:passwordvalue
        })
    }
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          width: "500px",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "0px auto",
        }}
      >
          <h1 style={{color:"red"}}>{this.state.email} {this.state.password}</h1>
        <h1 style={{ color: "black", textAlign: "center" }}>Sign In</h1>
        <div style={{ margin: "0px auto", padding: "0px", width: "408px" }}>
          <h5 style={{ color: "black", margin: "0px" }}>Email Address</h5>
          <input name="email" onChange={this.onEmailHandler}
            style={{ fontSize: "20px", width: "400px" }}
            type="text"
            placeholder="Email Address"
          ></input>
          <h5 style={{ textAlign: "left", color: "black", margin: "0px" }}>
            Password
          </h5>
          <input name="password" onChange={this.onEmailHandler}
            style={{ fontSize: "20px", width: "400px" }}
            type="password"
            placeholder="Password"
          ></input>
          
        </div>
        <div style={{textAlign:"center",margin:"0px auto",width:"408px"}}>
            <button >Submit</button>
        </div>
        
      </div>
    );
  }
}
