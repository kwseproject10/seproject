import NavigationButton from "@components/Buttons/NavigationButton";
import { Header, NavigationBar } from "./style";


const FacultyNavigation = () => {
    return(
        <Header>
        <NavigationBar>
            <NavigationButton text={"MAIN"} link={"faculty"}/>
            <NavigationButton text={"시간표"} link={"faculty/timetable"}/>
            <NavigationButton text={"개설된 강의"} link={"faculty/lecturelist"}/>
            <NavigationButton text={"강의 관리"} link={"faculty/lecturemanage"}/>
            <NavigationButton text={"로그아웃"} link={""}/>
        </NavigationBar>
        </Header>
    )
}

export default FacultyNavigation;