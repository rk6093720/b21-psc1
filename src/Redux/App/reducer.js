import {
  ADD_CURRENT_PRODUCT,
  FILTER_PRODUCT,
  GET_PRODUCTS,
  SORT_PRODUCT,
} from "./action";
const initState = {
  products: [],
  cart: [],
  orders: [],
  currentProduct: {},
  filteredData: [],
};
export const Reducer = (state=initState, { type, payload }) => {
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
