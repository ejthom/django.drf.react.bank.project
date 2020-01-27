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

export default class AccountModal extends Component {
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
                <Label for="customer">Customer</Label>
                <Input
                type="text"
                name="customer"
                value={this.state.activeItem.customer}
                onChange={this.handleChange}
                placeholder="Customer Name"
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