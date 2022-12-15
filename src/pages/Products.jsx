import { Heading, Box, Grid, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Functionality } from "../components/Functionality";
import { Paginataion } from "../components/Pagination";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../Redux/App/action";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.App.products);
  const filteredData = useSelector((store) => store.App.filteredData);

  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.ceil(filteredData.length / perPage);

  let end = page * perPage;
  let start = end - perPage;
  let paginatedProducts = filteredData.slice(start, end);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Functionality />
      <SimpleGrid columns={3}>
        {paginatedProducts.map((el, index) => {
          return <ProductCard key={index} product={el} />;
        })}
      </SimpleGrid>

      <Paginataion page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};
