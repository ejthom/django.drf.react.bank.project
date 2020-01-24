import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reset } from "../../actions/auth";

export class Reset extends Component {
  state = {
        username: "",
        password: ""
    };
  static propTypes = {
        reset: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };
onSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        this.props.reset(this.state.username, this.state.password);
    };
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/branch"/>
        }
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h2 className="text-center">Password Reset</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onChange}
                      value={username}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Reset</button>
                  </div>
                  <p>
                    Forgot your Password? <Link to="/reset">Reset Password</Link>
                  </p>
                </form>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { reset })(Reset);