import { useRef } from "react";
import styled from "styled-components";

const UpdateCommentModal = ({ $setIsEditing, $updateComment }) => {
    console.log("모달창 열림");
    const authorRef = useRef();
    const contentRef = useRef();

    function onClickXBtn() {
        $setIsEditing(false);
    }
    function onEditFinished() {
        $setIsEditing(false);
        $updateComment(contentRef.current.value);
    }

    return (
        <S.Modal onSubmit={onEditFinished}>
            <S.Form>
                <S.Title>
                    <S.CloseBtn onClick={onClickXBtn}>x</S.CloseBtn>
                </S.Title>

                <S.InputContainer>
                    <S.Input placeholder="내용" ref={contentRef}></S.Input>
                </S.InputContainer>
                <button onClick={onEditFinished}>수정 완료</button>
            </S.Form>
        </S.Modal>
    );
};
const Modal = styled.div`
    /* display: flex;
    flex-direction: column; */
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 1px solid;
    width: 30%;
    height: 40%;
    z-index: 1001;
`;
const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 22px;
`;
const CloseBtn = styled.button``;

const InputContainer = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
const Input = styled.input`
    height: 20px;
    width: 100%;
`;
const S = {
    Modal,
    Form,
    Title,
    CloseBtn,
    InputContainer,
    Input,
};

export default UpdateCommentModal;
