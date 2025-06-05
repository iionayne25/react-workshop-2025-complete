import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductByID } from "../api/product";
import { IProduct } from "./ProductList";
import ReviewSection from "./components/ReviewSection";

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchProductByID(id)
        .then(setProduct)
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center text-xl text-slate-600 bg-black/5 h-10 ">
          Loading....
        </div>
      ) : (
        <div className="detail-container">
          <Link to="/" className="link-back">
            back
          </Link>
          <img
            src={product?.image}
            alt="product detail img"
            className="detail-img"
          />
          <div className="detail-text-container">
            <div className="">
              <h1 className="detail-name">{product?.name}</h1>
              <p className="detail-desc">{product?.description}</p>
            </div>

            <p className="text-3xl">Price: {product?.price} ฿</p>
          </div>
          <ReviewSection review={product?.review ?? ""} />
        </div>
      )}
    </>
  );
}
