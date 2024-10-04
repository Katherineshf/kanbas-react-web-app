import { BsGripVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { PiNotePencilDuotone } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButton";
export default function Assignments() {
    return (
        <div id="wd-assignments" >
            <div className="row">
                <div className="col-auto position-relative">
                    <GoSearch className="text-secondary position-absolute"
                        style={{ top: "40%", left: "25px", transform: "translateY(-50%)" }}
                        fontSize="18px"/>
                    <input id="wd-search-assignment" placeholder="Search..." 
                        className="form-control mb-2 float-start" style={{ paddingLeft: "40px" }}/>    
                </div>
                <div className="col-auto ms-auto">
                    <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2">+ Group</button> 
                    <button id="wd-add-assignment" className="btn btn-md btn-danger">+ Assignment</button>
                </div>
            </div>
            <br /><br /><br />

            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="list-group-item p-0 mb-0 border-gray border-bottom-0">
                    <div>
                        <h3 id="wd-assignments-title" className="wd-title p-3 ps-2">
                        <BsGripVertical className="me-2 fs-3" />
                         ASSIGNMENT 
                        <button id="wd-assignments-title" className="float-end border-0 text-muted">+</button>
                        </h3>
                    </div>
                </li>

                <ul id="wd-assignment-list" className="list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item pt-3 ps-1">
                        <BsGripVertical className="me-1 mt-3 fs-3"/>
                        <PiNotePencilDuotone className="text-success" 
                            style={{fontSize: "25px"}} />

                        <a id="wd-assignment-link"
                            className="ms-3 fw-bold fs-5 text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">A1
                            <LessonControlButtons />
                        </a>
                        <p className="ms-5">
                            <span className="text-danger">Multiple Modules</span> | <span id="Bold">Not Available until</span> May 6 at 12:00am  |<br/>
                            <span id="Bold">Due</span> May 13 at 11:59pm  | 100 pts
                        </p>
                    </li>

                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-1 mt-3 fs-3" />
                        <PiNotePencilDuotone className="text-success"
                            style={{fontSize: "25px"}}/>

                        <a id="wd-assignment-link"
                            className="ms-3 fw-bold fs-5 text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/222">A2
                            <LessonControlButtons />
                        </a>
                        <p className="ms-5">
                            <span className="text-danger">Multiple Modules</span> | <span id="Bold">Not Available until</span> May 13 at 12:00am  |<br/>
                            <span id="Bold">Due</span> May 20 at 11:59pm  | 100 pts
                        </p>
                    </li>

                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-1 mt-3 fs-3" />
                        <PiNotePencilDuotone className="text-success"
                            style={{fontSize: "25px"}}/>

                        <a id="wd-assignment-link"
                            className="ms-3 fw-bold fs-5 text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/333">
                            A3
                            <LessonControlButtons />
                        </a>
                        <p className="ms-5">
                            <span className="text-danger">Multiple Modules</span> | <span id="Bold">Not Available until</span> May 20 at 12:00am  |<br/>
                            <span id="Bold">Due</span> May 27 at 11:59pm  | 100 pts
                        </p>
                    </li>
           
            </ul>
            </ul>
        </div>
    );
}