import { toStringFormat } from "@utils/date";
import { useEffect, useState } from "react";
import { fileSize } from './../../../../../utils/file';
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap, Submits } from "./style";

const AssignmentSubmit = ({ selectedPostID, setPageIndex }) => {

  const [post, setPost] = useState();

  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignmentpost?ID=${selectedPostID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: {
          post: {
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
          },
          submit: {
            state: "true",
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
          }
        }
      }
      if (res.data.result === "false") {
        console.log("post load fail");
        return
      }
      console.log(res.data);
      setPost(res.data.post);
    }
    fetch();
  }, [selectedPostID])

  const [submits, setSubmits] = useState();
  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/submitall?ID=${selectedPostID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: [{
          name: "홍길동",
          ID: "2020123123",
          postFile: {
            url: "",
            name: "과제 제출.jpg",
            size: "100KB"
          },
          content: "과제 제출합니다. 감사합니다.!!!"
        }, {
          name: "홍길동",
          ID: "2020123123",
          postFile: {
            url: "",
            name: "과제 제출.jpg",
            size: "100KB"
          },
          content: "과제 제출합니다. 감사합니다.!!!"
        }]
      }
      if (res.data.result === "false") {
        console.log("post load fail");
        return
      }
      console.log("submit", res.data);
      setSubmits(res.data);
    }
    fetch();
  }, [selectedPostID])

  return (
    <DetailWrap>
      {post === undefined ?
        ""
        :
        <ButtonWrap>
          <PageHeader>과제</PageHeader>
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
                <PostInform>{toStringFormat(post.postDate)}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>마감일시&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{toStringFormat(post.dueDate)}</PostInform>
              </HeaderRow>
            </PostHeader>
          </PostWrap>
          <br /><br />
          <PageHeader>제출내역</PageHeader>
          <PostWrap>
            {submits === undefined ?
              ""
              :
              submits.map((submit, submitIndex) => {
                return (
                  <Submits>
                    <HeaderRow>
                      <LeftPadding />
                      <PostTitle>{submit.name}</PostTitle>
                    </HeaderRow>
                    <HeaderRow>
                      <LeftPadding />
                      <HeaderTitle>작성자&nbsp;:&nbsp;</HeaderTitle>
                      <PostInform>{submit.ID}</PostInform>
                    </HeaderRow>
                    <PostBody>
                      {
                        submit.postFile.name === null ?
                          ""
                          :
                          <PostFileWrap>
                            <PostFileRow>
                              <LeftPadding />
                              <PostFileDownload
                                url={submit.postFile.url}
                              >
                                <PostFileIconWrap>
                                  <PostFileIcon />
                                </PostFileIconWrap>
                                {submit.postFile.name} / {fileSize(submit.postFile.size)}
                              </PostFileDownload>
                            </PostFileRow>
                          </PostFileWrap>
                      }
                      <PostBodyText>
                        {submit.content}
                      </PostBodyText>
                    </PostBody>
                  </Submits>
                )
              })}
          </PostWrap>
          <ButtonRow>
            <BackButton
              onClick={() => { setPageIndex(0); }}
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

export default AssignmentSubmit;