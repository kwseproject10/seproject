import { useSetRecoilState } from "recoil";
import { AccordianContent, AccordianContents, AccordianOpenButton, AccordianWrap, LinkStyle, OpenButtonWrap } from "./style";
import { useRef, useState } from "react";
import { LectureSelectedState } from "@./Atom";
import { useEffect } from "react";

const NavigationAccordian = ({ actived, setActived, index, text }) => {
  const [AccordianActived, setAccordianActived] = useState(false);
  const [lecturesName, setLecturesName] = useState([]);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);

  //API call
  const loadLecturesName = () => {
    setLecturesName([
      {
        name: "소프트웨어공학",
        ID: "H020-4-0846-01"
      },
      {
        name: "디지털논리회로1",
        ID: "H020-2-0453-01"
      },
      {
        name: "신호및시스템",
        ID: "H020-3-2004-01"
      },
      {
        name: "임베디드시스템S/W설계",
        ID: "H020-4-5861-01"
      },
      {
        name: "머신러닝",
        ID: "H020-4-8483-01"
      }
    ]);
  }

  useEffect(loadLecturesName, []);

  const outsideRef = useRef(null);
  useEffect(()=> {
      function handleClickOutside(e){
          if(outsideRef.current && !outsideRef.current.contains(e.target)){
                  setAccordianActived(false);
          }
      }
      document.addEventListener("click", handleClickOutside);

      return () => {
          document.removeEventListener("click", handleClickOutside);
      };
  }, [outsideRef, setAccordianActived]);

  return (
    <AccordianWrap ref={outsideRef} actived={AccordianActived} numRows={lecturesName.length}>
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
      <AccordianContents  actived={AccordianActived} numRows={lecturesName.length}>
        {lecturesName.map((element, lecIndex) => {
          return (
            <>
              <LinkStyle
                to={`/student/lecturedetail`}
                onClick={() => {
                  setSelectedLecture(element.ID);
                }}
                key={lecIndex}
              >
                <AccordianContent
                  actived={actived}
                  index={lecIndex + 5}
                  onClick={() => {setActived(lecIndex + 5)}}
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