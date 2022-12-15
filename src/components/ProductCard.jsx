import { Heading, Box, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addCurrent } from "../Redux/App/action";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function addCurrentProduct() {
    dispatch(addCurrent(product));
    navigate(`/product/${product.id}`);
  }
  return (
    <Box id="product-container" onClick={addCurrentProduct}>
      <Image src={product.image} />
      <Box>
        <Heading>{product.title}</Heading>
        <Heading>{product.category}</Heading>
        <Heading>{product.price}</Heading>
        <Heading>{product.brand}</Heading>
      </Box>
    </Box>
  );
};
