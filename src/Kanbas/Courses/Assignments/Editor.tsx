export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br/><br/>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea>
                The assignment is available online Submit a link to the landing page of your web application running on Netlify.
            </textarea> <br/><br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="assignments">
                                ASSIGNMENTS</option>
                            <option value="abcd">ABCD</option>
                            <option value="other">Other</option>
                        </select>
                    </td>
                </tr> <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="percentage">Percentage</option>
                            <option value="points">Points</option>
                            <option value="other">Other</option>
                        </select>
                    </td>
                </tr> <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td valign="top">
                        <select id="wd-submission-type">
                            <option selected value="online">Online</option>
                            <option value="inperson">In Person</option>
                            <option value="other">Other</option>
                        </select>
                    </td>
                </tr> <br/>
                <tr>
                    <td>
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
                    </td>
                </tr> <br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" id="wd-assign-to" placeholder="Everyone" />
                    </td>
                </tr><br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="date" id="wd-due-date" value="05-13-2024" />
                    </td>
                </tr><br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td>
                       <input type="date"
                            id="wd-from"/> 
                    </td>
                    <td>
                       <input type="date"
                            id="wd-until"/> 
                    </td>
                </tr>

            </table>
            <hr/>
            <table>
                <tr>
                    <td align="right">
                        <button>Cancel</button>
                    </td>
                    <td align="right">
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}