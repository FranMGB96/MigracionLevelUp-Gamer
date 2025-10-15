import { useParams } from "react-router-dom";
import { products } from "../data/products";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    
    const product = products.find((p) => p.id === id); 
    
    return (
        <>
            <h1>Detalle</h1>
            <h2>{product?.title}</h2>
            <p>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product?.price || 0)}</p>
        </>
    )
}
