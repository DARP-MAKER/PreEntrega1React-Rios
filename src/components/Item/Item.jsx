import "../Styles/Styles.css"
const Item = ({ title, description, price, image }) => {
    return (
        <div className="card-container">
            <h6 className="card-tittle">{title}</h6>
            <img src={image} alt={title} width={70} />
            <div className="card-description">
                <p>{description}</p>
            </div>
            <p>${price}</p>

        </div>
    );
};

export default Item;