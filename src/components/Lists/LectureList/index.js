import { useState } from "react";
import { Center, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";
import { useEffect } from "react";

const LectureList = () => {
  const [ lectures, setLectures ] = useState([]);

  const loadLectures = () => {
    setLectures([
      {
        key: "0",
        name: "소프트웨어공학",
        professor: "이기훈",
        type: "전공선택",
        time: ["월5","수6"],
        place: ["새빛205","새빛205"],
        ID: "H020-4-0846-01",
      },
      {
        key: "0",
        name: "디지털논리회로1",
        professor: "유지현",
        type: "전공필수",
        time: ["금5","금6"],
        place: ["새빛203","새빛203"],
        ID: "H020-2-0453-01",
      },
      {
        key: "0",
        name: "신호및시스템",
        professor: "이성원",
        type: "전공선택",
        time: ["월4","수3"],
        place: ["새빛102","새빛102"],
        ID: "H020-3-2004-01",
      },
      {
        key: "0",
        name: "임베디드시스템S/W설계",
        professor: "김태석",
        type: "전공선택",
        time: ["월6","수5"],
        place: ["새빛205","새빛205"],
        ID: "H020-4-5861-01",
      },
      {
        key: "0",
        name: "머신러닝",
        professor: "박철수",
        type: "전공선택",
        time: ["월3","수4"],
        place: ["새빛203","새빛203"],
        ID: "H020-4-8483-01",
      },
      {
        key: "0",
        name: "소프트웨어공학",
        professor: "이기훈",
        type: "전공선택",
        time: ["월5","수6"],
        place: ["새빛205","새빛205"],
        ID: "H020-4-0846-01",
      },
      {
        key: "0",
        name: "디지털논리회로1",
        professor: "유지현",
        type: "전공필수",
        time: ["금5","금6"],
        place: ["새빛203","새빛203"],
        ID: "H020-2-0453-01",
      },
      {
        key: "0",
        name: "신호및시스템",
        professor: "이성원",
        type: "전공선택",
        time: ["월4","수3"],
        place: ["새빛102","새빛102"],
        ID: "H020-3-2004-01",
      },
    ])
  }
  useEffect(loadLectures,[])
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          수강 중인 강의
        </TitleText>
      </ListTitle>
      <ListBox>
        {lectures.map((element,index)=>{
          return(
            <ListRow>
              <Left>
                <NoticeTitle>{
                  element.name.length > 30 ?
                    element.name.slice(0,29) + "..."
                  :
                    element.name
                }</NoticeTitle>
                <NoticeSubject>{element.ID}</NoticeSubject>
              </Left>
              <Center>
                <div>
                  {element.professor}
                </div>
                <div>
                  {element.type}
                </div>
              </Center>
              <Right>
                {element.time.map((e, i)=>{
                  return(
                    e + "(" + (element.place[i]) + ")" + (i === element.time.length - 1 ? "" : " / ")
                  )
                })}
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default LectureList;