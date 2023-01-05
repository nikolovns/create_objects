import React, { createContext, useState, useMemo } from "react";
import { ProductProps } from "../@types/ProductTypes";
import axios from "axios";
import { ProductPropsTypes, ChildrenProps } from "../@types/ProductTypes";

const ProductContext = createContext<ProductPropsTypes | null>(null);

export const Provider: React.FC<ChildrenProps> = ({ children }) => {

    const [createdObject, setCreatedObject] = useState<ProductProps[]>([]);

    useMemo(async () => {
        const response = await axios.get('http://localhost:3001/doors');

        setCreatedObject(response.data)
    }, []);

    const saveProduct = async (product: ProductProps) => {
        const newProduct = {
            productType: product.productType,
            model: product.model,
            width: product.width,
            height: product.height,
            shape: product.shape
        }

        const response = await axios.post('http://localhost:3001/doors', newProduct);

        setCreatedObject([...createdObject, response.data]);
    }

    const deleteProduct = async (id: number) => {
        await axios.delete(`http://localhost:3001/doors/${id}`)

        const updatedProducts = createdObject.filter(object => object.id !== id)

        setCreatedObject(updatedProducts)
    }

    const editProduct = async (product: ProductProps) => {
        const response = await axios.put(`http://localhost:3001/doors/${product.id}`, product)

        const updatedProducts = createdObject.map(object => {
            if (object.id === product.id) {
                return { ...object, ...response.data }
            }

            return object
        });

        setCreatedObject(updatedProducts)
    }

    const productContext: ProductPropsTypes = {
        products: createdObject,
        saveProduct,
        deleteProduct,
        editProduct
    }

    return (
        <ProductContext.Provider value={productContext}>
            {children}
        </ProductContext.Provider>
    )

}

export default ProductContext;