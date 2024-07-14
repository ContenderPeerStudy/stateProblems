import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productList from "../__mock__/products.json";

function DetailPage() {
  
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const { productNumber } = useParams();
  
  const [newReview, setNewReview] = useState({ reviewer: "", review: "", rating: "" });

  useEffect(() => {
    const foundProduct = productList.products.find(
      (item) => item.productNumber.toString() === productNumber
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/");
    }
  }, [productNumber, navigate]);

  if (!product) {
    return null; 
  }

  const formatPrice = (price) => {
    return parseInt(price, 10).toLocaleString();
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.reviewer && newReview.review && newReview.rating) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        Review: [...prevProduct.Review, newReview],
      }));
      setNewReview({ reviewer: "", review: "", rating: "" });
    }
  };



  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
     */}
      <h1>상품 상세 페이지</h1>
      <h2>{product.productName}</h2>
      <p>가격: {formatPrice(product.productPrice)}원</p>
      <p>상품 번호: {product.productNumber}</p>
      <p>설명: {product.productDetail.productDetailInfo}</p>

      <h3>구매평</h3>
      <ul>
        {product.Review.map((review, index) => (
          <li key={index}>
            <p>작성자: {review.reviewer}</p>
            <p>내용: {review.review}</p>
            <p>평점: {review.rating}</p>
          </li>
        ))}
      </ul>

      <h3>구매평 추가</h3>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>
            작성자:
            <input
              type="text"
              name="reviewer"
              value={newReview.reviewer}
              onChange={handleReviewChange}
            />
          </label>
        </div>
        <div>
          <label>
            내용:
            <input
              type="text"
              name="review"
              value={newReview.review}
              onChange={handleReviewChange}
            />
          </label>
        </div>
        <div>
          <label>
            평점:
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
              min="1"
              max="5"
            />
          </label>
        </div>
        <button type="submit">추가</button>
      </form>
      
    </div>
  );
}
export default DetailPage;
