import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { toggleShowAllCourses, enrollStudent, unenrollStudent } from "./Account/Enrollment/reducer";


export default function Dashboard({ courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }){
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = db;
    const hasEditAccess = currentUser?.role === "FACULTY";

    const  enrollmentState  = useSelector((state: any) => state.enrollmentReducer);
    const { showAllCourses } = enrollmentState || { enrollments: [], showAllCourses: false };
    const isStudent = currentUser?.role === "STUDENT";

    //const enrolled = enrollments.includes(course._id);
    //const [showEnrollments, setShowEnrollments] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
          (enrollment: any) => 
            enrollment.user === currentUser._id && 
            enrollment.course === courseId
        );
    };
    const handleCourse = (courseId: string) => {
        if (isStudent) {
          const isEnrolled = enrollments.some(
            (enrollment: any) => 
              enrollment.user === currentUser._id && 
              enrollment.course === courseId
          );
          if (!isEnrolled) {
            return;
          }
        }
        navigate(`/Kanbas/Courses/${courseId}/Home`);
      };



    const handleEnroll = (courseId: string) => {
        if (isEnrolled(courseId)) {
          dispatch(unenrollStudent({ userId: currentUser._id, courseId }));
        } else {
          dispatch(enrollStudent({ userId: currentUser._id, courseId }));
        }
    };


    const displayedCourses = showAllCourses || currentUser.role !== "STUDENT"
    ? courses 
    : courses.filter((course) => 
        enrollments.some(
          (enrollment: any) => 
            enrollment.user === currentUser._id && 
            enrollment.course === course._id
        )
      );

    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {hasEditAccess && ( 
                <h5>New Course 
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}>
                        Add
                    </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>)}
            <br/>
            {hasEditAccess && (
                <input defaultValue={course.name} className="form-control mb-2" 
                        onChange={(e) =>setCourse({...course, name: e.target.value})} /> 
            )}
            {hasEditAccess && (
                <textarea defaultValue={course.description} className="form-control"
                        onChange={(e) => setCourse({...course, description: e.target.value})}/>
            )}     
            <br/><br/>

            {isStudent && (
               <button 
               className="btn btn-primary"
               style={{ 
                 backgroundColor: '#0d6efd',
                 borderColor: '#0d6efd',
                 color: 'white',
                 fontWeight: 'bold',
                 padding: '8px 16px',
                 borderRadius: '4px'
               }}
               onClick={() => dispatch(toggleShowAllCourses())}
             >
               {showAllCourses ? "Show Enrolled" : "Show All Courses"}
             </button>
            )} <br/> <br/>


            <h2 id="wd-dashboard-published">Published Course ({displayedCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.filter((course) => enrollments.some((enrollment: { user: any; course: any; }) => 
                        enrollment.user === currentUser._id && enrollment.course === course._id))
                    .map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src="/images/reactjs.jpg" alt="react" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{maxHeight: 100}}>
                                            {course.description}
                                        </p>



                                        <div className="d-flex justify-content-between align-items-center">
                                            {/**
                                             * <button 
                                                className="btn btn-primary"
                                                onClick={() => handleCourse(course._id)}
                                               >
                                                View
                                             </button>
                                             */}
                                            {isStudent && (
                                                <button 
                                                className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                                                onClick={() => handleEnroll(course._id)}
                                                >
                                                {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                                                </button>
                                            )}


                                            <button className="btn btn-primary"> Go </button>
                                        

                                            {hasEditAccess && (
                                                <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                        }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                </button>
                                            )}
                                            {hasEditAccess && (
                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}className="btn btn-warning me-2 float-end" >
                                                        Edit
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}