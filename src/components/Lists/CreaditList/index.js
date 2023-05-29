import { useState } from "react";
import { ListBox, ListTitle, ListWrap, Table, Tbody, Td, Th, Thead, TitleText, Tr } from "./style";
import { useEffect } from "react";

const CreditList = () => {
  const [ credits, setCredits ] = useState(
    {
      creditCompleted : {
        major : 33,
        general : 35,
        etc : 41,
        total : 109
      },
      creditInProgress : {
        major : 9,
        general : 3,
        etc : 6,
        total : 18
      },
      creditForGrad : {
        major : 39,
        general : 40,
        etc : 0,
        total : 130
      }
    });
  const [ GPA, setGPA ] = useState({});
  const loadCredit = () => {
    setCredits(
      {
        creditCompleted : {
          major : 33,
          general : 35,
          etc : 41,
          total : 109
        },
        creditInProgress : {
          major : 9,
          general : 3,
          etc : 6,
          total : 18
        },
        creditForGrad : {
          major : 39,
          general : 40,
          etc : 0,
          total : 130
        }
      }
    )
  };
  const loadGPA = () => {

  }

  useEffect(loadCredit,[]);
  useEffect(loadGPA, []);
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          학점 이수 현황
        </TitleText>
      </ListTitle>
      <ListBox>
        {credits === {} ?
          ""
        :
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>취득학점</Th>
                <Th>수강학점</Th>
                <Th>예정학점</Th>
                <Th>졸업학점</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>전공</Td>
                <Td>{credits.creditCompleted.major}</Td>
                <Td>{credits.creditInProgress.major}</Td>
                <Td>{credits.creditCompleted.major + credits.creditInProgress.major}</Td>
                <Td>{credits.creditForGrad.major}</Td>
              </Tr>
              <Tr>
                <Td>교양</Td>
                <Td>{credits.creditCompleted.general}</Td>
                <Td>{credits.creditInProgress.general}</Td>
                <Td>{credits.creditCompleted.general + credits.creditInProgress.general}</Td>
                <Td>{credits.creditForGrad.general}</Td>
              </Tr>
              <Tr>
                <Td>기타</Td>
                <Td>{credits.creditCompleted.etc}</Td>
                <Td>{credits.creditInProgress.etc}</Td>
                <Td>{credits.creditCompleted.etc + credits.creditInProgress.etc}</Td>
                <Td>{credits.creditForGrad.etc}</Td>
              </Tr>
              <Tr>
                <Td>계</Td>
                <Td>{credits.creditCompleted.total}</Td>
                <Td>{credits.creditInProgress.total}</Td>
                <Td>{credits.creditCompleted.total + credits.creditInProgress.total}</Td>
                <Td>{credits.creditForGrad.total}</Td>
              </Tr>
            </Tbody>
          </Table>
        }
      </ListBox>
    </ListWrap>
  )
}

export default CreditList;