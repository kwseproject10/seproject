import { Line, LinkStyle, NavigationButtonStyle} from "./style";

const NavigationButton = ({ actived, setActived, index, text, link }) => {
    return(
          <LinkStyle to={`/${link}`}>
              <NavigationButtonStyle
                  actived={actived}
                  index={index}
                  onClick={() => {setActived(index)}}
              >
                  {text}
              </NavigationButtonStyle>
          </LinkStyle>
    )
}

export default NavigationButton;