import { LectureSelectedState } from "@./Atom";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LecturesState } from "../../../Atom";
import { AccordianContent, AccordianContents, AccordianOpenButton, AccordianWrap, LinkStyle, OpenButtonWrap } from "./style";

const NavigationAccordian = ({ actived, setActived, index, text, link }) => {
  const [AccordianActived, setAccordianActived] = useState(false);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const lectures = useRecoilValue(LecturesState);

  const outsideRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        setAccordianActived(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [outsideRef, setAccordianActived]);

  return (
    <AccordianWrap ref={outsideRef} actived={AccordianActived} numRows={lectures.length}>
      <OpenButtonWrap
        AccordianActive={AccordianActived}
        actived={actived}
        index={index}
        onClick={() => { setAccordianActived(prev => !prev) }}
      >
        <AccordianOpenButton>
          {text}
        </AccordianOpenButton>
      </OpenButtonWrap>
      <AccordianContents actived={AccordianActived} numRows={lectures.length}>
        {lectures.map((element, lecIndex) => {
          return (
            <>
              <LinkStyle
                to={link}
                onClick={() => {
                  setSelectedLecture(element.ID);
                }}
                key={lecIndex}
              >
                <AccordianContent
                  actived={actived}
                  index={lecIndex + 5}
                  onClick={() => { setActived(lecIndex + 5) }}
                >
                  {element.name}
                </AccordianContent>
              </LinkStyle>
            </>
          )
        })}
      </AccordianContents>
    </AccordianWrap>
  )
}

export default NavigationAccordian;