function Dish({ name, price, image }) {
    return (
        <div className="dish">
            <img
                src={image}
                alt={name}
            />
            <h3>{name}</h3>
            <p>Prix : {price}€</p>
        </div>
    );
}

export default Dish;