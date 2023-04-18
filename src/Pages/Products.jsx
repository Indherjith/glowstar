import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getProductRequest } from '../Redux/action';
import "./Products.css";
import { Card, Stack, Heading, Image, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'

const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector(store=>store.products)

  useEffect(()=>{
     dispatch(getProductRequest())
  },[])

  return (
    <div className='griding'>
      {
        products.map(item=>(
          <Card key={item.id} margin='auto' marginBottom='10' boxShadow='2px 2px 5px grey' maxW='sm'>
            <CardBody>
              <Image
                src={item.image}
                alt={item.title}
                width='md'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.title}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  {item.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='100'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}

export default Products