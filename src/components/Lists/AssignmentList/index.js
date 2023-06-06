import { useState } from "react";
import { Dates, DueDate, EndDate, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, StartDate, TitleText } from "./style";
import { useEffect } from "react";

const AssignmentList = () => {
  const [ assignment, setAssignment ] = useState([]);

  const loadAssignment = () => {
    setAssignment([
      {
        key: "0",
        title: "Implementation of Ripple Carry Adder using Verilog",
        subject: "디지털논리회로1",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "3"
      },
      {
        key: "1",
        title: "3차 프로젝트",
        subject: "소프트웨어공학",
        startDate: "2023.05.10(일)",
        endDate: "2023.06.16(월)",
        due: "6"
      },
      {
        key: "2",
        title: "Term Project",
        subject: "컴퓨터네트워크",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "6"
      },
      {
        key: "3",
        title: "Signal&System HW #5",
        subject: "신호및시스템",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "13"
      },
      {
        key: "4",
        title: "[project]embedded system design on uCOS - final",
        subject: "임베디드시스템S/W설계",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "20"
      }
    ])
  }
  useEffect(loadAssignment,[])
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          미제출 과제 현황
        </TitleText>
      </ListTitle>
      <ListBox>
        {assignment.map((element,index)=>{
          if(index > 4){return ""}
          return(
            <ListRow key={index}>
              <Left>
                <NoticeTitle>{
                  element.title.length > 25 ?
                    element.title.slice(0,24) + "..."
                  :
                    element.title
                }</NoticeTitle>
                <NoticeSubject>{element.subject}</NoticeSubject>
              </Left>
              <Right>
                <DueDate>
                  D-{element.due}
                </DueDate>
                <Dates>
                  <StartDate>
                    {element.startDate}                  
                  </StartDate>
                  <EndDate>
                    {element.endDate}
                  </EndDate>
                </Dates>
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default AssignmentList;