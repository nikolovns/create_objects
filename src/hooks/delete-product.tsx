import axios from "axios"
import { useContext } from "react"
import { ProductPropsTypes } from "../@types/ProductTypes";
import ProductContext from "../contexts/ProductContext"

export const useDeleteProduct = () => {
    const { fetchProducts } = useContext(ProductContext) as ProductPropsTypes;

    const handleDeleteProduct = async (id: number) => {
        await axios.delete(`http://localhost:3001/doors/${id}`)
        fetchProducts();
    }

    return { handleDeleteProduct }
}
