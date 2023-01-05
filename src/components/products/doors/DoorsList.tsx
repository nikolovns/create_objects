import { DoorItem } from "./DoorItem";
import { CreateProduct } from "../CreateProducts";
import { ProductProps, ProductPropsTypes } from "../../../@types/ProductTypes";

import ProductContext from "../../../contexts/ProductContext";
import { useContext } from "react";

import Grid from '@mui/material/Grid'

export const DoorsList: React.FC = () => {

    const { products } = useContext(ProductContext) as ProductPropsTypes

    const doorsList = products?.map((door: ProductProps) => {
        return <DoorItem key={door.id} {...door} />
    });

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CreateProduct />
                </Grid>

                <Grid item xs={12} md={8}>
                    <h2>Created Products</h2>
                    <div>{doorsList}</div>
                </Grid>
            </Grid>
        </div>
    )
}