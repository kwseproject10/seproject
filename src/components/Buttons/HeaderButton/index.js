import { AStyle, HeaderButtonStyle, LinkStyle } from "./style";

const HeaderButton = ({ out, text, link, onClick = () => {} }) => {
  return(
    <>
      {out ?
        <AStyle href={link} target='_blank' rel="noreferrer">
          <HeaderButtonStyle onClick={() => {onClick()}}>
              {text}
          </HeaderButtonStyle>
        </AStyle>
        :
        <LinkStyle to={`/${link}`}>
            <HeaderButtonStyle onClick={() => {onClick()}}>
                {text}
            </HeaderButtonStyle>
        </LinkStyle>
      }
    </>
  )
}

export default HeaderButton;