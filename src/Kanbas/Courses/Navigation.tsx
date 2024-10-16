import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
    const { pathname } = useLocation();
    //const { _id } = useParams(); 
    //because in the route, I used "cid", so if I use _id here, it won't be able to recognize it. <Route path="/Courses/:cid/*" element={<Courses />} />
    //that's why it renders: http://localhost:3000/#/Kanbas/Courses/undefind/Assignments
    const {cid} = useParams();
    //console.log(cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link, index) => (
                <Link key = {index} to={`/Kanbas/Courses/${cid}/${link}`}
                    className={`list-group-item border border-0 
                        ${pathname.includes(link) ? "text-black" : "text-danger"}`}
                    id="wd-course-home-link">
                    {link}
                </Link>
            ))}
        </div>
    );
}