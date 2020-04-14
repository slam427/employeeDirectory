import React from "react";
import "./style.css";

class Search extends React.Component {
    handleSubmit = e => {
        console.log(e.target);
        if(e.target.name ==="search") {
        const searchTerm = e.target.value.toLowerCase();
        console.log(searchTerm)

        const newList = this.state.employees.filter(employee => employee.toLowerCase().includes(searchTerm));
    }
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label className="searchForm">
            <input name='userSearch' onChange={this.props.handleInputChange} type="text" id="searchBox" 
            placeholder="search" />
            </label>
            </form>
        );
    }
}

export default Search;