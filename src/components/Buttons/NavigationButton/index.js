import { LinkStyle, NavigationButtonStyle } from "./style";

const NavigationButton = ({ onClick = () => {}, actived, setActived, index, text, link, setAccordianActived }) => {
  return (
    <LinkStyle to={`/${link}`}>
      <NavigationButtonStyle
        actived={actived}
        index={index}
        onClick={() => {
          setActived(index);
          setAccordianActived(false);
          onClick();
        }}
      >
        {text}
      </NavigationButtonStyle>
    </LinkStyle>
  )
}

export default NavigationButton;