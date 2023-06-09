import { StudentNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { useRecoilState } from "recoil";
import NavigationAccordian from '../../Accordian/NavigationAccordian';
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";

const StudentNavigation = () => {
  const [actived, setActived] = useRecoilState(StudentNavigationState);
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
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={1}
            text={"시간표 / 강의목록"}
            link={"student/timetable"}
          />
          <NavigationAccordian
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
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={3}
            text={"수강 관리"}
            link={"student/lecturemanage"}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={4}
            text={"개인정보 관리"}
            link={"student/mypage"}
          />
        </ButtonWrap>
      </NavigationBar>
    </NavigationWrap>
  )
}

export default StudentNavigation;