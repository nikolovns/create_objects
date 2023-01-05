export interface ProductProps {
    id?: number,
    productType: string,
    model: string,
    width: number,
    height: number,
    shape: string
}

export type ProductPropsTypes = {
    products: ProductProps[] | null,
    fetchProducts: () => Promise<void>
}

export interface ChildrenProps {
    children: React.ReactNode;
}

export type ProductType = {
    product?: ProductProps,
    handleEdit?: () => void
}
