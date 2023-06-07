import { FacultyNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";
import { useRecoilState } from "recoil";
import NavigationAccordian from '../../Accordian/NavigationAccordian';


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
            text={"시간표"}
            link={"faculty/timetable"}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={2}
            text={"강의 목록"}
            link={"faculty/lecturelist"}
          />
          <NavigationAccordian
            actived={actived}
            setActived={setActived}
            index={3}
            text={"개별강의종합"}
            link={"faculty/lecturedetail"}
          />
        </ButtonWrap>
      </NavigationBar>
    </NavigationWrap>
  )
}

export default FacultyNavigation;