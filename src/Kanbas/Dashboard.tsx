import { Link } from "react-router-dom";
export default function Dashboard() {
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Course (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" alt="react" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Course 2 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5610/Home">
                                <img src="/images/webdev.jpg" alt="web dev" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5610 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Course 3 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5800/Home">
                                <img src="/images/algorithm1.jpg" alt="algorithm" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5800 Algorithm
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Algorithms
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Course 4 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to="/Kanbas/Courses/5008/Home">
                                <img src="/images/algorithm2.jpg" alt="algorithm" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5008 Algorithms
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Algorithm and its application in C
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>                
                    </div>
                    {/* Course 5 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5002/Home">
                                <img src="/images/discrete.jpg" alt="discrete" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5002 Discrete Structures
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Discrete structures
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Course 6 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5001/Home">
                                <img src="/images/python.jpg" alt="python" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5001 Python
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intensive Foundation
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Course 7 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5007/Home">
                                <img src="/images/java.jpg" alt="java" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5007 Java
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Java
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}