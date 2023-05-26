import { atom } from "recoil";

export const ModalOpenState = atom({
    key: 'ModalOpen',
    default: false
})

export const AuthState = atom({
    key: 'Auth',
    default: false
})