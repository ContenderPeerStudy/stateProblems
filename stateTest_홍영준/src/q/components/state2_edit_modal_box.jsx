import { useContext, useRef } from "react";
import styled from "styled-components";
import { IsModalOpenContext } from "../../context/modal_open_context";

const State2EditModalBox = ({ $onSubmitFunc }) => {
    const [isModalOpen, setIsOpenModal] = useContext(IsModalOpenContext);
    const editContentRef = useRef();
    return (
        <S.ModalScreen>
            <S.Form
                onSubmit={(e) => {
                    // e.preventDefault();
                    setIsOpenModal(false);
                    $onSubmitFunc(editContentRef.current.value);
                }}
            >
                <S.Title>
                    <S.CloseBtn
                        onClick={() => {
                            setIsOpenModal(false);
                        }}
                    >
                        x
                    </S.CloseBtn>
                </S.Title>
                <S.InputContainer>
                    <S.Input
                        placeholder={"수정할 내용을 입력하세요"}
                        ref={editContentRef}
                    ></S.Input>
                </S.InputContainer>
                <button>수정 완료</button>
            </S.Form>
        </S.ModalScreen>
    );

    // <S.InputContainer>
    //     <S.Input placeholder="내용" ref={contentRef}></S.Input>
    // </S.InputContainer>;
};

export default State2EditModalBox;

/*
props 목록[
    {
    placeholder,
    ref
},
{
    placeholder,
    ref
}
]



*/
const ModalScreen = styled.div`
    /* display: flex;
    flex-direction: column; */
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;
const Form = styled.form`
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
    border: 1px solid #000;
`;
const S = {
    ModalScreen,
    Form,
    Title,
    CloseBtn,
    InputContainer,
    Input,
};
