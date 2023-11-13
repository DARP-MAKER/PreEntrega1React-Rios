import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ItemDetail />
        </div>
    );
};

export default ItemDetailContainer;
