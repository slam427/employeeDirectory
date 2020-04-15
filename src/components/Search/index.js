import React from "react";
import "./style.css";

class Search extends React.Component {

    handleSubmit = event => {
        console.log(event.target);
        if(event.target.name ==="search") {
        const searchTerm = event.target.value.toLowerCase();
        console.log(searchTerm)
        const newList = this.state.employees.filter(employee => employee.toLowerCase().find(searchTerm));
    }
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={()=>this.handleSubmit}>
            <label>
            <input name='userSearch' onChange={this.props.handleChange} type="text" id="searchBox" 
            placeholder="search" />
            </label>
            </form>
        );
    }
}

export default Search;