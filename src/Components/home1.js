import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Axios from 'axios';
// import {Link} from 'react-router-dom';
function EmailComponent(args)
{
    return(
        <li className="list-group-item">{args.emails.email}</li>
    )
}

class home1 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            emails:[]
        }
        this.ListAllEmails=this.ListAllEmails.bind(this);
    }
    componentDidMount()
    {
        Axios.get("http://localhost:5001/profiles/")
             .then(res=>{
                 this.setState({
                     emails:res.data
                 })
             })
             .catch(err=>alert("could not get"));
    }

    ListAllEmails()
    {
        return this.state.emails.map(curEmail=>{
            return (<EmailComponent emails={curEmail}
                                    key={curEmail._id}/>)
        })
    }
    render()
    {
        return(
            <div className="container bg-dark">
                <div className="container headDivColor">
                    <h2>All Registerd Email</h2>
                </div>
                <ol className="list-group style1">
                    {this.ListAllEmails()}
                </ol>
            </div>
        )
    }
}

export default home1;