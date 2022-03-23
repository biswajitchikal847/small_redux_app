import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClickedproductData } from "../Redux/actions";


export const SingleProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.clickedProd);

  // make a request to get the details
  useEffect(() => {
    dispatch(getClickedproductData(params.id));
  }, []);
  return (
    <div id="single_prod-div">
      <img src={details.image} alt={details.title} />
      <div id="details">
        <h1 >
          {details.title}
        </h1>
        <h3
        >
          $ {details.price}
        </h3>
        <p>Brand: {details.brand}</p>
        <p>Category: {details.category}</p>

        {console.log(details)}
      </div>
    </div>
  );
};