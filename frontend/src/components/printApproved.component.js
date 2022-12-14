/*import React, { Component ,Fragment} from "react";
import axios from 'axios';
// import { renderMatches } from "react-router-dom";
export default class Display extends Component{
    constructor(props){
        super(props);
        this.state=({
            approvedStudents:[],
        });
    }
    componentDidMount() {
        axios.get(`http://localhost:1999/api/user?&year=${(new Date()).getFullYear()}`)
            .then(Response => {
                // console.log(Response.data.data)
                this.setState({ approvedStudents: Response.data.data })
                // console.log(students);
            })
            .catch(error => {
                console.log( "Error" + error);
            })
    }
    render(){
        return(
            <div>
                 <div>
                <h3 align='center'>Approved Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Course</th>
                            <th>Remark</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.approvedStudents.map((student,index)=>{
                            return(
                            <Fragment key={index}>
                                {student.courses.map((cours)=>{
                                    // console.log(student._id, cours._id)
                                    if(cours.approval === true){
                                     return(
                                            <tr>
                                            <td>{student.studentName}</td>
                                            <td>{student.usn}</td>    
                                            <td>{cours.course}</td>
                                            <td>{cours.remark}</td>
                                            </tr>
                                            )
                                        }
                                        else return null;
                                    
                                    
                                   
                                })}
                            </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}
*/

import React, { Component, Fragment } from "react";
import axios from 'axios';
import ReactToPrint from 'react-to-print'

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            semOptions: 0,
            approvedStudents: [],
            course: []
        });
    }

    onChangeSemOptions = (e) => {

        // console.log(sem)
        this.setState({ semOptions: e.target.value });
        axios.get(`http://localhost:5000/api/course?&sem=${e.target.value}`)
            .then((res) => {
                this.setState({ course: res.data.data })
                // console.log(res.data.data)
            })
            .catch(err => console.log(err))


        // console.log(this.state.semOptions)
        axios.get(`http://localhost:5000/api/user/appr?&year=${(new Date()).getFullYear()}&sem=${(e.target.value)}`)
            .then(Response => {
                // console.log(Response.data.data)
                this.setState({ approvedStudents: Response.data.data })
                // console.log(students);
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }


    render() {

        return (

            <div>
                <div className="form-group">
                    <label>Sem</label>
                    <input type={"number"} value={this.state.semOptions} required className="form-control" onChange={this.onChangeSemOptions} placeholder="Sem" min={3} max={8}></input>
            </div>

            <div ref={el => (this.componentRef = el)}>

            <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fkle_logo.png?alt=media&token=77f3a631-91a5-40f1-9fca-16001e566cd2"alt="Scholarship"class="img-fluid  mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <b><h4 class="text-center1">Login - Departmental Under Graduate Committee</h4></b>
                <h6 class="text-center2">School of Computer Science and Engineering</h6>
                <b><h7 class="text-center3">(For Academic Year 2022-23)</h7></b>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img style={{width:"10rem"}} src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=13cfe0d3-7384-4cfa-81e0-28f6395accdd" alt="" class="img-fluid mx-auto  d-block float-xl-right float-lg-right float-md-right logoright"/>
                
            </div>
        </div>
    </div>
    <hr></hr>
                
<h3 align='center'>Makeup Minor Approved List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Course</th>
                            <th>Remark</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.approvedStudents.map((student,index)=>{
                            return(
                            <Fragment key={index}>
                                {student.courses.map((cours)=>{
                                    // console.log(student._id, cours._id)
                                    if(cours.approval === true){
                                     return(
                                            <tr>
                                            <td>{student.studentName}</td>
                                            <td>{student.usn}</td>    
                                            <td>{cours.course}</td>
                                            <td>{cours.remark}</td>
                                            </tr>
                                            )
                                        }
                                        else return null;
                                    
                                    
                                   
                                })}
                            </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>

                
            <ReactToPrint trigger={() => {
                return <button className="btn btn-secondary">Print</button>
            }}
                
                content={() => this.componentRef}
                pageStyle="print"
            />
            </div>
        );
    }
}