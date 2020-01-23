import React, { Component } from "react";
import AccountModal from "../Modals/AccountModal";
import axios from "axios";

class Account extends Component {
    constructor(props) {
    super(props);
    this.state = {
        viewCompleted: true,
        activeItem: {
        customer: "",
        },
        todoList: []
    };
    }
    componentDidMount() {
    this.refreshList();
    console.log(this.state.todoList)
    }
    refreshList = () => {
    axios
        .get("https://api-django-drf-erica.herokuapp.com/account/")
        .then(res => this.setState({ todoList: res.data.results }))
        .catch(err => console.log(err));
    };
    displayCustomer = status => {
    if (status) {
        return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
    };
    renderTabList = () => {
    return (
        <div className="my-5 tab-list">
        <span
            onClick={() => this.displayCustomer(true)}
            className={this.state.viewCompleted ? "active" : ""}
        >
            Branch
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active" }
        >
            Customer
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active"}
        >
            Products
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active"} 
        >
            Account
        </span>
        </div>
    );
    };
    renderItems = () => {
    // eslint-disable-next-line
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList;
    // const newItems = this.state.todoList.filter(
    //     item => item.completed === viewCompleted
    // );
    return newItems.map(item => (
        <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
        >
        <span
            className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todoac" : ""
            }`}
            title={item.customer}
        >
            {item.customer}
        </span>
        <span>
            <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
            >
            {" "}
            Edit{" "}
            </button>
            <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
            >
            Delete{" "}
            </button>
        </span>
        </li>
    ));
    };
    toggle = () => {
    this.setState({ modal: !this.state.modal });
    };
    handleSubmit = item => {
    this.toggle();
    if (item.id) {
    axios
        .put(`https://api-django-drf-erica.herokuapp.com/account/${item.id}/`, item)
        .then(res => this.refreshList());
        return;
    }
    axios
        .post("https://api-django-drf-erica.herokuapp.com/account/", item)
        .then(res => this.refreshList());
    };
    handleDelete = item => {
    axios
        .delete(`https://api-django-drf-erica.herokuapp.com/account/${item.id}`)
        .then(res => this.refreshList());
    };
    createItem = () => {
    const item = { customer: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
    return (
        <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
        <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                    Enter Info
                </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush">
                {this.renderItems()}
                </ul>
            </div>
            </div>
        </div>
        {this.state.modal ? (
            <AccountModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            />
        ) : null}
        </main>
    );
    }
}
export default Account;