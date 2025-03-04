import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Dish from "./components/Dish.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";

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
  const [cartCount, setCartCount] = useState(0);

  // Doit être en stock && showNewOnly soit false ou isNew soit true
  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  function handleShowNewOnly() {
    setShowNewOnly((prevState) => !prevState);
  }

  function addToCart() {
    setCartCount((prevState) => prevState + 1);
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <main>
        <Container>
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
                    handleAddToCart={addToCart}
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
