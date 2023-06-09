import { FacultyNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { useRecoilState } from "recoil";
import FacultyNavigationAccordian from '../../Accordian/FacultyNavigationAccordian';
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";


const FacultyNavigation = () => {
  const [actived, setActived] = useRecoilState(FacultyNavigationState);
  return (
    <NavigationWrap>
      <NavigationBar>
        <ButtonWrap>
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={0}
            text={"MAIN"}
            link={"faculty"}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={1}
            text={"시간표 / 강의 목록"}
            link={"faculty/timetable"}
          />
          <FacultyNavigationAccordian
            actived={actived}
            setActived={setActived}
            index={4}
            text={"강의 관리"}
            link={"manage"}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={3}
            text={"개인정보 관리"}
            link={"faculty/mypage"}
          />
        </ButtonWrap>
      </NavigationBar>
    </NavigationWrap>
  )
}

export default FacultyNavigation;