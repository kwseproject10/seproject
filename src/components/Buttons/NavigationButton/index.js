import { LinkStyle, NavigationButtonStyle } from "./style";

const NavigationButton = ({ actived, setActived, index, text, link, setAccordianActived }) => {
  return (
    <LinkStyle to={`/${link}`}>
      <NavigationButtonStyle
        actived={actived}
        index={index}
        onClick={() => {
          setActived(index);
          setAccordianActived(false);
        }}
      >
        {text}
      </NavigationButtonStyle>
    </LinkStyle>
  )
}

export default NavigationButton;