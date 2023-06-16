import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { FacultyLectureSelectedState, userIDState } from "../../../../../Atom";
import { BackButton, ButtonRow, ButtonWrap, DateInput, DateWrap, DetailWrap, HeaderRow, LeftPadding, PageHeader, PostBody, PostBodyText, PostButton, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInput, PostTextInput, PostTitle, PostWrap } from "./style";

const AssignmentPost = ({ setSelectedPostID, setPageIndex }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [files, setFiles] = useState();
  const [Year, setYear] = useState("");
  const [Month, setMonth] = useState("");
  const [Day, setDay] = useState("");
  const userID = useRecoilValue(userIDState);
  const selectedLectureID = useRecoilValue(FacultyLectureSelectedState);

  const onChangeFiles = (e) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }
  };

  const upload = async (e) => {
    if (postTitle === "") {
      window.alert("과제 마감일을 입력해주세요.");
      return;
    }
    if (Year === "" || Month === "" || Day === "") {
      window.alert("과제 마감일을 입력해주세요.");
      return;
    }
    if (Year.length !== 4 || Month.length > 12 || Day > 31) {
      window.alert("날짜 형식이 올바르지 않습니다.");
      return;
    }
    e.preventDefault();
    const formData = new FormData();
    // @ts-ignore
    if (files !== undefined) {
      Array.from(files).forEach((el) => {
        formData.append("file", el);
      });
    }
    console.log(Year + Month + Day);
    formData.append("posterID", userID);
    formData.append("postTitle", postTitle);
    formData.append("lectureID", selectedLectureID);
    formData.append("content", postText);
    formData.append("endDate", Year + Month + Day);

    try {

      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/postassignment`;
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
      window.alert("게시물이 등록되었습니다.");
      setSelectedPostID(res.data.boKey);
      setPageIndex(2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailWrap>
      <ButtonWrap>
        <form
          onSubmit={upload}
          encType="multipart/form-data"
        >
          <PageHeader>과제 개설</PageHeader>
          <PostWrap>
            <PostHeader>
              <HeaderRow>
                <LeftPadding />
                <PostTitle>
                  <PostInput
                    name="postTitle"
                    placeholder="제목을 입력하세요."
                    value={postTitle}
                    onChange={(e) => {
                      setPostTitle(e.target.value);
                    }}
                  />
                </PostTitle>
              </HeaderRow>
              <HeaderRow>
                <LeftPadding />
                <DateInput
                  type="number"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }}
                  maxLength={4}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
                <DateWrap>년</DateWrap>
                <DateInput
                  type="number"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }}
                  maxLength={2}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                />
                <DateWrap>월</DateWrap>
                <DateInput
                  type="number"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }}
                  maxLength={2}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                />
                <DateWrap>일</DateWrap>
              </HeaderRow>
            </PostHeader>
            <PostBody>
              <PostFileWrap>
                <PostFileRow>
                  <LeftPadding />
                  <PostFileDownload>
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
          <ButtonRow>
            <PostButton value="게시" type="submit" />
            <BackButton
              onClick={() => { setPageIndex(0); }}
            >
              취소
            </BackButton>
          </ButtonRow>
        </form>
      </ButtonWrap>
      <br /><br />
    </DetailWrap>
  )
}

export default AssignmentPost;