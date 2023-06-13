import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState } from './../../../../Atom';
import { BackButton, ButtonRow, ButtonWrap, DeleteButton, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, NonSubmit, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap, SubmitButton, UpdateButton } from "./style";

const AssignmentDetail = ({ setInDetail, postID, boardName }) => {
  const userID = useRecoilValue(userIDState);
  const [isSubmit, setIsSubmit] = useState(true);

  //API call
  const [post, setPost] = useState();

  const loadPost = () => {
    setPost({
      name: "3차 프로젝트",
      poster: "이기훈",
      postDate: "2020.06.08(목) 20:32",
      dueDate: "2023.06.16(금) 23:59",
      Dday: 3,
      state: "제출",
      postHit: "10",
      postText: `3차 프로젝트입니다.



3차 프로젝트에서는 1차 프로젝트에서 설계한 웹 애플리케이션을 구현하는 것을 목표로 합니다.



사용하는 웹 기술에 제한은 없으므로 자유롭게 사용하시면 됩니다.



YouTube 동영상 업로드와 git repository, 보고서는 팀 당 하나만 제출하시면 됩니다.



보고서는 pdf로 변환하여 제출해주시기 바랍니다.



제출 기한은 6월 16일 23:59 입니다.`,
      postFile: [
        {
          name: "2023_Project_3.pdf",
          size: "110.37 KB",
          url: ""
        },
        {
          name: "SE_Project03_xx조.docx",
          size: "43.08 KB",
          url: ""
        }
      ]
    })
  }
  useEffect(loadPost, []);

  const [submitted, setSubmitted] = useState({});

  const loadSubmitted = () => {
    setSubmitted({
      poster: "모범생",
      posterID: "2020123456",
      postDate: "2023.06.13(화) 21:46",
      name: "프로젝트 기획안 제출합니다.",
      postText: `안녕하십니까, 이번 학기 소프트웨어 공학 수강중인 모범생입니다.
프로젝트 기획안 제출합니다. 현재까지 진행된 프로젝트 소스코드 및 프로젝트 제안서 파일 첨부하였습니다.
10조이며, 팀장은 홍길동입니다.
프로젝트 주제는 학사관리 시스템 웹개발입니다.
추가로 프로젝트 미팅 스케줄 관련하여 메일 드렸으니 확인 부탁드립니다.
감사합니다.`,
      postFile: [
        {
          name: "2023_10_project.pdf",
          size: "110.37 KB",
          url: ""
        },
        {
          name: "2023_10_project_source_code.zip",
          size: "1.5 MB",
          url: ""
        }
      ]
    })
  }
  useEffect(loadSubmitted, []);


  return (
    <DetailWrap>
      {post === undefined ?
        ""
        :
        <ButtonWrap>
          <PageHeader>{boardName}</PageHeader>
          <PostWrap>
            <PostHeader>
              <HeaderRow>
                <LeftPadding />
                <PostTitle>{post.name}</PostTitle>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>작성자&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.poster}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>작성일시&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.postDate}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>마감일시&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.dueDate}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>D-day&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.Dday}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>제출여부&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.state}</PostInform>
              </HeaderRow>
            </PostHeader>
            <PostBody>
              <PostFileWrap>
                {
                  post.postFile.map(
                    (file, index) => {
                      return (
                        <PostFileRow>
                          <LeftPadding />
                          <PostFileDownload
                            url={file.url}
                          >
                            <PostFileIconWrap>
                              <PostFileIcon />
                            </PostFileIconWrap>
                            {file.name} / {file.size}
                          </PostFileDownload>
                        </PostFileRow>
                      )
                    }
                  )
                }
              </PostFileWrap>
              <PostBodyText>
                {post.postText}
              </PostBodyText>
            </PostBody>
          </PostWrap>
          <PageHeader>과제 제출내역</PageHeader>
          {
            !isSubmit?
              <PostWrap>
                <NonSubmit>
                  <LeftPadding />
                  <PostTitle>과제 미제출 상태입니다.</PostTitle>
                </NonSubmit>
              </PostWrap>
              :
              <PostWrap>
                <PostHeader>
                  <HeaderRow>
                    <LeftPadding />
                    <PostTitle>{submitted.name}</PostTitle>
                  </HeaderRow>
                  <HeaderRow>
                    <LeftPadding />
                    <HeaderTitle>작성자&nbsp;:&nbsp;</HeaderTitle>
                    <PostInform>{submitted.poster}</PostInform>
                  </HeaderRow>
                  <HeaderRow>
                    <LeftPadding />
                    <HeaderTitle>학번&nbsp;:&nbsp;</HeaderTitle>
                    <PostInform>{submitted.posterID}</PostInform>
                  </HeaderRow>
                  <HeaderRow>
                    <LeftPadding />
                    <HeaderTitle>작성일시&nbsp;:&nbsp;</HeaderTitle>
                    <PostInform>{submitted.postDate}</PostInform>
                  </HeaderRow>
                </PostHeader>
                <PostBody>
                  <PostFileWrap>
                    {
                      submitted.postFile.map(
                        (file, index) => {
                          return (
                            <PostFileRow>
                              <LeftPadding />
                              <PostFileDownload
                                url={file.url}
                              >
                                <PostFileIconWrap>
                                  <PostFileIcon />
                                </PostFileIconWrap>
                                {file.name} / {file.size}
                              </PostFileDownload>
                            </PostFileRow>
                          )
                        }
                      )
                    }
                  </PostFileWrap>
                  <PostBodyText>
                    {submitted.postText}
                  </PostBodyText>
                </PostBody>
              </PostWrap>
          }
          <ButtonRow>
            {!isSubmit?
              <SubmitButton
              onClick={() => {
                setIsSubmit(true);
              }}
              >
                제출
              </SubmitButton>
              :
              <UpdateButton
              >
                수정
              </UpdateButton>
            }
            {!isSubmit?
              ""
              :
              <DeleteButton
              onClick={() => {
                let result = window.confirm(`제출한 내용을 삭제하시겠습니까?`);
                if(result){
                  window.alert(`제출한 과제가 삭제되었습니다.`);
                  setIsSubmit(false);
                }else{
                  return;
                }
              }}
              >
                삭제
              </DeleteButton>
            }
            <BackButton
              onClick={() => { setInDetail(false) }}
            >
              목록
            </BackButton>
          </ButtonRow>
          <br /><br />
        </ButtonWrap>
      }

    </DetailWrap>
  )
}

export default AssignmentDetail;