import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IsModalOpenContext } from "../context/modal_open_context";
import DetailModalBox from "../q/components/detail_modal_box";
function DetailPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [paramState, setParamState] = useState(params);
    const [productState, setProductState] = useState(null);
    const [isModalOpen, setIsModalOpen] = useContext(IsModalOpenContext);
    const makeStars = (review) => {
        let string = [];
        for (let i = 0; i < Number(review.rating); i++) {
            string.push("★");
        }
        return string;
    };
    const onClickAddReview = () => {
        setIsModalOpen(true);
    };
    const addReview = () => {};
    useEffect(() => {
        const product = productList.products.find((product) => {
            return params.productNumber === product.productNumber;
        }); // 이 동작은 페이지 열렸을 때만 하는 게 좋으므로 useEffect 안으로 들어가야 한다.
        if (product === undefined) {
            navigate(`/`);
        }
        setProductState(product);
    }, [paramState]);
    if (productState === null)
        return; /* 이거 없으면 useEffect 실행 전에 아래 return문이 먼저 실행된다.
    이 경우, product.productName이 실행되는데, 상품 번호가 실제로 없는 상품 번호이면 product가 undefined이므로
    오류가 발생한다*/

    return (
        <>
            {isModalOpen && (
                <DetailModalBox $onSubmitFunc={addReview}></DetailModalBox>
            )}
            <form onSubmit={onClickAddReview}>
                <h3>{productState.productName}</h3>
                <S.Detail>
                    {productState.productDetail.productDetailInfo}
                </S.Detail>
                <button>상품평 추가</button>
                <ul>
                    {productState.Review.map((review) => {
                        return (
                            <S.Review>
                                <h4>{review.reviewer}</h4>
                                <div>{review.review}</div>
                                <div>{makeStars(review)}</div>
                            </S.Review>
                        );
                    })}
                </ul>
            </form>
        </>
    );

    {
        /* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
     */
    }
    {
        /* {params.productNumber} */
    }
}

const Detail = styled.div``;
const Review = styled.li`
    list-style: none;
    border: 1px solid #000;
    margin: 10px;
`;
const ButtonContainer = styled.div``;
const S = {
    Detail,
    Review,
    ButtonContainer,
};
export default DetailPage;
