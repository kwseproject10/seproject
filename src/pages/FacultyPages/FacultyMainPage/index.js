import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FacultyLectureSelectedState, FacultyLecturesState, FacultySelectedLectureNameState, userIDState } from "../../../Atom";
import FacultyLectureList from "../../../components/Lists/FacultyLectureList";
import FacultyTimeTable from './../../../components/TimeTable/FacultyTimeTable/index';
import { LectureListWrap, PageRow, TimeTablePageWrap } from "./style";

const FacultyMainPage = () => {
  const [lectures, setLectures] = useRecoilState(FacultyLecturesState);
  const setSelectedLectureID = useSetRecoilState(FacultyLectureSelectedState);
  const userID = useRecoilValue(userIDState);
  const setSelectedLectureName = useSetRecoilState(FacultySelectedLectureNameState);
  
  useEffect(() => {
    const fetchAssignment = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/professorlectures?userID=${userID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
          {
              "key": "0",
              "name": "소프트웨어공학",
              "professor": "이기훈",
              "major": "컴퓨터정보공학부",
              "type": "전선",
              "credit": "3",
              "numOfTime": "3",
              "time": [
                  "월5",
                  "수6"
              ],
              "place": [
                  "새빛205",
                  "새빛205"
              ],
              "ID": "H020-4-0846-01"
          },
          {
              "key": "0",
              "name": "디지털논리회로1",
              "professor": "유지현",
              "major": "컴퓨터정보공학부",
              "type": "전필",
              "credit": "3",
              "numOfTime": "3",
              "time": [
                  "금5",
                  "금6"
              ],
              "place": [
                  "새빛203",
                  "새빛203"
              ],
              "ID": "H020-2-0453-01"
          },
          {
              "key": "0",
              "name": "신호및시스템",
              "professor": "이성원",
              "major": "컴퓨터정보공학부",
              "type": "전선",
              "credit": "3",
              "numOfTime": "3",
              "time": [
                  "월4",
                  "수3"
              ],
              "place": [
                  "새빛102",
                  "새빛102"
              ],
              "ID": "H020-3-2004-01"
          },
          {
              "key": "0",
              "name": "임베디드시스템S/W설계",
              "professor": "김태석",
              "major": "컴퓨터정보공학부",
              "type": "전선",
              "credit": "3",
              "numOfTime": "3",
              "time": [
                  "월6",
                  "수5"
              ],
              "place": [
                  "새빛205",
                  "새빛205"
              ],
              "ID": "H020-4-5861-01"
          },
          {
              "key": "0",
              "name": "머신러닝",
              "professor": "박철수",
              "major": "컴퓨터정보공학부",
              "type": "전선",
              "credit": "3",
              "numOfTime": "3",
              "time": [
                  "월3",
                  "수4"
              ],
              "place": [
                  "새빛203",
                  "새빛203"
              ],
              "ID": "H020-4-8483-01"
          }
      ]
      }
      if(res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setLectures(res.data);
      if(res.data !== undefined){
        setSelectedLectureID(res.data[0].ID)
        setSelectedLectureName(res.data[0].name);
      }
    }
    fetchAssignment();
  }, [ userID, setLectures, setSelectedLectureID, setSelectedLectureName ])
  return(
      <TimeTablePageWrap>
        <PageRow>
          <FacultyTimeTable
            lectures={lectures}
            isDetail={true}
          />
          <LectureListWrap>
            <FacultyLectureList
              lectures={lectures}
            />
          </LectureListWrap>
        </PageRow>
      </TimeTablePageWrap>
  )
}

export default FacultyMainPage;