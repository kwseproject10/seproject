import { LinkStyle, NavigationButtonStyle } from "./style";

const NavigationButton = ({ actived, setActived, index, text, link, onClick }) => {
  return (
    <LinkStyle to={`/${link}`}>
      <NavigationButtonStyle
        actived={actived}
        index={index}
        onClick={() => {
          setActived(index);
          onClick();
        }}
      >
        {text}
      </NavigationButtonStyle>
    </LinkStyle>
  )
}

export default NavigationButton;