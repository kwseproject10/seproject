import { useEffect } from "react";
import { useState } from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const CreditChart = ({ semesters, creditEachSemesters }) => {
  const [data, setData] = useState([]);
  
  //API call
  const loadData = () => {
    setData([
      {
        name: '2020-1',
        평점: 4.3,
        전공학점: 6,
        교양학점: 13,
        기타학점: 0,
        총학점: 19
      },
      {
        name: '2020-2',
        평점: 4.0,
        전공학점: 9,
        교양학점: 16,
        기타학점: 0,
        총학점: 25
      },
      {
        name: '2021-1',
        평점: 4.1,
        전공학점: 15,
        교양학점: 6,
        기타학점: 0,
        총학점: 21
      },
      {
        name: '2021-2',
        평점: 3.9,
        전공학점: 18,
        교양학점: 0,
        기타학점: 0,
        총학점: 18
      },
      {
        name: '2022-1',
        평점: 3.0,
        전공학점: 17,
        교양학점: 0,
        기타학점: 0,
        총학점: 17
      },
      {
        name: '2022-2',
        평점: 4.0,
        전공학점: 18,
        교양학점: 0,
        기타학점: 0,
        총학점: 18
      },
      {
        name: '2023-1',
        전공학점: 15,
        교양학점: 0,
        기타학점: 0,
        총학점: 15
      }
    ])
  };

  useEffect(loadData,[]);

  return (
    <ResponsiveContainer>
      <ComposedChart
        width={500}
        height={300}
        data={data}
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