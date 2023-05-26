import { useSetRecoilState } from "recoil";
import NavigationButton from "../Buttons/NavigationButton";
import { Header, NavigationBar } from "./style";
import { AuthState } from "@./Atom";


const Navigation = () => {
    const setAuth = useSetRecoilState(AuthState);
    return(
        <Header>
        <NavigationBar>
            <NavigationButton text={"MAIN"} link={"homeS"}/>
            <NavigationButton text={"시간표"} link={"TT"}/>
            <NavigationButton text={"수강 중인 강의"} link={"LL"}/>
            <NavigationButton text={"수강 관리"} link={"SLM"}/>
            <NavigationButton text={"로그아웃"} link={""} onClick={() => {setAuth(false)}}/>
        </NavigationBar>
        </Header>
    )
}

export default Navigation;