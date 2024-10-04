export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="m-5">
            <div className="row mb-4">
                <label htmlFor="wd-name" className="colcol-form-label">Assignment Name</label> 
                <div className="col-sm">
                    <input id="wd-name" value="A1" className="form-control mb-3"/>
                    <textarea className="form-control" rows={5}>
                        The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                        The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                        The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                    </textarea> 
                </div>
            </div> 
  
                  
   
               
            <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
                <div className="col-sm-9">
                    <input id="wd-points" value={100} className="form-control" />
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
                            <input type="date" id="wd-due-date" value="05-13-2024" className="form-control"/>
                        </div>

                        <div className="row align-items-start"> 
                            <div className="col">
                                <label htmlFor="wd-available-from" className="col-md col-form-label mt-1">Available from</label>
                                <div className="col-sm-9">
                                    <input type="date" id="wd-from" className="form-control mb-3"/> 
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="wd-available-until" className="col-sm-3 col-form-label mt-1">Until</label>
                                <div>
                                    <input type="date" id="wd-until" className="form-control mb-3"/> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
                   
       
            <hr/>
            <div className="d-flex flex-row" id="assignment-form-buttons-container">
                <div className="ms-auto">
                    <button className="btn btn-secondary me-1">
                        Cancel
                    </button>
                    <button className="btn btn-danger me-2">
                        Save
                    </button>
                </div>
            </div>              
        </div>
     </div>
    );
}