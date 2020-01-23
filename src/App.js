import React, { Component } from "react";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import Account from "./components/Account";
import Product from "./components/Product";
import Header from "./components/layout/Headers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/layout/header";
// import Login from "./components/account/login";
// import Register from "./components/account/register"
// import PrivateRoute from "./components/common/PrivateRouter";
// import { Provider } from 'react-redux';
// import store from "./store";
// import { loadUser } from './actions/auth';

class App extends Component {
    componentDidMount() {
        // store.dispatch(loadUser());
    };

    render(){
        return(
            // <Provider store={store}>
                <Router>

                    <Header/>
                    <Switch> 
                    {/* <Route exact path="/" component={Branch}/>
                    <Route exact path="/" component={Customer}/> */}
                    {/* <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/> */}
                    <Route exact path="/branch" component={Branch}/>
                    <Route exact path="/customer" component={Customer}/>
                    <Route exact path="/account" component={Account}/>
                    <Route exact path="/product" component={Product}/>
                    </Switch>
                </Router>
            // </Provider>
        );
    }
}

export default App;