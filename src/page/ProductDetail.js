import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let{id} = useParams();
  const getProductDetail=async()=>{
    let url=`http://localhost:4500/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data?",data)
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  })
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="img"/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice": ""}</div>
          <div>{product?.new === true ? "신제품" : ""}</div>
          <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item,index) => (
                    <Dropdown.Item href="#/action-1" key={index}>{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown><br/>
            <Button variant="danger" className="add-button">
              추가
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
