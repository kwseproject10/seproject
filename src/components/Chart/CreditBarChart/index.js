import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const CreditChart = ({ semesters, creditEachSemesters }) => {
  let datas = [];

  Object.keys(creditEachSemesters).forEach(
    year => {
      Object.keys(creditEachSemesters[year]).forEach(
        semester => {
          let temp = {
            name: `${year}-${semester}`,
              전공학점: creditEachSemesters[year][semester].major,
              교양학점: creditEachSemesters[year][semester].general,
              기타학점: creditEachSemesters[year][semester].etc,
              총학점: creditEachSemesters[year][semester].total
          };
          if(creditEachSemesters[year][semester].GPA !== -1){
            Object.assign(temp,{
              평점: creditEachSemesters[year][semester].GPA
            })
          }
          datas.push(temp);
        }
      )
    }
  )
  return (
    <ResponsiveContainer>
      <ComposedChart
        width={500}
        height={300}
        data={datas}
        margin={{
          top: 5,
          right: -30,
          left: 5,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0.0, 4.6]}
          ticks={[0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]}
        />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="전공학점"
          barSize={10}
          fill="rgb(3,91,108)"
        />
        <Bar
          yAxisId="left"
          dataKey="교양학점"
          barSize={10}
          fill="rgb(120, 120, 120)"
        />
        <Bar
          yAxisId="left"
          dataKey="기타학점"
          barSize={10}
          fill="rgb(181,190,194)"
        />
        <Bar
          yAxisId="left"
          dataKey="총학점"
          barSize={10}
          fill="rgb(24,34,49)"
        />
        <Line
          type="linear"
          yAxisId="right"
          dataKey="평점"
          stroke="rgb(24,34,49)"
          activeDot={{ r: 8 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CreditChart;