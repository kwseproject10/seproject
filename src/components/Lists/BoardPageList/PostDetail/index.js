import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { SelectedPostIDState } from "../../../../Atom";
import { toStringFormat } from "../../../../utils/date";
import { fileSize } from './../../../../utils/file';
import { BackButton, ButtonRow, ButtonWrap, DetailWrap, HeaderRow, HeaderTitle, LeftPadding, PageHeader, PostBody, PostBodyText, PostFileDownload, PostFileIcon, PostFileIconWrap, PostFileRow, PostFileWrap, PostHeader, PostInform, PostTitle, PostWrap } from "./style";

const PostDetail = ({ setInDetail, boardName }) => {

  const postID = useRecoilValue(SelectedPostIDState);
  const [post, setPost] = useState();

  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/${boardName === "자료실" ? `archive` : `notice`}post?ID=${postID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = (boardName === "자료실") ? {
        data : {
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
      } : {
        data : {
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
      console.log(res.data);
      setPost(res.data);
    }
    fetch();
  }, [boardName, postID])

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
                post.postFile.name === null ?
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