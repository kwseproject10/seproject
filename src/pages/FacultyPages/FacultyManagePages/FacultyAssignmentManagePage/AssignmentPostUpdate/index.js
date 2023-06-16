import { toStringFormat } from "@utils/date";
import axios from "axios";
import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostButton, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostInput, PostTextInput, PostWrap } from "./style";

const AssignmentPostUpdate = ({ selectedPostID, setPageIndex }) => {
  const [postTitle, setPostTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [postURL, setPostURL] = useState("");
  const [postText, setPostText] = useState("");

  const onSubmit = () => {
    const req = {
      title : postTitle,
      URL : postURL,
      text : postText
    }
    console.timeLog(req);
  }

  const [post, setPost] = useState();

  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignmentpost?ID=${selectedPostID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("post load fail");
        return
      }
      setPost(res.data);
      setPostTitle(res.data.name);
      setPostURL(res.data.postFile.url);
      setPostText(res.data.postText);
    }
    fetch();
  }, [selectedPostID])

  return (
    <DetailWrap>
      {post === undefined ?
        ""
        :
        <ButtonWrap>
          <PageHeader>공지사항 수정</PageHeader>
          <PostWrap>
            <PostHeader>
              <HeaderRow>
                <LeftPadding />
                <PostInput
                  placeholder="제목을 입력하세요."
                  value={postTitle}
                  onChange={(e) => {
                    setPostTitle(e.target.value);
                  }}
                />
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
                <HeaderTitle>조회수&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.postHit}</PostInform>
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
                    />
                  </PostFileDownload>
                </PostFileRow>
              </PostFileWrap>
              <PostBodyText>
                <PostTextInput
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
            <PostButton
              onClick={() => {
                onSubmit();
                setPageIndex(0);
              }}
            >
              수정
            </PostButton>
            <BackButton
              onClick={() => { setPageIndex(0); }}
            >
              취소
            </BackButton>
          </ButtonRow>
          <br /><br />
        </ButtonWrap>
      }

    </DetailWrap>
  )
}

export default AssignmentPostUpdate;