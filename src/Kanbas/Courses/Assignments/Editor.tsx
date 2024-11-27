import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
//import * as db from "../../Database";
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as assignmentsClient from "./client";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const course = db.courses.find((course) => course._id === cid);
    //const assignment = db.assignments.find((assignment) => assignment._id === aid && assignment.course === cid);
    
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find(
        (a: any) => a._id === aid && a.course === cid
    );

    //    const [assignmentTitle, setAssignmentTitle] = useState("");


    const initialAssignmentData = {
        title: "",
        description: "",
        points: 100,
        dueDate: "",
        availableFrom: "",
        availableUntil: ""
    };
    //Set up state based on whether editing or adding
    const [assignmentData, setAssignmentData] = useState(initialAssignmentData);
    
    //Populate form if editing an existing assignment
    //I made some changes on this useEffect
    useEffect(() => {
        if (aid && assignment) {
            setAssignmentData({
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil
            });
            
        }
    }, [aid, assignment]);

    const handleSave = async () => {
        if (aid) {
            const updatedAssignment = await assignmentsClient.updateAssignment({ 
                ...assignmentData, 
                _id: aid, 
                course: cid 
            });
            dispatch(updateAssignment(updatedAssignment));        
        } else {
            const newAssignment = await assignmentsClient.createAssignment({ 
                ...assignmentData, 
                course: cid 
            });
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

   // const saveAssignment = async (assignment: any) => {
     //   await assignmentsClient.updateAssignment(assignment);
       // dispatch(updateAssignment(assignment));
    //};

    return (
        <div id="wd-assignments-editor" className="m-5">
            <div className="row mb-4">
                <label htmlFor="wd-name" className="colcol-form-label">Assignment Name</label> 
                <div className="col-sm">
                <input id="wd-name" value={assignmentData.title} className="form-control mb-3"
                        onChange={(e) => setAssignmentData({ ...assignmentData, title: e.target.value })} />
                    <textarea className="form-control" rows={5}
                        onChange={(e) => setAssignmentData({ ...assignmentData, description: e.target.value })}>
                        {assignmentData.description}
                    </textarea> 
                </div>
            </div>       
            <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
                <div className="col-sm-9">
                <input id="wd-points" value={assignmentData.points} className="form-control"
                        onChange={(e) => setAssignmentData({...assignmentData, points: parseInt(e.target.value)})} />
                </div><br/><br/>

                <label htmlFor="wd-group" className="col-sm-3 col-form-label">Assignment Group</label>
                <div className="col-sm-9">
                    <select id="wd-group" className="form-select">
                        <option selected value="assignments">
                            ASSIGNMENTS</option>
                        <option value="abcd">ABCD</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br/><br/>
               
                <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">Display Grade as</label>
                <div className="col-sm-9">
                    <select id="wd-display-grade-as"  className="form-select">
                        <option selected value="percentage">Percentage</option>
                        <option value="points">Points</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br/><br/>

                <div className="row mb-3 mt-3">
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">Submission Type</label>
                    
                    <div className="col-sm-9 border border-gray rounded">
                        <select id="wd-submission-type" className="form-select mt-3">
                            <option selected value="online">Online</option>
                            <option value="inperson">In Person</option>
                            <option value="other">Other</option>
                        </select>
                        <br/>
                        <div>
                            <legend>Online Entry Options</legend>
                        </div><br/>
                        <div className="col-sm-10">
                        <div className="form-check">
                            <div className="p-3">
                                <input className="form-check-input" type="checkbox" name="check-option" id="wd-text-entryy"/>
                                <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>
                            </div>

                            <div className="p-3">
                                <input className="form-check-input" type="checkbox" name="check-option" id="wd-website-url" checked/>
                                <label htmlFor="wd-chkbox-drama">Website URL</label><br/>
                            </div>

                            <div className="p-3">
                                <input className="form-check-input" type="checkbox" name="check-option" id="wd-media-recordings"/>
                                <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>
                            </div>

                            <div className="p-3">
                                <input className="form-check-input" type="checkbox" name="check-option" id="wd-student-annotation"/>
                                <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br/>
                            </div>

                            <div className="p-3">
                                <input className="form-check-input" type="checkbox" name="check-option" id="wd-file-upload"/>
                                <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 mt-3">
                    <label className="col-sm-3 col-form-label">Assign</label>
                    
                    <div className="col-sm-9 border border-gray rounded">
                        <label htmlFor="wd-assign-to" className="mt-3">Assign to</label>
                        <input type="text" id="wd-assign-to" placeholder="Everyone" className="form-control"/>
                        <label htmlFor="wd-due-date" className="col-sm-3 col-form-label mt-1">Due</label>
                        <div className="col-sm">
                            <input type="date" id="wd-due-date" value={assignment?.dueDate} className="form-control"
                                onChange={(e) => setAssignmentData({...assignmentData, dueDate: e.target.value})} />
                        </div>

                        <div className="row align-items-start"> 
                            <div className="col">
                                <label htmlFor="wd-available-from" className="col-md col-form-label mt-1">Available from</label>
                                <div className="col-sm-9">
                                    <input type="date" id="wd-from" value={assignment?.availableFrom} className="form-control mb-3"
                                        onChange={(e) => setAssignmentData({...assignmentData, availableFrom: e.target.value})}  /> 
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="wd-available-until" className="col-sm-3 col-form-label mt-1">Until</label>
                                <div>
                                    <input type="date" id="wd-until" value={assignment?.availableUntil} className="form-control mb-3"
                                        onChange={(e) => setAssignmentData({...assignmentData, availableUntil: e.target.value})} /> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <hr/>
            <div className="d-flex flex-row" id="assignment-form-buttons-container">
                <div className="ms-auto">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <button className="btn btn-secondary me-1">Cancel</button>
                    </Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <button onClick={handleSave} className="btn btn-danger me-2"
                           >
                            Save
                        </button>
                    </Link>
                </div>
            </div>              
        </div>
     </div>
    );
}