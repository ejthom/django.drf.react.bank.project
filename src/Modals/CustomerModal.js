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

export default class CustomerModal extends Component {
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
        <ModalHeader toggle={toggle}> Customer Info </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="customer_name">Customer</Label>
                <Input
                type="text"
                name="customer_name"
                value={this.state.activeItem.customer_name}
                onChange={this.handleChange}
                placeholder="Customer Name"
                />
            </FormGroup>
            <FormGroup>
                <Label for="customer_email"> Email </Label>
                <Input
                type="text"
                name="customer_email"
                value={this.state.activeItem.customer_email}
                onChange={this.handleChange}
                placeholder="Email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="branch"> Branch Name </Label>
                <Input
                type="text"
                name="branch"
                value={this.state.activeItem.branch}
                onChange={this.handleChange}
                placeholder="Branch"
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