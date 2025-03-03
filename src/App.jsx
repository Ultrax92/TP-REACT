import "./App.css";
import Header from './components/Header.jsx';
import Dish from './components/Dish.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Dish
        name="Tacos à l’unité"
        price={3}
        image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
      />
      <Dish
        name="Enchiladas"
        price={12}
        image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
      />
      <Dish
        name="Mole poblano"
        price={15}
        image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
      />
      <Footer />
    </>
  );
};

export default App;
