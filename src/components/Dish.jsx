import { Card, Badge } from "react-bootstrap";
import "../assets/styles/dish.scss";

function Dish({ name, price, imgSrc, isNew }) {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        {isNew && (
          <Badge
            pill
            variant="success"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
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
