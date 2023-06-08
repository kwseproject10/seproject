import { atom } from "recoil";

export const userIDState = atom({
  key: 'userID',
  default: 0
})

export const userTypeState = atom({
  key: 'userType',
  default: "s"
})

export const ModalOpenState = atom({
  key: 'ModalOpen',
  default: false
})

export const AuthState = atom({
  key: 'Auth',
  default: false
})

export const StudentNavigationState = atom({
  key: 'StudentNavigationIndex',
  default: 0
})

export const FacultyNavigationState = atom({
  key: 'FacultyNavigationIndex',
  default: 0
})

export const LectureDetailActivedState = atom({
  key: 'LectureDetailActived',
  default: false
})

export const LectureSelectedState = atom({
  key: 'LectureSelected',
  default: ""
})

export const LecturesState = atom({
  key: 'Lectures',
  default: [
    {
      key: "0",
      name: "소프트웨어공학",
      professor: "이기훈",
      major: "컴퓨터정보공학부",
      type: "전선",
      credit: "3",
      numOfTime: "3",
      time: ["월5", "수6"],
      place: ["새빛205", "새빛205"],
      ID: "H020-4-0846-01",
    },
    {
      key: "0",
      name: "디지털논리회로1",
      professor: "유지현",
      major: "컴퓨터정보공학부",
      type: "전필",
      credit: "3",
      numOfTime: "3",
      time: ["금5", "금6"],
      place: ["새빛203", "새빛203"],
      ID: "H020-2-0453-01",
    },
    {
      key: "0",
      name: "신호및시스템",
      professor: "이성원",
      major: "컴퓨터정보공학부",
      type: "전선",
      credit: "3",
      numOfTime: "3",
      time: ["월4", "수3"],
      place: ["새빛102", "새빛102"],
      ID: "H020-3-2004-01",
    },
    {
      key: "0",
      name: "임베디드시스템S/W설계",
      professor: "김태석",
      major: "컴퓨터정보공학부",
      type: "전선",
      credit: "3",
      numOfTime: "3",
      time: ["월6", "수5"],
      place: ["새빛205", "새빛205"],
      ID: "H020-4-5861-01",
    },
    {
      key: "0",
      name: "머신러닝",
      professor: "박철수",
      major: "컴퓨터정보공학부",
      type: "전선",
      credit: "3",
      numOfTime: "3",
      time: ["월3", "수4"],
      place: ["새빛203", "새빛203"],
      ID: "H020-4-8483-01",
    }
  ]
})

export const SemesterSelectedState = atom({
  key: 'SemesterSelected',
  default: "2023학년도 1학기"
})

export const SemestersState = atom({
  key: 'Semesters',
  default: []
})