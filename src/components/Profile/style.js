import styled from "styled-components";
import Size from "@style/Size.js";

export const ProfileWrap = styled.div`
  margin: 1%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 98%;
  display: flex;
  flex-direction: column;
`

export const Top = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
`

export const UserPhotoWrap = styled.div`
  margin: 2%;
  width: 20%;
  height: 96%;
  ${Size('large')}{
    width: 30%;
  }
`

export const UserInformWrap = styled.div`
  margin: 2%;
  width: 72%;
  height: 96%;
  display: flex;
  flex-direction: column;
  ${Size('large')}{
    width: 62%;
  }
`

export const NameRow = styled.div`
  width: 100%;
  border-bottom: 0.125rem solid var(--color-dk);
`

export const UserName = styled.div`
  font-size: var(--font-size-lg);;
  font-weight: bold;
`

export const InformRows = styled.div`
  margin-top: 0.3rem;
  font-size: var(--font-size-sm);
  line-height: 1.5rem;
`

export const UserID = styled.div`
`

export const UserMajor = styled.div`
`

export const GradeWrap = styled.div`
  display: flex;
`

export const LastConnect = styled.div`
`

export const Grade = styled.div`
`

export const Bottom = styled.div`
  margin-top: 0.6rem;
  padding-top: 0.3rem;
  font-size: var(--font-size-sm);
  width: 100%;
  height: 2.5rem;
  border: 0.0625rem solid var(--color-gr);
  border-radius: 1rem;
  display: flex;
  justify-content:space-between;
`
export const Left = styled.div`
  line-height: 2.3rem;
  width: 30%;
  text-align:center;
`

export const Center = styled.div`
  line-height: 2.3rem;
  width: 35%;
  border-left: 0.0625rem solid var(--color-gr);
  height: 2.3rem;
  text-align:center;
`

export const Right = styled.div`
  font-size: var(--font-size-xs);
  width: 35%;
  border-left: 0.0625rem solid var(--color-gr);
  height: 2.3rem;
  text-align:center;
`

export const Advisor = styled.div`
`

export const AdvisorName = styled.div`
`

export const AdvisorEmail = styled.div`
`

export const AdvisorNum = styled.div`
`