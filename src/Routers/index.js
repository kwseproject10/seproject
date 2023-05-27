import { Route, Routes } from "react-router-dom"

import SignPages from "@pages/SignPages";
import LoginPage from "@pages/SignPages/LoginPage";
import SignUpPage from "@pages/SignPages/SignUpPage";

import StudentPages from "@pages/StudentPages";
import StudentMainPage from "@pages/StudentPages/StudentMainPage";
import StudentLectureListPage from "@pages/StudentPages/StudentLectureListPage";
import StudentLectureManagePage from "@pages/StudentPages/StudentLectureManagePage";
import StudentTimeTablePage from "@pages/StudentPages/StudentTimeTablePage";

import FacultyPages from "@pages/FacultyPages";
import FacultyMainPage from "@pages/FacultyPages/FacultyMainPage";
import FacultyLectureListPage from "@pages/FacultyPages/FacultyLectureListPage";
import FacultyLectureManagePage from "@pages/FacultyPages/FacultyLectureManagePage";
import FacultyTimeTablePage from "@pages/FacultyPages/FacultyTimeTablePage";

import ErrorPage from "@pages/ErrorPage";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<SignPages/>}>
                <Route path="" element={<LoginPage/>}></Route>
                <Route path="signup" element={<SignUpPage/>}></Route>
            </Route>
            <Route path="/student" element={<StudentPages/>}>
                <Route path="" element={<StudentMainPage/>}></Route>
                <Route path="lecturelist" element={<StudentLectureListPage/>}></Route>
                <Route path="lecturemanage" element={<StudentLectureManagePage/>}></Route>
                <Route path="timetable" element={<StudentTimeTablePage/>}></Route>
            </Route>
            <Route path="/faculty" element={<FacultyPages/>}>
                <Route path="" element={<FacultyMainPage/>}></Route>
                <Route path="lecturelist" element={<FacultyLectureListPage/>}></Route>
                <Route path="lecturemanage" element={<FacultyLectureManagePage/>}></Route>
                <Route path="timetable" element={<FacultyTimeTablePage/>}></Route>
            </Route>
            <Route path="/*" element={<ErrorPage/>}></Route>
        </Routes>
    )
}

export default Routers;