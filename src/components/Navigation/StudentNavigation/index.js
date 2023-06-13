import { StudentNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { StudentNavigationAccordianActivedState } from '../../../Atom';
import StudentNavigationAccordian from '../../Accordian/StudentNavigationAccordian';
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";

const StudentNavigation = () => {
  const [actived, setActived] = useRecoilState(StudentNavigationState);
  const setAccordianActived = useSetRecoilState(StudentNavigationAccordianActivedState);
  return (
    <NavigationWrap>
      <NavigationBar>
        <ButtonWrap>
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={0}
            text={"MAIN"}
            link={"student"}
            onClick={setAccordianActived}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={1}
            text={"시간표 / 강의목록"}
            link={"student/timetable"}
            onClick={setAccordianActived}
          />
          <StudentNavigationAccordian
            actived={actived}
            setActived={setActived}
            index={5}
            text={"개별강의종합"}
            link={"lecturedetail"}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={2}
            text={"성적 조회"}
            link={"student/credit"}
            onClick={setAccordianActived}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={3}
            text={"수강 관리"}
            link={"student/lecturemanage"}
            onClick={setAccordianActived}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={4}
            text={"개인정보 관리"}
            link={"student/mypage"}
            onClick={setAccordianActived}
          />
        </ButtonWrap>
      </NavigationBar>
    </NavigationWrap>
  )
}

export default StudentNavigation;