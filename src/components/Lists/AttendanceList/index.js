import { AttendanceChart, AttendanceChartChild, ListBox, ListTitle, ListWrap, TitleText } from "./style";

const RenderChart = ({ list }) => {
  let maxDayOfWeek = 0;
  if(list !== undefined){
    for(let i = 0; i < list.length; i++){
      if(list[i].length > maxDayOfWeek) maxDayOfWeek = list[i].length;
    }
  }
  let gridItems = [];
  for(let weekIndex = 0; weekIndex < 16; weekIndex++){
    gridItems.push(
      <AttendanceChartChild
        row={1}
        column={weekIndex + 1}
      >
        {weekIndex + 1}주차
      </AttendanceChartChild>
    )
    for(let dayIndex = 0; dayIndex < maxDayOfWeek; dayIndex++){
      if(list[weekIndex] === undefined || list[weekIndex][dayIndex] === undefined){
        gridItems.push(
          <AttendanceChartChild
            row={dayIndex + 2}
            column={weekIndex + 1}
          />
        )
      }else{
        const day = list[weekIndex][dayIndex];
        gridItems.push(
          <AttendanceChartChild
            row={dayIndex + 2}
            column={weekIndex + 1}
            value={day}
          >
            {day === 1 ?
                "O"
              :
              (day === 0 ?
                  "X"
                :
                (day === 0.6 ?
                  "L"
                :
                  "E"))}
          </AttendanceChartChild>
        )
      }
    }
  }
  return(
    <AttendanceChart
      rows={maxDayOfWeek}
      columns={16}
    >
      {gridItems.map((e)=>{return e;})}
    </AttendanceChart>
  )
}

const AttendanceList = ({ listTitle, list, height, width }) => {
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          {listTitle}
        </TitleText>
      </ListTitle>
      <ListBox>
        <RenderChart list={list}/>
      </ListBox>
    </ListWrap>
  )
}

export default AttendanceList;