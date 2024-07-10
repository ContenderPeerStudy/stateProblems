import { Navigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect, useState } from "react";

function DetailPage() {
    const params = useParams();
    console.log(params.productNumber);
    const [product, setProduct] = useState();
    useEffect(() => {
        const foundProduct = productList.products.find(
            (e) => e.productNumber === params.productNumber
        );
        if (!foundProduct) {
            Navigate("/");
        } else {
            setProduct(foundProduct);
        }
    }, [params.productNumber]);

    const onSubmitNewReview = (event) => {
        event.preventDefault();
        const newReview = {
            reviewer: event.target.reviewer.value,
            review: event.target.review.value,
            rating: event.target.rating.value,
        };
        setProduct({ ...product, Review: [newReview, product.Review] });
    };
    if (product === undefined) return;
    return (
        <>
            <form onSubmit={onSubmitNewReview}>
                <input name="reviewer" placeholder="이름을 입력해주세요" />
                <input name="review" placeholder="평점을 입력해주세요" />
                <input name="rating" placeholder="후기를 작성해주세요" />
                <button>리뷰 추가</button>
            </form>
            {product.Review.map((e, i) => {
                return (
                    <div key={i}>
                        <p>{e.reviewer}</p>
                        <p>{e.review}</p>
                        <p>{e.rating}</p>
                    </div>
                );
            })}
            <div>{product.productDetail.productDetailInfo}</div>
        </>
    );
}
export default DetailPage;
