import NavigationButton from "@components/Buttons/NavigationButton";
import { Header, NavigationBar } from "./style";


const StudentNavigation = () => {
    return(
        <Header>
        <NavigationBar>
            <NavigationButton text={"MAIN"} link={"student"}/>
            <NavigationButton text={"시간표"} link={"student/timetable"}/>
            <NavigationButton text={"수강 중인 강의"} link={"student/lecturelist"}/>
            <NavigationButton text={"수강 관리"} link={"student/lecturemanage"}/>
            <NavigationButton text={"로그아웃"} link={""}/>
        </NavigationBar>
        </Header>
    )
}

export default StudentNavigation;