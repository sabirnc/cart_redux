import { Card, Image , Stack, Heading, Text, Button, Divider ,  CardBody, CardFooter  } from "@chakra-ui/react";
import { addToCart } from "../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const ProductList = ({title , description , image , price , id}) => {

  const cartDispatcher = useDispatch()
  const auth = useSelector( state => state.authReducer )
  const navigate = useNavigate()
  
  
  const trimDes = (str) => {
    return str.slice(0, 150) + '...'
  }

  const trimTitle = (str) => {
    return str.slice(0, 25) + "...."
  }

  const handleAddToCart = (id , name , price , image) => {

      if(auth){
        cartDispatcher(addToCart(id , name , price, image))
      }else {
        navigate('/login')
      }

      
  }

  return (
    <Card maxW="xs" boxShadow={'lg'}>
      <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            objectFit={'contain'}
            boxSize={'250px'}
          />
        <Stack mt={'3'} spacing="3">
          <Heading size="md">{trimTitle(title)}</Heading>
          <Text>
            {trimDes(description)}
          </Text>
          <Text color="blue.600" fontSize="xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={ () => handleAddToCart(id , title , price , image)}>
            Add to cart
          </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductList
