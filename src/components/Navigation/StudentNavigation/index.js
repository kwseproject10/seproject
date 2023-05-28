import NavigationButton from "@components/Buttons/NavigationButton";
import { ButtonWrap, NavigationBar, NavigationWrap } from "./style";
import { useState } from "react";


const StudentNavigation = () => {
    const [ actived, setActived ] = useState(0);
    return (
        <NavigationWrap>
            <NavigationBar>
                <ButtonWrap>
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={0}
                        text={"전체보기"}
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
                        text={"수강 관리"}
                        link={"student/lecturemanage"}
                    />
                    <NavigationButton
                        actived={actived}
                        setActived={setActived}
                        index={4}
                        text={"수강 관리"}
                        link={"student/lecturemanage"}
                    />
                </ButtonWrap>
            </NavigationBar>
        </NavigationWrap>
    )
}

export default StudentNavigation;