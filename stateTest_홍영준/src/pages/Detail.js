import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
function DetailPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [paramState, setParamState] = useState(params);
    const product = productList.products.find((product) => {
        return params.productNumber === product.productNumber;
    }); // 이 동작은 페이지 열렸을 때만 하는 게 좋으므로 useEffect 안으로 들어가야 한다.
    const makeStars = (review) => {
        let string = [];
        for (let i = 0; i < Number(review.rating); i++) {
            string.push("★");
        }
        return string;
    };
    useEffect(() => {
        if (product === undefined) {
            navigate(`/`);
        }
    }, [paramState]);
    if (product === undefined)
        return; /* 이거 없으면 useEffect 실행 전에 아래 return문이 먼저 실행된다.
    이 경우, product.productName이 실행되는데, 상품 번호가 실제로 없는 상품 번호이면 product가 undefined이므로
    오류가 발생한다*/

    return (
        <div>
            <h3>{product.productName}</h3>
            <S.Detail>{product.productDetail.productDetailInfo}</S.Detail>
            <button>상품평 추가</button>
            <ul>
                {product.Review.map((review) => {
                    return (
                        <S.Review>
                            <h4>{review.reviewer}</h4>
                            <div>{review.review}</div>
                            <div>{makeStars(review)}</div>
                        </S.Review>
                    );
                })}
            </ul>
            {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
     */}
            {/* {params.productNumber} */}
        </div>
    );
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
