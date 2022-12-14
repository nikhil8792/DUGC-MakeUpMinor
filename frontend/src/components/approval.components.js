import React, { Component, Fragment } from "react";
import axios from 'axios';



export default class Approve extends Component {
    constructor(props) {
        super(props);
        this.state = { students: [],remark:''};


    }
    onChangeremark = (e) =>{
        this.setState({
            remark: e.target.value
        });
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/user')
            .then(Response => {
                console.log(Response.data.data)
                this.setState({ students: Response.data.data })
                // console.log(students);
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }
    updatestudent(id, cou) {

        axios.post("http://localhost:5000/api/user/update/" + id, { cou: cou, remark : this.state?.remark })
            .then((res) => {
                // console.log(res.data.data)
                axios.get('http://localhost:5000/api/user')
                    .then(Response => {
                        // console.log(Response.data.data)
                        this.setState({ students: Response.data.data })
                
                        // console.log(students);
                    })
                    .catch(error => {
                        console.log("Error" + error);
                    })
            })
    }

    deletestudent(s_id, c_id){
        axios.delete()
    }


    render() {
        return (
            <div>
                <h3 align='center'>Applied Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Course</th>
                            <th>Action</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student, index) => {
                            return (
                                <Fragment key={index}>
                                    {student.courses.map((cours) => {
                                        // console.log(student._id, cours._id)
                                          if (cours.approval === false) {
                                           return (
                                                <>

                                                <tr key={student._id + cours._id}>
                                                    <td>{student.studentName}</td>
                                                    <td>{student.usn}</td>
                                                    <td>{cours.course}</td>
                        
                                                    <td>
                                                        <button href="#" onClick={() => { this.updatestudent(student._id, cours.course) }}>Approve</button> |
                                                        <button href="#" onClick={()=>this.deletestudent(student._id ,cours._id)}>Reject</button>
                                                    </td>
                                                    <td><input type = {"text"} value={this.state.remark} required className="form-control" onChange={this.onChangeremark} placeholder="EnterRemark"></input></td>
                                                    
                                                </tr>
                                                </>
                                            )
                                        }
                                        else return null;

                                    })}

                                </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>
        );

    }
}