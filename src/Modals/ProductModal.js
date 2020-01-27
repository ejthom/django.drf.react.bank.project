import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class ProductModal extends Component {
    constructor(props) {
    super(props);
    this.state = {
        activeItem: this.props.activeItem
    };
    }
    handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    };
    render() {
    const { toggle, onSave } = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Account Info </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="account">Account</Label>
                <Input
                type="text"
                name="account"
                value={this.state.activeItem.account}
                onChange={this.handleChange}
                placeholder="Account"
                />
            </FormGroup>
            <FormGroup>
                <Label for="amount"> Amount </Label>
                <Input
                type="text"
                name="amount"
                value={this.state.activeItem.amount}
                onChange={this.handleChange}
                placeholder="Amount"
                />
            </FormGroup>
            <FormGroup>
                <Label for="product_type"> Product Type </Label>
                <Input
                type="text"
                name="product_type"
                value={this.state.activeItem.product_type}
                onChange={this.handleChange}
                placeholder="Product"
                />
            </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
            </Button>
        </ModalFooter>
        </Modal>
    );
    }
}