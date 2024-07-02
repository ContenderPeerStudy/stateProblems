import styled from "styled-components";

function ProductCard({ onNavigate, $productInfo }) {
    console.log($productInfo);
    return (
        <S.Item onClick={onNavigate}>
            <h4>{$productInfo.productName}</h4>
            <p>상품번호: {$productInfo.productNumber}</p>
            <p>가격: {$productInfo.productPrice}</p>
            <p>사이즈: {$productInfo.productSize}</p>
            <p>평점: {$productInfo.productRating}</p>
            <p>리뷰: {$productInfo.productReview}</p>
        </S.Item>
    );
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
