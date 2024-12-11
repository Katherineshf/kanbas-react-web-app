import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const {cid} = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
   
    return (
        <div className="d-flex">
            <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map((link, index) => (
                    <Link key={index} to={`/Kanbas/Courses/${cid}/${link}`}
                        className={`list-group-item border border-0 
                            ${pathname.includes(link) ? "text-black" : "text-danger"}`}
                        id="wd-course-home-link">
                        {link}
                    </Link>
                ))}
            </div>
            <div className="flex-grow-1 ms-3">
                <Outlet />
            </div>
        </div>
    );
}