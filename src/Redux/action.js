import * as types from "./actionType"
import axios from "axios"

export const getProductRequest=() => (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    axios
      .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
      .then((r) =>
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: r.data.data })
      )
      .catch((err) =>
        dispatch({ type: types.GET_PRODUCT_FAILURE, payload: err })
      );
  };