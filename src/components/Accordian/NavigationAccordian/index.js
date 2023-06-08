import { useRecoilValue, useSetRecoilState } from "recoil";
import { AccordianContent, AccordianContents, AccordianOpenButton, AccordianWrap, LinkStyle, OpenButtonWrap } from "./style";
import { useRef, useState } from "react";
import { LectureSelectedState } from "@./Atom";
import { useEffect } from "react";
import { userIDState } from "../../../Atom";
import { getAPI } from "../../../APIs";

const NavigationAccordian = ({ actived, setActived, index, text }) => {
  const [AccordianActived, setAccordianActived] = useState(false);
  const [lectures, setLectures] = useState([]);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);

  //API call
  const userID = useRecoilValue(userIDState);

  useEffect(() => {
    getAPI(setLectures, 'lecturelist', userID).catch(error => console.log(error))
  }, [ userID ]);

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
      <AccordianContents  actived={AccordianActived} numRows={lectures.length}>
        {lectures.map((element, lecIndex) => {
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