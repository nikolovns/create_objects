import React, { createContext, useState, useMemo, useCallback, useEffect } from "react";
import { ProductProps } from "../@types/ProductTypes";
import axios from "axios";
import { ProductPropsTypes, ChildrenProps } from "../@types/ProductTypes";

const ProductContext = createContext<ProductPropsTypes | null>(null);

export const Provider: React.FC<ChildrenProps> = ({ children }) => {

    const [createdObject, setCreatedObject] = useState<ProductProps[]>([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/doors');

        setCreatedObject(response.data)
    }, [])

    const productContext: ProductPropsTypes = {
        products: createdObject,
        fetchProducts
    }

    return (
        <ProductContext.Provider value={productContext}>
            {children}
        </ProductContext.Provider>
    )

}

export default ProductContext;