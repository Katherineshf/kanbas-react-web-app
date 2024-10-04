export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div>
                <label htmlFor="wd-name">Assignment Name</label> <br/><br/>
                <input id="wd-name" value="A1" /><br /><br />
                <textarea>
                    The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                </textarea> <br/><br/>

  
            </div> <br/>
  
                  
   
               
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

                <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">Submission Type</label>
                <div className="col-sm-9">
                    <select id="wd-submission-type" className="form-select">
                        <option selected value="online">Online</option>
                        <option value="inperson">In Person</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            
                    <label>Online Entry Options:</label><br/>

                    <input type="checkbox" name="check-option" id="wd-text-entryy"/>
                    <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

                    <input type="checkbox" name="check-option" id="wd-website-url"/>
                    <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

                    <input type="checkbox" name="check-option" id="wd-media-recordings"/>
                    <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

                    <input type="checkbox" name="check-option" id="wd-student-annotation"/>
                    <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br/>

                    <input type="checkbox" name="check-option" id="wd-file-upload"/>
                    <label htmlFor="wd-chkbox-fantasy">File Uploads</label>


                    <label htmlFor="wd-assign-to">Assign to</label>

                    <input type="text" id="wd-assign-to" placeholder="Everyone" />
            
                    <label htmlFor="wd-due-date">Due</label>

                    <input type="date" id="wd-due-date" value="05-13-2024" />
            
                    <label htmlFor="wd-available-from">Available from</label>
            
                    <label htmlFor="wd-available-until">Until</label>
            
                    <input type="date"
                        id="wd-from"/> 
            
                    <input type="date"
                        id="wd-until"/> 
                    
           </div>
                   
       
            <hr/>
            <div>
                 <button>Cancel</button>
                 
                 <button>Save</button>
  
            </div>
                        
           
        </div>
    );
}