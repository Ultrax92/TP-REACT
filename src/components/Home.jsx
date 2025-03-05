import "../assets/styles/home.scss";

function Home() {
  const dishes = [
    {
      id: 1,
      name: "Plat 1",
      description: "Description du plat 1",
      price: "10€",
    },
    {
      id: 2,
      name: "Plat 2",
      description: "Description du plat 2",
      price: "12€",
    },
    {
      id: 3,
      name: "Plat 3",
      description: "Description du plat 3",
      price: "15€",
    },
  ];

  return (
    <div>
      <h1>Bienvenue sur notre menu</h1>
      <div>
        {dishes.map(function (dish) {
          return (
            <div key={dish.id}>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <p>Prix : {dish.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
