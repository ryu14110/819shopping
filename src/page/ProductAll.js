import React, {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] =useSearchParams();
  const getProducts=async()=>{
    let searQuery = query.get('q')||"";
    console.log("쿼리 값은?",searQuery);
    let url =` http://localhost:4500/products?q=${searQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data?",data);
    setProductList(data);
  }
  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index)=>(
            <Col lg={3} key={index}><ProductCard item={menu}/></Col>
          ))}         
        </Row>
      </Container>
       
    </div>
  )
}

export default ProductAll
