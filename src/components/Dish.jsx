import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/dish.scss";

function Dish({ name, price, imgSrc, isNew }) {
  const handleAddToCart = () => {
    alert(`Le plat ${name} est maintenant dans votre panier`);
  };
  return (
    <Card>
      {isNew && <Badge variant="success">Nouveau</Badge>}
      <Card.Img src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix : {price}€</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
