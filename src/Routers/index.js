import { Navigate, Route, Routes } from "react-router-dom";

import SignPages from "@pages/SignPages";
import LoginPage from "@pages/SignPages/LoginPage";
import SignUpPage from "@pages/SignPages/SignUpPage";

import StudentPages from "@pages/StudentPages";
import StudentCreditPage from "@pages/StudentPages/StudentCreditPage";
import StudentLectureDetailPage from "@pages/StudentPages/StudentLectureDetailPage";
import StudentLectureManagePage from "@pages/StudentPages/StudentLectureManagePage";
import StudentMainPage from "@pages/StudentPages/StudentMainPage";
import StudentMyPage from "@pages/StudentPages/StudentMyPage";
import StudentTimeTablePage from "@pages/StudentPages/StudentTimeTablePage";

import FacultyPages from "@pages/FacultyPages";
import FacultyMainPage from "@pages/FacultyPages/FacultyMainPage";
import FacultyManagePages from "@pages/FacultyPages/FacultyManagePages";
import FacultyMyPage from '@pages/FacultyPages/FacultyMyPage';

import ErrorPage from "@pages/ErrorPage";
import { useRecoilValue } from "recoil";
import { AuthState, signUpState } from "../Atom";
import FacultyLectureCreatePage from "../pages/FacultyPages/FacultyLectureCreatePage";

const Routers = () => {
  const auth = useRecoilValue(AuthState);
  const signUp = useRecoilValue(signUpState);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignPages />}>
          <Route path="" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
        </Route>
        <Route path="/student" element={<StudentPages />}>
          <Route path="" element={<StudentMainPage />}></Route>
          <Route path="timetable" element={<StudentTimeTablePage />}></Route>
          <Route path="credit" element={<StudentCreditPage />}></Route>
          <Route path="mypage" element={<StudentMyPage />}></Route>
          <Route path="lecturedetail" element={<StudentLectureDetailPage />}></Route>
          <Route path="lecturemanage" element={<StudentLectureManagePage />}></Route>
        </Route>
        <Route path="/faculty" element={<FacultyPages />}>
          <Route path="" element={<FacultyMainPage />}></Route>
          <Route path="manage" element={<FacultyManagePages />}></Route>
          <Route path="mypage" element={<FacultyMyPage />}></Route>
          <Route path="createlecture" element={<FacultyLectureCreatePage />}></Route>
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {auth ? "" :
        (
          signUp ?
            <Navigate to="/signup" />
            :
            <Navigate to="/" />
        )
      }
    </>
  )
}

export default Routers;