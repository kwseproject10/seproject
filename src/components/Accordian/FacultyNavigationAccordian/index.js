import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FacultyNavigationAccordianActivedState } from "../../../Atom";
import { AccordianContent, AccordianContents, AccordianOpenButton, AccordianWrap, LinkStyle, OpenButtonWrap } from "./style";

const FacultyNavigationAccordian = ({ actived, setActived, index, text, link }) => {
  const [AccordianActived, setAccordianActived] = useRecoilState(FacultyNavigationAccordianActivedState);
  const menus = [
    {
      ID: "1",
      name: "강의계획서 관리"
    },
    {
      ID: "2",
      name: "공지사항 관리"
    },
    {
      ID: "3",
      name: "자료실 관리"
    },
    {
      ID: "4",
      name: "과제 관리"
    },
    {
      ID: "5",
      name: "출석 관리"
    },
    {
      ID: "6",
      name: "시험 관리"
    },
    {
      ID: "7",
      name: "성적 관리"
    }
  ];
  const setFacultyNavigationAccordian = useSetRecoilState(FacultyNavigationAccordianActivedState);

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
    <AccordianWrap actived={AccordianActived} numRows={menus.length}>
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
      <AccordianContents actived={AccordianActived} numRows={menus.length}>
        {menus.map((element, lecIndex) => {
          return (
            <>
              <LinkStyle
                to={link}
                onClick={() => {
                  setFacultyNavigationAccordian(element.ID);
                }}
                key={lecIndex}
              >
                <AccordianContent
                  actived={actived}
                  index={lecIndex + 4}
                  onClick={() => { setActived(lecIndex + 4) }}
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

export default FacultyNavigationAccordian;