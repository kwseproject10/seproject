import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays } from 'date-fns';
import { BodyRow, CalendarBody, CalendarDays, CalendarHeader, CalendarWrap, Cell, CellText, DaysCol, HeaderCenter, HeaderLeft, HeaderRight } from './style';

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <Cell
          state={
            !isSameMonth(day, monthStart) ?
              'disabled'
            :
              (isSameDay(day, selectedDate) ?
                'selected'
              :
                (format(currentMonth, 'M') !== format(day, 'M') ?
                  'not-valid'
                :
                  'valid'
                )
              )
          }
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <CellText textValid={!format(currentMonth, 'M') !== format(day, 'M')}>
            {formattedDate}
          </CellText>
        </Cell>,
      );
      day = addDays(day, 1);
    }
    rows.push(<BodyRow>{days}</BodyRow>,);
    days = [];
  }
  return <CalendarBody>{rows}</CalendarBody>;
};

const Calendar = ({ schedules }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = ['일','월','화','수','목','금','토'];

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <CalendarWrap>
      <CalendarHeader>
        <HeaderLeft>
          <div onClick={()=>{prevMonth()}}>{` < `}</div>
        </HeaderLeft>
        <HeaderCenter>
          {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월
        </HeaderCenter>
        <HeaderRight>
          <div onClick={()=>{nextMonth()}}>{` > `}</div>
        </HeaderRight>
      </CalendarHeader>
      <CalendarDays>
        {date.map((day, i) => {
          return (
            <DaysCol key={i}>
              {day}
            </DaysCol>
          )
        })}
      </CalendarDays>
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalendarWrap>
  )
};

export default Calendar;