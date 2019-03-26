import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'> Home </NavLink>
                <NavLink to ='/register'> Register </NavLink>
                <NavLink to='/login'> Login </NavLink>
            </div>
        );
    }
}

export default navigation;