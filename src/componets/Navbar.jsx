import { Button, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authAction";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

  const authDispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector( state => state.cartReducer.cart )
  
  const handleLogout = () => {
    authDispatch(logout())
    navigate('/login')
  }

  const handleCart = () => {
    navigate('/cart')
  }


  return (
    <nav>
      <NavLink to={'/'}>
        <Heading as={"h2"}>Redux Shopping App </Heading>
      </NavLink>
      <div className="nav-item">
        <Text
          border={"1px"}
          padding={"1.5"}
          borderRadius={"lg"}
          bg={"teal.500"}
          color={"white"}
          fontSize={"lg"}
          fontWeight={"semibold"}
          cursor={'pointer'}
          onClick={handleCart}
        >
          cart item : {cart.length}
        </Text>
        <Button colorScheme="teal" onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
