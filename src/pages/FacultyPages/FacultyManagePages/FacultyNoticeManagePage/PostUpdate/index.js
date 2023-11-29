import { toStringFormat } from "@utils/date";
import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostButton, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostInput, PostTextInput, PostWrap } from "./style";

const PostUpdate = ({ selectedPostID, setPageIndex }) => {
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
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/noticepost?ID=${selectedPostID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data:{
          name: "중간고사 결과 공지",
          poster: "박철수",
          postDate: "2020.06.08(목) 20:32",
          postHit: "10",
          postText: `중간고사 결과를 첨부와 같이 공지 합니다. 
    
    이의신청은 6월 7일 수요일 오전 9시~9시 50분 사이에 915호에서 진행됩니다. `,
          postFile: [
            {
              name: "중간고사_결과.pdf",
              size: "110.37 KB",
              url: ""
            },
            {
              name: "중간고사_결과.pdf",
              size: "110.37 KB",
              url: ""
            }
          ]
        }
      }
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

export default PostUpdate;