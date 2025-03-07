import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Dish from "./components/Dish.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "./context/CartContext.jsx";

function App() {
  const dishes = [
    {
      name: "Tacos à l’unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
      stock: 12,
    },
    {
      name: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
      stock: 0,
    },
    {
      name: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
      stock: 5,
    },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);
  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);

  useEffect(() => {
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  function handleShowNewOnly() {
    setShowNewOnly((prevState) => !prevState);
  }

  return (
    <>
      <Header />

      <main>
        <Container>
          <p>
            Le panier est passé de {prevCartCountRef.current} à {cartCount}{" "}
            articles.
          </p>
          <Button
            variant="primary"
            className="mb-2"
            onClick={handleShowNewOnly}
          >
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
          </Button>
          <Row>
            {filteredDishes.map((dish, index) => {
              return (
                <Col md={4} key={index}>
                  <Dish
                    name={dish.name}
                    price={dish.price}
                    image={dish.image}
                    isNew={dish.isNew}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
