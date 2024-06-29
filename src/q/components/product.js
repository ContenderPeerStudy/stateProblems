import styled from "styled-components";
import productListJson from "../../__mock__/products.json";
// 1. 입력: 없음
// 2. 출력: products.json의 모든 상품이 화면에 나와야 한다.
function ProductCard({ onNavigate }) {
    const productList = productListJson.products;
    return productList.map((el) => {
        const commaPrice = Number(el.productPrice).toLocaleString();

        return (
            <S.Item
                onClick={() => {
                    onNavigate(el.productNumber);
                }}
            >
                <h4>{el.productName}</h4>
                <p>상품번호: {el.productNumber}</p>
                <p>가격: {commaPrice}</p>
                <p>사이즈: {el.productSize}</p>
                <p>평점: {el.productRating}</p>
                <p>리뷰: {el.productReview}</p>
            </S.Item>
        );
    });
    // <S.Item onClick={onNavigate}>
    //     <h4>구멍난 양말</h4>
    //     <p>상품번호: 302012</p>
    //     <p>가격: 3000원</p>
    //     <p>사이즈: X, M, L</p>
    //     <p>평점: 4.5</p>
    //     <p>리뷰: 14</p>
    // </S.Item>
}
export default ProductCard;

const Item = styled.li`
    border: 1px solid #000;
    cursor: pointer;
    width: 300px;
    margin: 16px auto;
`;

const S = {
    Item,
};
