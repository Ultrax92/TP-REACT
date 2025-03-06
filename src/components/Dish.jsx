import { Badge, Card, Button } from "react-bootstrap";
import "../assets/styles/dish.scss";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Dish({ image, name, price, isNew }) {
  const {addToCart} = useContext(CartContext);
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
        <Button variant="primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
