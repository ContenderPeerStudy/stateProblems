import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";

import { IsModalOpenContext } from "../context/modal_open_context";
import State2EditModalBox from "./components/state2_edit_modal_box";
function State2() {
    /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :()
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
              1) 입력창을 모두 ref 변수에 저장한다. 
              2) 작성 함수에서 1번 입력창의 데이터를 가져온다.
              3) 2번 데이터로 만든 객체를 Comments 배열에 추가한다. 
            2. 댓글 수정 기능
              1) 수정 버튼을 누르면 모달창이 열린다. 
                (1) 모달창은 작성자 상자, 내용 상자, 닫기 버튼, 수정 버튼이 있다.
                (2) isModalOpen state가 true이면 모달창이 열린다. (삼항연산자)
              2) 수정 버튼은 댓글 컴포넌트에 있다. 수정 버튼이 눌린 컴포넌트의 index를 가져온다.
                (1) 처음 댓글 컴포넌트를 생성할 때 배열의 index를 넣는다. 
                (2) 위에서 넣은 index를 state2 컴포넌트의 상태 변수에 넣는다.
              3) Comments에서 2의 index에 해당하는 요소를 찾아 가져온다. 
              4) 모달 컴포넌트에서 state2 컴포넌트로 모달창 입력값을 가져온다. 
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
                (1) 댓글 삭제 버튼 누르면 비밀번호 창이 작성자 옆에 뜬다. 
                (2) 입력한 비밀번호 값을 가져온다. 사용자는 비밀번호를 누르고 삭제버튼을 누른다. 
                (3) 삭제 버튼을 누른 댓글의 index를 가져온다.
                index에 저장된 비밀번호와 입력한 비밀번호가 같다면 삭제 작업에 돌입한다.
                (4) 원본 배열을 가져온다.
                (5) 원본 배열에서 3의 index에 해당하는 요소만 제외한다
                (6) 5의 배열을 comment로 설정한다.
    */
    const userRef = useRef();
    const contentRef = useRef();
    const passwordRef = useRef();
    const [isModalOpen, setIsModalOpen] = useContext(IsModalOpenContext);

    const [commentId, setCommentId] = useState();
    const [post, setPost] = useState({
        title: "안녕하세요 여러분 김성용 강사입니다 :)",
        content: "오늘도 모두 화이팅입니다!",
        User: {
            nickname: "김성용",
            age: 20,
            rank: "관리자",
        },
        Comments: [
            {
                User: {
                    nickname: "김사과",
                },
                content: "오늘도 화이팅입니다!",
                myComment: false,
                password: 12341,
            },
            {
                User: {
                    nickname: "반하나",
                },
                content: "오늘도 화이팅입니다!",
                myComment: false,
                password: 12342,
            },
            {
                User: {
                    nickname: "오렌지",
                },
                content: "오늘도 화이팅입니다!",
                myComment: false,
                password: 12343,
            },
            {
                User: {
                    nickname: "이멜론",
                },
                content: "오늘도 화이팅입니다!",
                myComment: false,
                password: 12344,
            },
            {
                User: {
                    nickname: "박수박",
                },
                content: "오늘도 화이팅입니다!",
                myComment: false,
                password: 12345,
            },
        ],
    });

    function onClickAddBtn() {
        const nickname = userRef.current.value;
        const content = contentRef.current.value;
        const password = passwordRef.current.value;
        const Comments = [
            ...post.Comments,
            {
                User: {
                    nickname,
                },
                content,
                myComment: false,
                password,
            },
        ];
        setPost({ ...post, Comments });
    }
    console.log(post);
    function updateComment(content) {
        let toBeUpdatedComment = post.Comments.find((_, index) => {
            return index === commentId;
        });
        toBeUpdatedComment.content = content;
    }
    function deleteComment(contentId) {
        //체크
        let DeletedComments = post.Comments.filter((_, index) => {
            return index !== commentId;
        });
        setPost({
            ...post,
            Comments: DeletedComments,
        });
    }
    return (
        <>
            {isModalOpen && (
                <State2EditModalBox
                    $onSubmitFunc={updateComment}
                    $editContentRef={contentRef}
                ></State2EditModalBox>
            )}
            <S.Wrapper>
                <h1>문제2</h1>
                <S.PostBox>
                    <S.PostTitle>제목: {post.title}</S.PostTitle>
                    <S.PostContent>내용: {post.content}</S.PostContent>
                </S.PostBox>
                <S.PostInfo>
                    <p>
                        작성자: <span>{post.User.nickname}</span>
                    </p>
                    <p>
                        작성자 나이: <span>{post.User.age}</span>
                    </p>
                    <p>
                        작성자 등급: <span>{post.User.rank}</span>
                    </p>
                </S.PostInfo>
                <div>
                    <p>
                        댓글 수: <span>{post.Comments.length}</span>
                    </p>
                    <input ref={userRef} placeholder="작성자" />
                    <input ref={contentRef} placeholder="댓글 내용" />
                    <input ref={passwordRef} placeholder="비밀번호" />
                    <button
                        onClick={() => {
                            onClickAddBtn();
                        }}
                    >
                        댓글 작성
                    </button>
                </div>
                <S.CommentList>
                    {/* list */}
                    {/* 예시 데이터 */}
                    {post.Comments.map((comment, commentId) => {
                        return (
                            <Comment
                                $comments={post.Comments}
                                $comment={comment}
                                $setIsModalOpen={setIsModalOpen}
                                $commentId={commentId}
                                $setCommentId={setCommentId}
                                $deleteComment={deleteComment}
                            />
                        );
                    })}
                </S.CommentList>
            </S.Wrapper>
        </>
    );
}
export default State2;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PostBox = styled.div`
    background-color: #999;
    width: 360px;
    padding: 10px;
`;

const PostTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const PostContent = styled.p`
    color: #fff;
`;

const PostInfo = styled.div`
    width: 360px;
    border: 3px solid #f00;
    padding: 10px;
    margin: 10px;

    p {
        display: flex;
        justify-content: space-around;
    }

    span {
        font-weight: bold;
    }
`;

const CommentList = styled.ul`
    width: 960px;
    list-style-type: none;
`;

const S = {
    Wrapper,
    PostBox,
    PostTitle,
    PostContent,
    PostInfo,
    CommentList,
};
