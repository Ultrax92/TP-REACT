import { Badge, Card, Button } from "react-bootstrap";
import "../assets/styles/dish.scss";

function Dish({ image, name, price, isNew, handleAddToCart }) {
  return (
    <Card>
      {isNew && (
        <Badge bg="primary" className="position-absolute end-0 mt-2 me-2">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
