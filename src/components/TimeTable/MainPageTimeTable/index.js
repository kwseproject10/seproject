import TimeTable from "..";
import LectureList from "../../Lists/LectureList";
import { CardWrap, Left, Right } from "./Style";

const MainPageTimeTable = () => {
    return(
      <CardWrap>
        <Left>
          <TimeTable/>
        </Left>
        <Right>
          <LectureList/>
        </Right>
      </CardWrap>
    )
}

export default MainPageTimeTable;