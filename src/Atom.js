import { atom } from "recoil";

//네비게이션 인덱스 state
export const StudentNavigationState = atom({
  key: 'StudentNavigationIndex',
  default: 0
})

export const FacultyNavigationState = atom({
  key: 'FacultyNavigationIndex',
  default: 0
})

export const StudentNavigationAccordianActivedState = atom({
  key: 'StudentNavigationAccordianActived',
  default: false
})

export const FacultyNavigationAccordianActivedState = atom({
  key: 'FacultyNavigationAccordianActived',
  default: 0
})


//전역 상태관리용 state
export const LectureSelectedState = atom({
  key: 'LectureSelected',
  default: ""
})

export const SemesterSelectedState = atom({
  key: 'SemesterSelected',
  default: ""
})

export const SemestersState = atom({
  key: 'Semesters',
  default: []
})


//로그인 이후 개인정보 state
export const AuthState = atom({
  key: 'Auth',
  default: false
})

export const userIDState = atom({
  key: 'userID',
  default: 2020123456
})

export const userTypeState = atom({
  key: 'userType',
  default: "s"
})

export const userInformState = atom({
  key: 'UserInform',
  default: {}
})

export const LecturesState = atom({
  key: 'Lectures',
  default: []
})