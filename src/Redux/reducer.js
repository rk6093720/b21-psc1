import {
  ADD_CURRENT_PRODUCT,
  FILTER_PRODUCT,
  GET_PRODUCTS,
  SORT_PRODUCT,
} from "./action";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload, filteredData: payload };
    case FILTER_PRODUCT:
      return { ...state, filteredData: payload };
    case SORT_PRODUCT:
      return { ...state, filteredData: payload };

    case ADD_CURRENT_PRODUCT:
      return { ...state, currentProduct: payload };
    default:
      return state;
  }
};
