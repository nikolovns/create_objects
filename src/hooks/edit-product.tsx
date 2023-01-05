import axios from "axios"
import { useContext } from "react"
import { ProductProps, ProductPropsTypes } from "../@types/ProductTypes"
import ProductContext from "../contexts/ProductContext"

export const useUpdateProduct = () => {

    const { fetchProducts } = useContext(ProductContext) as ProductPropsTypes

    const handleEditProduct = async (product: ProductProps) => {
        await axios.put(`http://localhost:3001/doors/${product.id}`, product)
        fetchProducts()
    }

    return { handleEditProduct }
}
