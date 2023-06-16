import Size from "@style/Size";
import { TbEdit } from "react-icons/tb";
import styled from "styled-components";
import { RenderAnimation } from "../../../style/GlobalStyle";

export const MyPageWrap = styled.div`
  width: 100%;
  margin-bottom: 5%;
  animation: ${RenderAnimation} 1s;
`

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${Size('large')}{
    width: 90%
    margin-left: 5%;
    justify-content: wrap;
  }
`

export const SubmitWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Profile = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5%;
  margin-bottom: 0.5%;
  ${Size('large')}{
    width: 55%;
  }
`

export const ProfileHeader = styled.div`
  height: 3rem;
  width: 100%;
  font-weight: bold;
  font-size:var(--font-size-lg);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dg);
`

export const ProfileRow = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dg);
  background-color: white;
`

export const PhotoRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid var(--color-dg);
`

export const PhotoRowContent = styled.div`
  display: flex;
  width: 100%;
`

export const FileInputWrap = styled.div`
  display: flex;
  margin-left: 5%;
  width: 80%;
  flex-direction: column;
  justify-content: flex-end;
`

export const UserPhotoWrap = styled.div`
  height: 5rem;
  width: 5rem;
`

export const RowTitle = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-gr);
  text-align: center;
`

export const HeaderTitle = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 3%;
`

export const RowContent = styled.div`
  width: 65%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RowInputWrap = styled.div`
  width: 65%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RowInput = styled.input`
  width: 50%;
  height: 2.1rem;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
`

export const ModifyButton = styled(TbEdit)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SubmitButtonWrap = styled.div`
  width: 55%;
  display: flex;
  justify-content: right;
`

export const PasswordSubmit = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`

export const ModifySubmitButton = styled.input`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`

export const ModifyCancelButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-gr);
  font-weight: bold;
  color: var(--color-nm);
  border: 1px solid var(--color-dg);
`