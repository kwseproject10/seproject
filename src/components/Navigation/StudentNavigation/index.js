import { StudentNavigationState } from '@./Atom';
import NavigationButton from "@components/Buttons/NavigationButton";
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";
import { useRecoilState } from "recoil";


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
                        text={"시간표"}
                        link={"student/timetable"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={2}
                        text={"수강 중인 강의"}
                        link={"student/lecturelist"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={3}
                        text={"강의종합"}
                        link={"student/lecturedetail"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={4}
                        text={"성적 조회"}
                        link={"student/credit"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={5}
                        text={"수강 관리"}
                        link={"student/lecturemanage"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={6}
                        text={"MYPAGE"}
                        link={"student/mypage"}
                    />
                </ButtonWrap>
            </NavigationBar>
        </NavigationWrap>
    )
}

export default StudentNavigation;