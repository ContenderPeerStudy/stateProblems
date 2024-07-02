import styled from "styled-components";

const ModalScreen = () => {
    return <S.Modal></S.Modal>;
};

const S = {
    Modal,
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

export default ModalScreen;
