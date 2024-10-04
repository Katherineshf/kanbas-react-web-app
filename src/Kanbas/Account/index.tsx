import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
    return (
        <div id="wd-account-screen" className="float-md-start">
            <div className="float-md-start">
                <AccountNavigation />
            </div>
            <div className="float-md-start">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>

        </div>
    );
}