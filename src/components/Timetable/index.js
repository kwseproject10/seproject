import { Cell, HeaderLeft, HeaderRight, HeaderText, LectureTP, LectureTitle, Table, TableBox, TableHeader, TableWrap, Tbody, Td, Th, Thead, Tr } from "./Style";

const RenderBody = ({ isDetail, lectures }) => {
  let cells = {
    1 : [{},{},{},{},{},{}],
    2 : [{},{},{},{},{},{}],
    3 : [{},{},{},{},{},{}],
    4 : [{},{},{},{},{},{}],
    5 : [{},{},{},{},{},{}],
    6 : [{},{},{},{},{},{}]
  };
  const times = {
    0 : ["08:00","08:50"],
    1 : ["09:00","10:15"],
    2 : ["10:30","11:45"],
    3 : ["12:00","13:15"],
    4 : ["13:30","14:45"],
    5 : ["15:00","16:15"],
    6 : ["16:30","17:45"],
    7 : ["18:00","18:45"],
    8 : ["18:50","19:35"],
    9 : ["19:40","20:25"],
    10 : ["20:30","21:15"],
    11 : ["21:20","22:05"]
  };
  let classes = new Set([1,2,3,4,5,6]);
  let dates = ['월', '화', '수', '목', '금', '토'];

  for(let i = 0; i < lectures.length; i++){
    const name = lectures[i].name;
    let time = lectures[i].time;
    if(lectures[i].time > 11) time = 12;
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
  for(let i = Math.min(...classes); i < Math.max(...classes) + 1; i++){
    if(classes.has(i)){
      let Row = [];
      const nowCell = cells[i];
      Row.push(<Td key={i}>{i}교시</Td>)
      if(isDetail){
        Row.push(<Td key={i} isDetail={isDetail}>
          {i === 12 ? "" : <div>{times[i][0]}<br/> ~ <br/>{times[i][1]}</div>}          
        </Td>)
      }
      nowCell.forEach((e,index) => {
        if(Object.keys(e).length > 0){
          Row.push(<Td key={i} isDetail={isDetail}>
            <Cell>
              <LectureTitle>{e.name}</LectureTitle>
              <LectureTP>{e.time} {e.place}</LectureTP>
            </Cell>
          </Td>
          )
        }else{
          Row.push(<Td isDetail={isDetail}></Td>)
        }
      })
      Rows.push(<Tr>{Row}</Tr>)
    }
  }

  return(
    <Tbody>{Rows}</Tbody>
  )
}

const TimeTable = ({ selectedSemester, setSelectedSemester, semesters, lectures, isDetail }) => {
  let date = ['월','화','수','목','금','토'];
  if(isDetail) date = ['시간', '월', '화', '수', '목', '금', '토'];
  return (
    <TableWrap>
      <TableHeader>
        <HeaderLeft>
          <HeaderText>시간표</HeaderText>
        </HeaderLeft>
        <HeaderRight>
        </HeaderRight>
      </TableHeader>
      <TableBox>
        <Table>
          <Thead>
            <Tr>
              <Th isDetail={isDetail}>교시</Th>
              {date.map((e,i)=>{return(
                <Th key={i} isDetail={isDetail}>{e}</Th>
              )})}
            </Tr>
          </Thead>
          <RenderBody isDetail={isDetail} lectures={lectures}/>
        </Table>
      </TableBox>
    </TableWrap>
  )
}

export default TimeTable;

/**
  const [ semeseterDropDownisOpen, setSemesterDropDownisOpen ] = useState(false);
  <DropDown
    state={selectedSemester}
    setState={setSelectedSemester}
    isOpen={semeseterDropDownisOpen}
    setIsOpen={setSemesterDropDownisOpen}
    list={semesters}
    width={"9rem"}
    listWidth={"6.5rem"}
  />
 */