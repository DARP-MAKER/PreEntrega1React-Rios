import Item from "../Item/Item"

const ItemList = ({ productList }) => {
    return (

        <div className="item-list-container">
            {productList.map((product) => (
            <div key={product.id}>
                <Item
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            </div>
            ))}
        </div>
    );
};

export default ItemList