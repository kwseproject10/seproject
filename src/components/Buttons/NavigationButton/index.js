import { LinkStyle, NavigationButtonStyle } from "./style";

const NavigationButton = ({text, link, onClick = () => {} }) => {
    
    return(
        <LinkStyle to={`/${link}`}>
            <NavigationButtonStyle onClick={() => {onClick()}}>
                {text}
            </NavigationButtonStyle>
        </LinkStyle>
    )
}

export default NavigationButton;