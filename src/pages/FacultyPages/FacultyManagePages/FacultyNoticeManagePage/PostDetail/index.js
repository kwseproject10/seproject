import { toStringFormat } from "@utils/date";
import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap } from "./style";

const PostDetail = ({ selectedPostID, setPageIndex }) => {
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
    }
    fetch();
  }, [selectedPostID])

  return (
    <DetailWrap>
      {post === undefined ?
        ""
        :
        <ButtonWrap>
          <PageHeader>공지사항</PageHeader>
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
                <HeaderTitle>조회수&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.postHit}</PostInform>
              </HeaderRow>
            </PostHeader>
            <PostBody>
              {
                !post.postfile ?
                  ""
                  :
                  <PostFileWrap>
                    {post.postFile.map(
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
                    )}
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

export default PostDetail;