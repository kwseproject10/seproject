export const toStringFormat = (date) => {
  let temp = new Date(date);
  return (temp.getFullYear().toString() + "." + temp.getMonth().toString().padStart(2,'0') + "." + temp.getDate().toString().padStart(2,'0') + "(" + getDayOFWeek(date) +")")
}

export const getDayOFWeek = (date) => {
  let temp = new Date(date);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return week[temp.getDay()];
}