import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    componentDidMount() {
    };

    render(){
        return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/branch" className="navbar-brand">Branch</Link>
            <Link to="/account" className="navbar-brand">Account</Link>
            <Link to="/customer" className="navbar-brand">Customer</Link>
            <Link to="/product" className="navbar-brand">Product</Link>
            </div>
          {/* {isAuthenticated ? authLinks : guestLinks} */}
        </div>
            </nav>
        
           
        );
    }
}

export default Header;