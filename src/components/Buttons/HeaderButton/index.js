import { HeaderButtonStyle, LinkStyle } from "./style";

const HeaderButton = ({ text, link, onClick = () => {} }) => {
  return(
    <LinkStyle to={`/${link}`}>
        <HeaderButtonStyle onClick={() => {onClick()}}>
            {text}
        </HeaderButtonStyle>
    </LinkStyle>
  )
}

export default HeaderButton;