import { FacultyNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FacultyNavigationAccordianActivedState } from '../../../Atom';
import FacultyNavigationAccordian from '../../Accordian/FacultyNavigationAccordian';
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";


const FacultyNavigation = () => {
  const [actived, setActived] = useRecoilState(FacultyNavigationState);
  const setAccordianActived = useSetRecoilState(FacultyNavigationAccordianActivedState);
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
            setAccordianActived={setAccordianActived}
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
            index={2}
            text={"강의 개설"}
            link={"faculty/createlecture"}
            setAccordianActived={setAccordianActived}
          />
          <NavigationButton
            actived={actived}
            setActived={setActived}
            index={3}
            text={"개인정보 관리"}
            link={"faculty/mypage"}
            setAccordianActived={setAccordianActived}
          />
        </ButtonWrap>
      </NavigationBar>
    </NavigationWrap>
  )
}

export default FacultyNavigation;