import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {AddIcon ,MinusIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";

import { incremnetCartQuantity ,removeCartItem , decrementCartQuantity } from "../redux/actions/cartAction";

const Cart = () => {

  const item  = useSelector((state) => state.cartReducer );
  
  console.log(item);
  const cartDistpatch = useDispatch()
  

  const increment = (id , price) => {
    cartDistpatch(incremnetCartQuantity(id , price))
  }

  const removeFromCart = (id) => {
    cartDistpatch(removeCartItem(id))
  }

  const decrement = (id) => {
    cartDistpatch(decrementCartQuantity(id))
  }

  

  return (
    <section className="cart">
      {!item.cart.length && <Heading>no items in the cart</Heading>}  
      {item.cart.map(({ id, name, image, price, totalPrice, quantity }) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          width={"1000px"}
          key={id}
        >
          <Image
            objectFit="content"
            boxSize={"250px"}
            maxW={{ base: "100%", sm: "200px" }}
            src={image}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody margin={"2"}>
              <Stack spacing={"5"}>
                <Heading size="md">{name}</Heading>
                <Text as="b">Price : ${price}</Text>
              </Stack>
              <HStack marginTop={'4'}>
               <IconButton icon={<AddIcon />} background={'teal'} color={'white'} boxSize={'8'} onClick={() => increment(id , price)}/>
                <Text>{quantity}</Text>
                <IconButton icon={<MinusIcon />} background={'teal'} color={'white'} boxSize={'8'} onClick={() => decrement(id)}/>
                <Text >x{totalPrice.toFixed(2)}</Text>
              </HStack>
            </CardBody>
            <CardFooter>
              <Button variant="solid" colorScheme="teal" onClick={() => removeFromCart(id)}>
                remove
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
      <div style={{display:'flex' , justifyContent:'flex-end', alignItems:'center', padding:'10px'}}>
        <Heading as={'p'}>total: ${item.total.toFixed(2)}</Heading>
      </div>
    </section>
  );
};

export default Cart;
