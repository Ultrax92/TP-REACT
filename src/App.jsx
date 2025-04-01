import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err.message);
        setError("Une erreur est survenue lors du chargement des produits.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  async function handleAddProduct() {
    try {
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

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();
      alert(`Le produit avec l'id ${data.id} a été créé`);
    } catch (err) {
      console.error(err.message);
      alert("Erreur lors de la création du produit.");
    }
  }

  async function handleUpdateProduct(id) {
    try {
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

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();
      alert(`Le produit avec l'id ${data.id} a été modifié`);
    } catch (err) {
      console.error(err.message);
      alert("Erreur lors de la modification du produit.");
    }
  }

  async function handlePatchProduct(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: 5 }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();
      alert(`Le prix du produit avec l'id ${data.id} a été modifié`);
    } catch (err) {
      console.error(err.message);
      alert("Erreur lors de la modification du prix.");
    }
  }

  async function handleDeleteProduct(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();
      alert(`Le produit avec l'id ${data.id} a été supprimé`);
    } catch (err) {
      console.error(err.message);
      alert("Erreur lors de la suppression du produit.");
    }
  }

  // Affichage selon les états loading et error
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Chargement des produits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
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
                  className="mt-auto mb-2"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Modifier le produit complet
                </Button>
                <Button
                  variant="info"
                  className="mb-2"
                  onClick={() => handlePatchProduct(product.id)}
                >
                  Modifier le prix du produit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Supprimer le produit
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
