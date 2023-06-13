import { useRecoilValue } from "recoil";
import TimeTable from "..";
import { LecturesState } from "../../../Atom";
import LectureList from "../../Lists/LectureList";
import { CardWrap, Left, Right } from "./Style";

const MainPageTimeTable = ({ onClickPlusButton }) => {
  const lectures = useRecoilValue(LecturesState);
  return (
    <CardWrap>
      {
        lectures === [] ?
          ""
          :
          <>
            <Left>
              <TimeTable
                lectures={lectures}
              />
            </Left>
            <Right>
              <LectureList
                lectures={lectures}
                onClickPlusButton={onClickPlusButton}
              />
            </Right>
          </>
      }
    </CardWrap>
  )
}

export default MainPageTimeTable;