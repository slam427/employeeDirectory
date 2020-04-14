import React from "react";
import Header from "./components/Header/";
import Search from "./components/Search/";
import EmployeeTable from "./components/EmployeeTable/";




class App extends React.Component {
    state = {
        search:"",
    }
    handleInputChange = event => {
        if (event.target.name === "userSearch") {
            const searchTerm = event.target.value.toLowerCase()
            this.setState({
                search: searchTerm
            })
        }
    }
    render() {
    return (
        <>
            <Header />
            <br />
            <Search handleInputChange ={this.handleInputChange} />
            <br />
            <EmployeeTable  searchTerm={this.state.search}/>
        </>
    );
    }
}

export default App;