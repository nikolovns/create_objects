import { EditProductType } from "../../@types/ProductTypes"
import { ProductForm } from "./ProductForm"

export const EditProduct: React.FC<EditProductType> = ({ product, handleEdit }) => {

    return (
        <ProductForm product={product} handleEdit={handleEdit} />
    )
}