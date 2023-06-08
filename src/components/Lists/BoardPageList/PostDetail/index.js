import { useEffect, useState } from "react";
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, InformWrap, PageHeader, PostBody, PostBodyText, PostDate, PostFileDownload, PostFileRow, PostHeader, PostHit, PostInform, PostTitle, Poster } from "./style";

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
          <PostHeader>
            <PostTitle>{post.name}</PostTitle>
            <InformWrap>
              <PostInform>
                <Poster>작성자: {post.poster}</Poster>
                <PostDate>작성일시: {post.postDate}</PostDate>
                <PostHit>조회수: {post.postHit}</PostHit>
              </PostInform>
            </InformWrap>
          </PostHeader>
          <PostBody>
            {post.postFileURL === undefined ?
              ""
              :
              <PostFileRow>
                <PostFileDownload>{post.postFileURL}</PostFileDownload>
              </PostFileRow>
            }
            <PostBodyText>
              {post.postText}
            </PostBodyText>
          </PostBody>
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