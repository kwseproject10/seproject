import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState } from './../../../Atom';
import { ListBox, ListTitle, ListWrap, Table, Tbody, Td, Th, Thead, TitleText, Tr } from "./style";

const CreditList = () => {
  const userID = useRecoilValue(userIDState);
  const [ credits, setCredits ] = useState(
    {
      creditCompleted : {
        major : 0,
        general : 0,
        etc : 0,
        total : 0
      },
      creditInProgress : {
        major : 0,
        general : 0,
        etc : 0,
        total : 0
      },
      creditForGrad : {
        major : 0,
        general : 0,
        etc : 0,
        total : 0
      }
    });

  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/credit?userID=${userID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: {
          "userCredit" : {
            "2023": {
              "1": {
                "major": 15,
                "general": 0,
                "etc": 0,
                "total": 15,
                "GPA": -1
              }
            },
            "2022": {
              "2": {
                "major": 18,
                "general": 0,
                "etc": 0,
                "total": 18,
                "GPA": 4.1
              },
              "1": {
                "major": 17,
                "general": 0,
                "etc": 0,
                "total": 17,
                "GPA": 4.0
              }
            },
            "2021": {
              "2": {
                "major": 18,
                "general": 0,
                "etc": 0,
                "total": 18,
                "GPA": 4.0
              },
              "1": {
                "major": 15,
                "general": 6,
                "etc": 0,
                "total": 21,
                "GPA": 4.0
              }
            },
            "2020": {
              "2": {
                "major": 9,
                "general": 16,
                "etc": 0,
                "total": 25,
                "GPA": 4.0
              },
              "1": {
                "major": 6,
                "general": 13,
                "etc": 0,
                "total": 19,
                "GPA": 4.0
              }
            }
          },
          "creditForGrad" : {
              "major" : 39,
              "general" : 40,
              "etc" : 0,
              "total" : 130
          }
        }
      }
      if(res.data.result === "false") {
        return
      }
      let temp = {
        creditCompleted : {
          major : 0,
          general : 0,
          etc : 0,
          total : 0
        },
        creditInProgress : {
          major : 0,
          general : 0,
          etc : 0,
          total : 0
        }
      }
      Object.keys(res.data.userCredit).forEach(
        year => {
          Object.keys(res.data.userCredit[year]).forEach(
            semester => {
              if(year === "2023" && semester === "1"){
                temp.creditInProgress.major += parseInt(res.data.userCredit[year][semester].major);
                temp.creditInProgress.general += parseInt(res.data.userCredit[year][semester].general);
                temp.creditInProgress.etc += parseInt(res.data.userCredit[year][semester].etc);
                temp.creditInProgress.total += parseInt(res.data.userCredit[year][semester].total);
              }else{
                temp.creditCompleted.major += parseInt(res.data.userCredit[year][semester].major);
                temp.creditCompleted.general += parseInt(res.data.userCredit[year][semester].general);
                temp.creditCompleted.etc += parseInt(res.data.userCredit[year][semester].etc);
                temp.creditCompleted.total += parseInt(res.data.userCredit[year][semester].total);
              }
            }
          )
        }
      )
      temp.creditForGrad = res.data.creditForGrad;
      setCredits(temp);
    }

    fetch()
  }, [ userID ])

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