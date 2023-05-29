import { FacultyNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";
import { useRecoilState } from "recoil";


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
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={3}
                        text={"강의 관리"}
                        link={"faculty/lecturemanage"}
                    />
                </ButtonWrap>
            </NavigationBar>
        </NavigationWrap>
    )
}

export default FacultyNavigation;