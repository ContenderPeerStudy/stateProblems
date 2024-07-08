import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect, useState } from "react";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();

  console.log(params.productNumber);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productList.products.find(
      (p) => p.productNumber === params.productNumber
    );
    if (!foundProduct) return navigate("/");
    else {
      setProduct(foundProduct);
    }
  }, [params.productNumber, navigate]);

  const onSubmitNewReview = (event) => {
    event.preventDefault();
    const newReview = {
      reviewer: event.target.reviewer.value,
      review: event.target.review.value,
      rating: event.target.rating.value,
    };
    setProduct({ ...product, Review: [newReview, ...product.Review] });
  };

  if (!product) {
    return null;
  }

  return (
    <>
      <div>
        <h2>상세정보페이지</h2>
        <p>상세정보: {product.productDetail.productDetailInfo}</p>
      </div>
      <form onSubmit={onSubmitNewReview}>
        <input name="reviewer" placeholder="이름을 입력해주세요" />
        <input name="review" placeholder="평점을 입력해주세요" />
        <input name="rating" placeholder="후기를 작성해주세요" />
        <button>리뷰 추가</button>
      </form>
      {product.Review.map((data, i) => {
        return (
          <div key={i}>
            <p>{data.reviewer}</p>
            <p>{data.review}</p>
            <p>{data.rating}</p>
          </div>
        );
      })}
    </>
  );
}
export default DetailPage;
