import NavigationButton from "../Buttons/NavigationButton";
import { NavigationBar } from "./Style";


const Navigation = () => {
    return(
        <NavigationBar>
            <NavigationButton text={"BUTTON1"}/>
            <NavigationButton text={"BUTTON2"}/>
            <NavigationButton text={"BUTTON3"}/>
            <NavigationButton text={"BUTTON4"}/>
            <NavigationButton text={"BUTTON5"}/>
        </NavigationBar>
    )
}

export default Navigation;