import { HeaderText, Table, TableBox, TableHeader, TableWrap, Tbody, Td, Th, Thead, Tr } from "./Style";

const RenderBody = ({ lectures }) => {

}

const TimeTable = ({ lectures }) => {
  const date = ['월','화','수','목','금','토'];
  return (
    <TableWrap>
      <TableHeader>
        <HeaderText>시간표</HeaderText>
      </TableHeader>
      <TableBox>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              {date.map((e,i)=>{return(
                <Th>{e}</Th>
              )})}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
            <Tr>
              <Td>2교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
            <Tr>
              <Td>3교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
            <Tr>
              <Td>4교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
            <Tr>
              <Td>5교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
            <Tr>
              <Td>6교시</Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td><Td></Td>
            </Tr>
          </Tbody>
          <RenderBody lectures={lectures}/>
        </Table>
      </TableBox>
    </TableWrap>
  )
}

export default TimeTable;