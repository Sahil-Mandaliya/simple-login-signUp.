import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
// import Axios from 'axios';
// import {Link} from 'react-router-dom';

// function ErrorComponent(args)
// {
//     return(
        
//         <div className="alert alert-primary fade show" role="alert"> 
//             <strong>{args.Error}</strong>
//         </div>
//     );
// }

function onClose(e)
{
    console.log(document.getElementsByClassName("hideShow"));
    const closingElem=document.getElementsByClassName("hideShow");
    for(let i=0;i<closingElem.length;i++)
    {
        closingElem[i].style.display="none";
    }
}

class Messages extends Component
{
    render()
    {
        let Errors=[];
        Errors=this.props.errors;
        console.log(Errors);
        let ListErrors=[];
        if(Errors.length===0)
        {
            return (<div></div>)
        }
        ListErrors=Errors.map(curError=>
                                    (<label key={curError} className="hideShow">
                                        <div className="alert alert-primary fade show" role="alert"> 
                                            <strong>{curError}</strong>
                                        </div>
                                     </label>)
                             );
        return(
            <div className="clearBtn">
                {ListErrors}
                <br className="hideShow"/>
                <button onClick={onClose} className="btn btn-info btn-sm hideShow">Clear All</button>
            </div>
        )
    }
}

export default Messages;