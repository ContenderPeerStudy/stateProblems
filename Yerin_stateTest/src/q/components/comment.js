import styled from "styled-components";
import React, { useState } from "react";

function Comment({ id, nickname, content, myComment, onDeleteComment, onEditComment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleEdit = () => {
    if (isEditing) {
      onEditComment(id, editContent);
    }
    setIsEditing(!isEditing);
  };

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>
      <p>
        댓글 내용: {isEditing ? (
          <input value={editContent} onChange={(e) => setEditContent(e.target.value)} />
        ) : (
          <span>{content}</span>
        )}
      </p>
      {myComment && (
        <div>
          <button onClick={() => onDeleteComment(id)}>삭제</button>
          <button onClick={handleEdit}>{isEditing ? "저장" : "수정"}</button>
        </div>
      )}
    </S.CommentItem>
  );
}

export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
  list-style: none;
`;

const S = {
  CommentItem,
};
