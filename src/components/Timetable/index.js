import { useState } from "react";
import DropDown from "../DropDown";
import { Cell, HeaderLeft, HeaderRight, HeaderText, LectureTP, LectureTitle, Table, TableBox, TableHeader, TableWrap, Tbody, Td, Th, Thead, Tr } from "./Style";

const RenderBody = ({ lectures }) => {
  let cells = {
    1 : [{},{},{},{},{},{}],
    2 : [{},{},{},{},{},{}],
    3 : [{},{},{},{},{},{}],
    4 : [{},{},{},{},{},{}],
    5 : [{},{},{},{},{},{}],
    6 : [{},{},{},{},{},{}]
  };
  let classes = new Set([1,2,3,4,5,6]);
  const dates = ['월','화','수','목','금','토', '일'];
  for(let i = 0; i < lectures.length; i++){
    const name = lectures[i].name;
    const time = lectures[i].time;
    const place = lectures[i].place;
    for(let j = 0; j < time.length; j++){
      const cell = {
        name : name,
        time : time[j],
        place : place[j]
      }
      let classNum = parseInt(cell.time.slice(1));
      if(cells[classNum] === undefined) cells[classNum] = [{},{},{},{},{},{}];
      let classDate = dates.indexOf(cell.time[0]);
      cells[classNum][classDate] = cell;
      classes.add(classNum);
    }
  }

  let Rows = [];
  let classArr = [ ...classes ].sort();
  for(let i = 0; i < classArr.length; i++){
    let Row = [];
    const nowCell = cells[classArr[i]];
    Row.push(<Td>{i + 1}교시</Td>)
    nowCell.forEach((e,index) => {
      if(Object.keys(e).length > 0){
        console.log(e);
        Row.push(<Td>
          <Cell>
            <LectureTitle>{e.name}</LectureTitle>
            <LectureTP>{e.time} {e.place}</LectureTP>
          </Cell>
        </Td>
        )
      }else{
        Row.push(<Td></Td>)
      }
    })
    Rows.push(<Tr>{Row}</Tr>)
  }

  return(
    <Tbody>{Rows}</Tbody>
  )
}

const TimeTable = ({ selectedSemester, setSelectedSemester, semesters,lectures }) => {
  const date = ['월','화','수','목','금','토'];
  const [ semeseterDropDownisOpen, setSemesterDropDownisOpen ] = useState(false);
  return (
    <TableWrap>
      <TableHeader>
        <HeaderLeft>
          <HeaderText>시간표</HeaderText>
        </HeaderLeft>
        <HeaderRight>
          <DropDown
            state={selectedSemester}
            setState={setSelectedSemester}
            isOpen={semeseterDropDownisOpen}
            setIsOpen={setSemesterDropDownisOpen}
            list={semesters}
            width={"9rem"}
            listWidth={"6.5rem"}
          />
        </HeaderRight>
      </TableHeader>
      <TableBox>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              {date.map((e,i)=>{return(
                <Th key={i}>{e}</Th>
              )})}
            </Tr>
          </Thead>
          <RenderBody lectures={lectures}/>
        </Table>
      </TableBox>
    </TableWrap>
  )
}

export default TimeTable;