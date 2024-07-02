import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({
    $comments,
    $comment,
    $setIsModalOpen,
    $commentId,
    $setCommentId,
    $deleteComment,
    ...rest
}) {
    //$commentId에는 이 댓글의 index가 있다.
    const [isDeleting, setIsDeleting] = useState(false);
    const inputPassword = useRef();
    function onClickEditBtn() {
        $setIsModalOpen(true);
        $setCommentId($commentId);
    }
    function onClickDeleteBtn() {
        if (isDeleting === false) setIsDeleting(true);
        else {
            const inputPasswordValue = inputPassword.current.value;
            if ($comment.password.toString() !== inputPasswordValue) {
                setIsDeleting(false);
                alert("잘못된 비밀번호입니다");
                return;
            } else {
                $deleteComment($commentId);
                setIsDeleting(false);
            }
        }
    }
    return (
        <S.CommentItem>
            <S.Header>
                <p>
                    작성자: <span>{$comment.User.nickname}</span>
                </p>
                <span>
                    {isDeleting && (
                        <S.Input
                            placeholder="삭제하시려면 비밀번호를 입력하세요"
                            ref={inputPassword}
                        ></S.Input>
                    )}
                </span>
            </S.Header>

            <p>
                댓글 내용: <span>{$comment.content}</span>
            </p>
            <button
                onClick={() => {
                    onClickEditBtn();
                }}
            >
                수정
            </button>
            <button
                onClick={() => {
                    onClickDeleteBtn();
                }}
            >
                {isDeleting ? "삭제 확인" : "삭제"}
            </button>
        </S.CommentItem>
    );
}
export default Comment;
const Header = styled.div`
    /* display: flex;
    justify-content: center;
    gap: 5px; */
`;
const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;
const Input = styled.input`
    width: 30%;
`;
const S = {
    Header,
    CommentItem,
    Input,
};
