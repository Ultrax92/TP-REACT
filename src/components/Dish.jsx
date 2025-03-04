import { Card, Badge } from "react-bootstrap";
import "../assets/styles/dish.scss";

function Dish({ name, price, imgSrc, isNew }) {
  return (
    <Card>
      <div>
        {isNew && (
          <Badge pill variant="success">
            Nouveau
          </Badge>
        )}
        <Card.Img src={imgSrc} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix : {price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
