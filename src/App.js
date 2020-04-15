import React from "react";
import axios from "axios";
import Header from "./components/Header/";
import Search from "./components/Search/";
import EmployeeTable from "./components/EmployeeTable/";


class App extends React.Component {
    state = {
        search:"",
        employees: [],
        filteredEmployees: []
    }

    componentDidMount() {
        console.log("component mounted")
        console.log(this.props.searchTerm)
        if(this.state.employees.length < 1) {
        axios.get('https://randomuser.me/api/?results=50&nat=us')
            .then(res => {
                console.log(res)
                this.setState({employees: res.data.results, filteredEmployees: res.data.results})
        })
        }
    }
    handleChange = event => {
        if (event.target.name === "userSearch") {
            const searchTerm = event.target.value.toLowerCase()
            this.setState({filteredEmployees: this.state.employees.filter(employee => {
                return employee.name.first.toLowerCase().includes(searchTerm)
            })})
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
            <Search 
            handleChange ={this.handleChange} 
            />            
            <br />
            <EmployeeTable 
            filteredEmployees={this.state.filteredEmployees}/>
        </>
    );
    }
}

export default App;