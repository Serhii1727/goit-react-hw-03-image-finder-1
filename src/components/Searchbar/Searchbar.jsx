import React, { Component } from "react";

export class Searchbar extends Component {
    state = {
        name: "",
    }

    handleNameChange = (e) => {
        console.log('e.target', e.target)
        this.setState({ name: e.target.value })
    }

    submitForm = (e) => {
        e.preventDefault()
        if (this.state.name.trim() === '') {
            alert("Введите запрос")
        }

        this.props.onSubmit(this.state.name);
        this.reset()
    }

    reset() {
        this.setState({ name: "" })
    }

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.submitForm}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar