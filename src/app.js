import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/style.css"
import signUp from "./Components/signUp"
import login from "./Components/login"
import home1 from "./Components/home1"

import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends Component
{
    render()
    {
        return (
            <div>
                <Router>
                    <div className="container">
                        <Route path="/" exact component={signUp}/>
                        <Route path="/login" component={login}/>
                        <Route path="/home" component={home1}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;