
import React, {Component} from "react"; 
import { Link } from 'react-router-dom'; 
 
export default class Navbar extends Component{ 
    render(){ 
        return( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to = "/" className="navbar-brand">Apply for MakeUp Minor</Link> 
                <div className="collpase navbar-collapse"> 
                    <ul className="navbar-nav mr-auto"> 
                        <li>
                            <Link to='/update' className="nav-link">Approve</Link>
                        </li>
                        <li>
                            <Link to='/Print' className="nav-link">Generate Report </Link>
                        </li>
                    </ul> 
                </div> 
            </nav> 
        ); 
    } 
}