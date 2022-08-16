import React, { Component } from "react";
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { Header, Form, FormButton, FormInput } from './Searchbar.styled'

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        name: "",
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    submitForm = (e) => {
        e.preventDefault()
        if (this.state.name.trim() === '') {
            toast.warn("Please enter a request", {
                theme: "colored",
            })
        }

        this.props.onSubmit(this.state.name);
        this.reset()
    }

    reset() {
        this.setState({ name: "" })
    }

    render() {
        return (
            <Header className="searchbar">
                <Form className="form" onSubmit={this.submitForm}>
                    <FormButton type="submit" className="button">
                        <ImSearch style={{ width: 20, height: 20 }} />
                    </FormButton>

                    <FormInput
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form>
            </Header>
        )
    }
}

export default Searchbar