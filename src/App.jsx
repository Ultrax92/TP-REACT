import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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

  async function handleAddProduct() {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nouveau produit",
        price: 29.99,
        description: "Produit ajouté via l'app React",
        image: "https://via.placeholder.com/150",
        category: "electronics",
      }),
    });

    const data = await response.json();
    alert(`Le produit avec l'id ${data.id} a été créé`);
  }

  async function handleUpdateProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Produit mis à jour",
        price: 49.99,
        description: "Description mise à jour",
        image: "https://via.placeholder.com/150",
        category: "electronics",
      }),
    });

    const data = await response.json();
    alert(`Le produit avec l'id ${data.id} a été modifié`);
  }

  return (
    <Container className="my-4">
      <div className="btnProduct mb-3">
        <Button variant="primary" onClick={handleAddProduct}>
          Ajouter un produit
        </Button>
      </div>
      <Row className="g-4">
        {products.map((product) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="cardImg"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.substring(0, 100)}...
                </Card.Text>
                <Card.Text>{product.price} €</Card.Text>
                <Button
                  variant="warning"
                  className="mt-auto"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Modifier le produit complet
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
