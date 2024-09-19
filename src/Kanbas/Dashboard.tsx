import { Link } from "react-router-dom";
export default function Dashboard() {
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Course (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 2 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5610/Home">
                        <img src="/images/webdev.jpg" width={200} height={100}/>
                        <div>
                            <h5>
                                CS5610 Web Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 3 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5800/Home">
                        <img src="/images/algorithm1.jpg" width={200} height={100} />
                        <div>
                            <h5>
                                CS5800 Algorithm
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 4 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5008/Home">
                        <img src="/images/algorithm2.jpg" width={200} height={100} />
                        <div>
                            <h5>
                                CS5008 Algorithms
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithm and its application in C
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 5 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5002/Home">
                        <img src="/images/discrete.jpg" width={200} height={100}/>
                        <div>
                            <h5>
                                CS5002 Discrete Structures
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete structures
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 6 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5001/Home">
                        <img src="/images/python.jpg" width={200} height={100}/>
                        <div>
                            <h5>
                                CS5001 Python
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intensive Foundation
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                {/* Course 7 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/5007/Home">
                        <img src="/images/java.jpg" width={200} height={100}/>
                        <div>
                            <h5>
                                CS5007 Java
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Java
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}