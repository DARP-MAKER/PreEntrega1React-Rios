import Item from "../Item/Item"

const ItemList = ({productList}) => {
    return (
        <div>
            productList.map((product)) => (
                <Item
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            ));
        </div>);
};

export default ItemList