import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FacultyLectureSelectedState } from './../../../../Atom';
import { Form, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, PageWrap, PostButton, PostButtonWrap, PostCon, PostConWrap, PostInput, Select } from "./style";

const FacultyGradeManagePage = () => {
  const [students, setStudents] = useState([]);
  const selectedLecture = useRecoilValue(FacultyLectureSelectedState);
  const [reqBody, setReqBody] = useState([]);
  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/enrolllist?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setStudents(res.data);
    }
    fetchAssignment().then(
      () => {
        setReqBody([]);
        students.forEach((student) => {
          let temp = reqBody
          temp.push({
            ID : student.ID,
            midTerm : 0,
            finTerm : 0,
            Term : "A+"
          })
          setReqBody(temp)
        })
      }
    );
  }, [ selectedLecture ])
  

  const gradeList = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"]
  return (
    <PageWrap>
    <Form>
      <ListWrap>
        <ListTitleRow>
          <ListTitle>강의 성적 관리</ListTitle>
          <PostButtonWrap>
            <PostButton
              value="저장"
              onClick={() => {
                console.log(reqBody);
              }}
            />
          </PostButtonWrap>
        </ListTitleRow>
        <ListHeader>
          <PostConWrap>
            <PostCon>학번</PostCon>
            <PostCon>이름</PostCon>
            <PostCon>중간고사 성적</PostCon>
            <PostCon>기말고사 성적</PostCon>
            <PostCon>최종 성적</PostCon>
          </PostConWrap>
        </ListHeader>
        <ListBody>
          {
            students.map((student, studentIndex) => {
              return (
                <ListRow>
                  <PostConWrap>
                    <PostCon>{student.ID}</PostCon>
                    <PostCon>{student.name}</PostCon>
                    <PostCon>
                      <PostInput 
                        type="number"
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }}
                        maxLength={3}
                      />
                    </PostCon>
                    <PostCon>
                      <PostInput
                        type="number"
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }}
                        maxLength={3}
                      />
                    </PostCon>
                    <PostCon>
                      <Select name="">
                        {gradeList.map(e=>{
                          return(
                            <option>{e}</option>
                          )
                        })}
                      </Select>
                    </PostCon>
                  </PostConWrap>
                </ListRow>
              )
            })
          }
        </ListBody>
      </ListWrap>
          </Form>
    </PageWrap>
  )
}

export default FacultyGradeManagePage;