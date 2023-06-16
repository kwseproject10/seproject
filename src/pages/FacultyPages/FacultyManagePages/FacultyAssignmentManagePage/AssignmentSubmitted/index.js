import { toStringFormat } from "@utils/date";
import axios from "axios";
import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap } from "./style";

const AssignmentSubmit = ({ selectedPostID, setPageIndex }) => {

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
      console.log(res.data);
      setPost(res.data.post);
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
              <HeaderRow>
                <LeftPadding />
                <HeaderTitle>D-day&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.Dday <= 0 ? "마감" : `D-${post.Dday}`}</PostInform>
              </HeaderRow>
            </PostHeader>
            <PostBody>
              {
                !post.postfile ?
                  ""
                  :
                  <PostFileWrap>
                          <PostFileRow>
                            <LeftPadding />
                            <PostFileDownload
                              url={post.postFile.url}
                            >
                              <PostFileIconWrap>
                                <PostFileIcon />
                              </PostFileIconWrap>
                              {post.postFile.name} / {post.postFile.size}
                            </PostFileDownload>
                          </PostFileRow>
                  </PostFileWrap>
              }
              <PostBodyText>
                {post.postText}
              </PostBodyText>
            </PostBody>
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