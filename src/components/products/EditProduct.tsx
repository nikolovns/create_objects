import { ProductProps, ProductType } from "../../@types/ProductTypes"
import { ProductForm } from "./ProductForm"

export const EditProduct: React.FC<ProductType> = ({ product, handleEdit }) => {

    return (
        <ProductForm product={product} handleEdit={handleEdit} />
    )
}