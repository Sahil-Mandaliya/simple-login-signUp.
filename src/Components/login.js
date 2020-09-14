import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Messages from "./messages";

class login extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:"",
            password:"",
            errors:[],
        }
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onChangePassword(e)
    {
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        const newProfile={
            email:this.state.email,
            password:this.state.password,
            errors:[]
        }
        console.log(this.state);
        Axios.post('http://localhost:5001/profiles/fetch',newProfile)
               .then(res=>{
                   console.log(res.data);
                   if(res.data.length>0)
                    {
                        this.setState({
                            errors:[]
                        })
                        this.setState({
                            errors:res.data
                        })   
                    }
                    else
                    {
                        window.location='/home';
                    }
               })
               .catch(err=>console.log("kdf error "+err));
    }
    ListMessages()
    {
        return <Messages errors={this.state.errors}/>
    }
    render()
    {
        return (
            <div>
                <div className="card center shadow-lg p-3 mb-5 bg-white" style={{width:"30rem"}}>
                    <div className="card-body "> 
                        <div>
                            {this.ListMessages()}
                        </div>
                        <h2 className="card-title">Login</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="loginInputEmail1">Email address</label>
                                <input type="email" 
                                       className="form-control" 
                                       id="loginInputEmail1" 
                                       aria-describedby="emailHelp" 
                                       placeholder="Enter email"
                                       value={this.state.email}
                                       onChange={this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginInputPassword1">Password</label>
                                <input type="password" 
                                       className="form-control" 
                                       id="loginInputPassword1" 
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.onChangePassword}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to={'/'}> New User?Sign Up</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default login;