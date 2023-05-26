import { Link } from "react-router-dom";
import { NavigationButtonStyle } from "./style";

const NavigationButton = ({text, link, onClick = () => {} }) => {
    
    return(
        <NavigationButtonStyle onClick={() => {onClick()}}>
            <Link to={`/${link}`}>{text}</Link>
        </NavigationButtonStyle>
    )
}

export default NavigationButton;