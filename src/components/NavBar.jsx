import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box id="navbar-container" width={"100%"} height={"50px"} bg={"teal"}
     padding={"5px"} color={"white"} display={"flex"} justifyContent={"space-between"}>
      <Box flex={"4"}>
      <Heading size={"md"}>MINI ECOMMERCE</Heading>
      </Box>
      <Box flex={"6"} display={"flex"} justifyContent={"space-between"}>
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/signup"} >
          Signup
        </Link>
        <Link to={"/login"}> Login</Link>
      </Box>
    </Box>
  );
};
