import Card from "react-bootstrap/Card";
import "../assets/styles/dish.scss";

function Dish({ name, price, imgSrc }) {
  return (
    <Card>
      <Card.Img src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix : {price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
