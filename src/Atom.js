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


//전역 상태관리용 state Student
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

export const LectureDetailNavigationState = atom({
  key: 'LectureDetailNavigation',
  default : 0
})

export const SelectedPostIDState = atom({
  key: 'SelectedPostID',
  default : 0
})

export const SetInDetailPostState = atom({
  key: 'SetInDetailPost',
  default : false
})

//전역 상태관리용 state faculty

export const FacultyLectureSelectedState = atom({
  key: 'FacultyLectureSelected',
  default: "H000-1-3095-1"
})

export const FacultyLecturesState = atom({
  key: 'FacultyLectures',
  default: [{
    "key": "0",
    "name": "대학물리학1",
    "professor": [
      "새빛205"
    ],
    "major": "소프트웨어융합대학",
    "type": "기필",
    "credit": "3",
    "numOfTime": "3",
    "time": [
      "화4",
      "목3"
    ],
    "place": [
      "새빛205",
      "새빛205"
    ],
    "ID": "H000-1-9753-3"
  },
  {
    "key": "1",
    "name": "소프트웨어공학",
    "professor": [
      "새빛205"
    ],
    "major": "컴퓨터정보공학부",
    "type": "전선",
    "credit": "3",
    "numOfTime": "3",
    "time": [
      "월5",
      "수6"
    ],
    "place": [
      "새빛205",
      "새빛205"
    ],
    "ID": "H020-4-0846-1"
  },
  {
      "key": "2",
      "name": "컴퓨터비젼",
      "professor": [
          "새빛205"
      ],
      "major": "컴퓨터정보공학부",
      "type": "전선",
      "credit": "3",
      "numOfTime": "3",
      "time": [
          "월4",
          "수3"
      ],
      "place": [
          "새빛205",
          "새빛205"
      ],
      "ID": "H020-4-4136-1"
  }]
})

//회원가입 페이지 state
export const signUpState = atom({
  key: 'signup',
  default: false
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
  default: ""
})

export const userInformState = atom({
  key: 'UserInform',
  default: {}
})

export const LecturesState = atom({
  key: 'Lectures',
  default: []
})