import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <Container className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col xs={1} sm={2} md={3} lg={3} key={product.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.substring(0, 100)}...
                </Card.Text>
                <Card.Text>{product.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
