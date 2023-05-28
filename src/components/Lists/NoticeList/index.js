import { useState } from "react";
import { Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";
import { useEffect } from "react";

const NoticeList = () => {
  const [ notices, setNotices ] = useState([]);

  const loadNotices = () => {
    setNotices([
      {
        key: "0",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)"
      },
      {
        key: "1",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)"
      },
      {
        key: "2",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)"
      },
      {
        key: "3",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)"
      },
      {
        key: "4",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)"
      }
    ])
  }
  useEffect(loadNotices,[])
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          강의 공지사항
        </TitleText>
      </ListTitle>
      <ListBox>
        {notices.map((element,index)=>{
          return(
            <ListRow>
              <Left>
                <NoticeTitle>{
                  element.title.length > 30 ?
                    element.title.slice(0,29) + "..."
                  :
                    element.title
                }</NoticeTitle>
                <NoticeSubject>{element.subject}</NoticeSubject>
              </Left>
              <Right>
                {element.date}
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default NoticeList;