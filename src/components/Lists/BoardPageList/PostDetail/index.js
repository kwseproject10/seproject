import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap } from "./style";

const PostDetail = ({ setInDetail, postID, boardName }) => {

  //API call
  const [post, setPost] = useState();

  const loadPost = () => {
    setPost({
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
        }
      ]
    })
  }

  useEffect(loadPost, []);

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
                <HeaderTitle>조회수&nbsp;:&nbsp;</HeaderTitle>
                <PostInform>{post.postHit}</PostInform>
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
          <ButtonRow>
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

export default PostDetail;