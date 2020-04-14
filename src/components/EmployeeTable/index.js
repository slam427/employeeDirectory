import React from "react";
import "./style.css";
import axios from "axios";
// import Search from "./Search"


class EmployeeTable extends React.Component {

    state = {
        sortOrder: "",
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
        else {
            this.setState({filteredEmployees: this.state.employees.filter(employee => {
                return employee.name.first.toLowerCase().includes(this.props.searchTerm)
            })})
        }
    }

    sortByName = (isFirstName) => {
        let nameType = null;
        if(isFirstName) {
            nameType = "first"
        } else {
            nameType = "last"
        }
    
        let sortedEmployees = this.state.employees.sort((a, b) => {
            if (b.name[nameType].toLowerCase() > a.name[nameType].toLowerCase()) {
                return -1;
            }

            if (a.name[nameType].toLowerCase() > b.name[nameType].toLowerCase()) {
                return 1;
            }

            return 0;
        });
        console.log(sortedEmployees);

        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
    }
    

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>FirstName<button onClick={()=>this.sortByName(true)}>Sort</button></th>
                        <th>LastName<button onClick={()=>this.sortByName(false)}>Sort</button></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.filteredEmployees.map(employee => {
                        const formattedDate = new Date (employee.dob.date).toLocaleDateString();
                        return (
                        <tr key={employee.id.value}>
                            <td> <img src={employee.picture.thumbnail}/></td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{formattedDate}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        );
    }
}

export default EmployeeTable;