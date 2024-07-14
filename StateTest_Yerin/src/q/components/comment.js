import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({ id, nickname, content, myComment, posts, setPosts }) {
  const [isEdit, setIsEdit] = useState();

  const nicknameEditInput = useRef();
  const contentEditInput = useRef();

  const onClickSetEditMode = () => {
    setIsEdit(true);
  };

  const onClickCompletedEdit = () => {
    const tempComment = [...posts.Comments];
    const CommentIndex = tempComment.findIndex((post) => post.id === id);
    tempComment[CommentIndex] = {
      ...tempComment[CommentIndex],
      User: {
        nickname: nicknameEditInput.current.value,
      },
      content: contentEditInput.current.value,
    };
    setPosts({ ...posts, Comments: tempComment });
    setIsEdit(false);
  };

  const onClickDeletePost = () => {
    const filterPost = posts.Comments.filter((post) => post.id !== id);
    setPosts({ ...posts, Comments: filterPost });
  };

  return (
    <S.CommentItem>
      {isEdit ? <input ref={nicknameEditInput} /> : nickname}
      <div> </div>
      {isEdit ? <input ref={contentEditInput} /> : content}
      <button onClick={isEdit ? onClickCompletedEdit : onClickSetEditMode}>
        {isEdit ? "완료" : "수정"}
      </button>
      {myComment ? <button onClick={onClickDeletePost}>삭제</button> : <></>}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
