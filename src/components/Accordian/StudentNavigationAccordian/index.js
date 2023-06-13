import { LectureSelectedState } from "@./Atom";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { LecturesState, StudentNavigationAccordianActivedState } from "../../../Atom";
import { AccordianContent, AccordianContents, AccordianOpenButton, AccordianWrap, LinkStyle, OpenButtonWrap } from "./style";

const StudentNavigationAccordian = ({ actived, setActived, index, text, link }) => {
  const [AccordianActived, setAccordianActived] = useRecoilState(StudentNavigationAccordianActivedState);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const lectures = useRecoilValue(LecturesState);

  //외부 클릭시 아코디언 닫히도록. 이거 nav 안에서 작동하도록 ref 수정해야함. 아니면 외부 컴포넌트에서 이거 온클릭으로 열었을 때는 작동 안하도록
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
    <AccordianWrap actived={AccordianActived} numRows={lectures.length}>
      <OpenButtonWrap
        actived={actived}
        index={index}
        onClick={() => { setAccordianActived(prev => !prev) }}
      >
        <AccordianOpenButton
          accordianActived={AccordianActived}
          actived={actived}
          index={index}
        >
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

export default StudentNavigationAccordian;