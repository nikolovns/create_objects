import axios from "axios";
import { ProductProps, ProductPropsTypes } from "../@types/ProductTypes";
import ProductContext from "../contexts/ProductContext";
import { useContext } from 'react';

export function useSaveProduct() {

    const { fetchProducts } = useContext(ProductContext) as ProductPropsTypes

    const handleCreateProduct = async (product: ProductProps) => {
        const newProduct = {
            productType: product.productType,
            model: product.model,
            width: product.width,
            height: product.height,
            shape: product.shape
        }

        await axios.post('http://localhost:3001/doors', newProduct);
        fetchProducts()
    }

    return { handleCreateProduct }
}
