import React from "react";
import "./style.css";
import axios from "axios";


class EmployeeTable extends React.Component {

    state = {
        sortOrder: "",
    }

    sortByName = (isFirstName) => {
        let nameType = null;
        if(isFirstName) {
            nameType = "first"
        } else {
            nameType = "last"
        }
    
        let sortedEmployees = this.props.filteredEmployees.sort((a, b) => {
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
                    {this.props.filteredEmployees.map(employee => {
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