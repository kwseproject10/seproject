import NavigationButton from "../Buttons/NavigationButton";
import { NavigationBar } from "./style";


const Navigation = () => {
    return(
        <NavigationBar>
            <NavigationButton text={"MAIN"}/>
            <NavigationButton text={"시간표"}/>
            <NavigationButton text={"수강 중인 강의"}/>
            <NavigationButton text={"수강 관리"}/>
            <NavigationButton text={"로그아웃"}/>
        </NavigationBar>
    )
}

export default Navigation;