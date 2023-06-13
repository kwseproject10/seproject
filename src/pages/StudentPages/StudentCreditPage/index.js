import CreditChart from "@components/Chart/CreditBarChart";
import EnrollmentList from "@components/Lists/EnrollmentList";
import SemesterResultList from "@components/Lists/SemesterResultList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState } from "../../../Atom";
import { Bottom, CreditListPerSemestersVisualized, CreditPageWrap, Middle, Title, TitleRow } from "./style";

const StudentCreditPage = () => {
  const [lecturesEachSemester, setLectureEachSemeters] = useState({});
  const [creditEachSemesters, setCreditEachSemesters] = useState({});
  const [semesters, setSemesters] = useState([]);
  const userID = useRecoilValue(userIDState);

  //load lectures
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/wholelecture?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("load lectures fail");
        return
      } else {
        console.log(res.data);
        setLectureEachSemeters(res.data);
      }
    }

    fetch()
  }, [userID])

  //load semesters
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/semesters?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("load credit fail");
        return
      } else {
        console.log(res.data);
        setSemesters(res.data);
      }
    }

    fetch()
  }, [userID])

  //load credits
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/credit?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("load credit fail");
        return
      } else {
        console.log(res.data.userCredit);
        setCreditEachSemesters(res.data.userCredit);
      }
    }

    fetch()
  }, [userID])

  return (
    <CreditPageWrap>
      <TitleRow>
        <Title>학기별 성적 현황</Title>
      </TitleRow>
      <Middle>
        <SemesterResultList
          semesters={semesters}
          creditEachSemesters={creditEachSemesters}
        />
        <CreditListPerSemestersVisualized>
          <CreditChart
            semesters={semesters}
            creditEachSemesters={creditEachSemesters}
          />
        </CreditListPerSemestersVisualized>
      </Middle>

      <TitleRow>
        <Title>수강 강의 목록</Title>
      </TitleRow>
      <Bottom>
        <EnrollmentList
          semesters={semesters}
          lecturesEachSemester={lecturesEachSemester}
        />
      </Bottom>
    </CreditPageWrap>
  )
}

export default StudentCreditPage;