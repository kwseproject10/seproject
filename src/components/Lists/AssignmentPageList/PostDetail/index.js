import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { fileSize } from "../../../../utils/file";
import { LectureSelectedState, SelectedPostIDState, userIDState } from './../../../../Atom';
import { toStringFormat } from './../../../../utils/date';
import { BackButton, ButtonRow, ButtonWrap, DeleteButton, DetailWrap, Form, HeaderRow, HeaderTitle, LeftPadding, NonSubmit, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostInput, PostTextInput, PostTitle, PostWrap, SubmitButton } from "./style";

const AssignmentDetail = ({ setInDetail, postID, boardName }) => {
  const userID = useRecoilValue(userIDState);
  const selectedPostID = useRecoilValue(SelectedPostIDState);
  const selectedLectureID = useRecoilValue(LectureSelectedState);
  const [isSubmit, setIsSubmit] = useState(true);
  console.log(selectedPostID);
  //API call
  const [post, setPost] = useState();
  const [submitted, setSubmitted] = useState({});

  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignmentpost?ID=${selectedPostID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setIsSubmit(res.data.submit === "제출")
      setPost(res.data.post);
    }
    fetchAssignment();
  }, [selectedPostID])

  useEffect(() => {
    const fetchSubmit = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/submit?ID=${selectedPostID}&userID={userID}`;
      const res = await axios.get(
        route
      );
      console.log(res.data);
      if (res.data.result === "false") {
        setIsSubmit(false);
      } else {
        setIsSubmit(true);
        setPost(res.data.post);

      }
    }
    fetchSubmit();
  }, [selectedPostID])


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
      postFile: {
        name: "2023_10_project.pdf",
        size: "110.37 KB",
        url: ""
      }
    })
  }
  useEffect(loadSubmitted, []);


  
  const [files, setFiles] = useState();
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const onChangeFiles = (e) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }
  };
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (files !== undefined) {
      Array.from(files).forEach((el) => {
        formData.append("file", el);
      });
    }
    formData.append("userID", userID);
    formData.append("title", postTitle);
    formData.append("content", postText);
    formData.append("bokey", selectedPostID);
    formData.append("lectureID", selectedLectureID);

    try {

      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/postassignmentsubmit`;
      const res = await axios.post(
        route,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: [
            function () {
              return formData;
            },
          ],
        }
      );
      if (res.data.result === "false") {
        console.log("post error");
        return
      }
      console.log(res.data);
      window.alert("과제 제출이 완료되었습니다.");
      setIsSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DetailWrap>
    <Form
      onSubmit={upload}
      encType="multipart/form-data"
    >
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
                <PostInform>{toStringFormat(post.postDate)}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>마감일시&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{toStringFormat(post.dueDate)}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>D-day&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.Dday <= 0 ? "마감" : post.Dday}</PostInform>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>제출여부&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.state}</PostInform>
              </HeaderRow>
            </PostHeader>
            <PostBody>
              {
                post.postFile === null || post.postFile.name === null ?
                  ""
                  :
                  <PostFileWrap>
                    <PostFileRow>
                      <LeftPadding />
                      <PostFileDownload
                        href={`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/files/${post.postFile.url}`} download
                      >
                        <PostFileIconWrap>
                          <PostFileIcon />
                        </PostFileIconWrap>
                        {post.postFile.name} / {fileSize(post.postFile.size)}
                      </PostFileDownload>
                    </PostFileRow>
                  </PostFileWrap>
              }
              <PostBodyText>
                {post.postText}
              </PostBodyText>
            </PostBody>
          </PostWrap>
          <PageHeader>과제 제출내역</PageHeader>
          {
            !isSubmit ?
              <PostWrap>
                <NonSubmit>
                  <LeftPadding />
                  <PostTitle>과제 미제출 상태입니다.</PostTitle>
                </NonSubmit>
                <PostHeader>
                  <HeaderRow>
                    <LeftPadding />
                  <PostInput
                    name="postTitle"
                    placeholder="제목을 입력하세요."
                    value={postTitle}
                    onChange={(e) => {
                      setPostTitle(e.target.value);
                    }}
                  />
                  </HeaderRow>
                </PostHeader>
                <PostBody>
                  <PostFileWrap>
                    
                        <PostFileRow>
                          <LeftPadding />
                          <PostFileDownload
                          >
                            <PostFileIconWrap>
                              <PostFileIcon />
                            </PostFileIconWrap>
                    <input
                      type="file"
                      name="file"
                      onChange={onChangeFiles}
                    />
                          </PostFileDownload>
                        </PostFileRow>
                  </PostFileWrap>
                  <PostBodyText>
                <PostTextInput
                  name="content"
                  row={10}
                  value={postText}
                  onChange={(e) => {
                    setPostText(e.target.value);
                  }}
                />
                  </PostBodyText>
                </PostBody>
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
                    <PostInform>{toStringFormat(submitted.postDate)}</PostInform>
                  </HeaderRow>
                </PostHeader>
                <PostBody>
                  <PostFileWrap>
                    {
                      submitted.postFile === undefined ?
                        ""
                        :
                        <PostFileRow>
                          <LeftPadding />
                          <PostFileDownload
                            href={`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/files/${submitted.postFile.url}`} download
                          >
                            <PostFileIconWrap>
                              <PostFileIcon />
                            </PostFileIconWrap>
                            {submitted.postFile.name} / {submitted.postFile.size}
                          </PostFileDownload>
                        </PostFileRow>
                    }
                  </PostFileWrap>
                  <PostBodyText>
                    {submitted.postText}
                  </PostBodyText>
                </PostBody>
              </PostWrap>
          }
          <ButtonRow>
            {!isSubmit ?
              <SubmitButton
                value="제출"
                type="submit"
              />
              :
              ""
            }
            {!isSubmit ?
              ""
              :
              <DeleteButton
                onClick={() => {
                  let result = window.confirm(`제출한 내용을 삭제하시겠습니까?`);
                  if (result) {
                    window.alert(`제출한 과제가 삭제되었습니다.`);
                    setIsSubmit(false);
                  } else {
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
    
    </Form>
    </DetailWrap>
  )
}

export default AssignmentDetail;