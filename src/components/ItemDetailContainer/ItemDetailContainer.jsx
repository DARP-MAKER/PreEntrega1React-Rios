import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setProduct(data);
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, [id]);

    return (
        <div>
            <ItemDetail itemSelected={product}/>
        </div>
    );
};

export default ItemDetailContainer;
