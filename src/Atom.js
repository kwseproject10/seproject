import { atom } from "recoil";

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