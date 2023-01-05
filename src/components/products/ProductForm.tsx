import { ProductPropsTypes, ProductType } from "../../@types/ProductTypes";
import { useContext } from 'react';
import ProductContext from "../../contexts/ProductContext";

import { useForm, SubmitHandler } from "react-hook-form";

import Button from '@mui/material/Button';
import { Card, TextField, CardContent, Typography, CardActions } from "@mui/material";

type FormFields = {
    productType: string,
    model: string,
    width: number,
    height: number,
    shape: string
}

let initialState = {
    productType: '',
    model: '',
    width: 0,
    height: 0,
    shape: ''
}

export const ProductForm: React.FC<ProductType> = ({ product, handleEdit }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFields>({
        defaultValues: initialState
    });

    const onSubmit: SubmitHandler<FormFields> = data => handleFormSubmit(data);

    if (product) {
        initialState = product
    }

    const { saveProduct, editProduct } = useContext(ProductContext) as ProductPropsTypes;

    const handleFormSubmit = async (data: FormFields) => {
        console.log(product)
        if (!product) {
            saveProduct(data);
            reset()
            return;
        }

        //do this if the product exist - edit it.
        editProduct(data)

        //change the showEdit boolean to hide the edit form 
        handleEdit && handleEdit();
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Typography sx={{ mb: '20px' }}>
                        <TextField
                            required
                            id="type"
                            label="Product type"
                            variant="outlined"
                            type="text"
                            {...register("productType", validation.productType)}
                        />
                        <Typography sx={{ mb: '20px', fontSize: '12px' }}>
                            <span>{errors.productType && errors.productType.message}</span>
                        </Typography>
                    </Typography>
                    <Typography sx={{ mb: '10px' }}>
                        {/* <label htmlFor="model">Model name:</label> */}
                        <TextField
                            required
                            id="model"
                            label="Model"
                            type="text"
                            variant="outlined"
                            {...register('model', validation.model)}
                        />
                        <Typography sx={{ mb: '20px', fontSize: '12px' }}>
                            <span>{errors?.model && errors.model.message}</span>
                        </Typography>
                    </Typography>
                    <Typography sx={{ mb: '10px' }}>
                        <TextField
                            required
                            id="width"
                            label="Width"
                            type="number"
                            variant="outlined"
                            {...register('width', validation.width)}
                        />
                        <Typography sx={{ mb: '20px', fontSize: '12px' }}>
                            <span>{errors.width && errors.width.message}</span>
                        </Typography>
                    </Typography>
                    <Typography sx={{ mb: '10px' }}>
                        {/* <label htmlFor="height">Height:</label> */}
                        <TextField
                            required
                            id="height"
                            label="height"
                            type="number"
                            variant="outlined"
                            {...register('height', validation.height)}
                        />
                        <Typography sx={{ mb: '20px', fontSize: '12px' }}>
                            <span>{errors.height && errors.height.message}</span>
                        </Typography>
                    </Typography>
                    <Typography sx={{ mb: '10px' }}>
                        {/* <label htmlFor="shape">Shape:</label> */}
                        <TextField
                            required
                            id="shape"
                            label="Shape"
                            type="text"
                            variant="outlined"
                            {...register('shape', validation.shape)}
                        />
                        <Typography sx={{ mb: '20px', fontSize: '12px' }}>
                            <span>{errors.shape && errors.shape.message}</span>
                        </Typography>
                    </Typography>

                    <CardActions>
                        <Button variant="contained" type="submit">Save</Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

const validation = {
    productType: {
        required: 'The field is reqired',
        minLength: {
            value: 2,
            message: 'The lenght must be 2 charactars'
        }
    },
    model: {
        required: "The field is reqired",
        minLength: {
            value: 3,
            message: 'The lenght must be 3 charactars'
        }
    },
    width: {
        required: "The field is reqired",
        valueAsNumber: true
    },
    height: {
        required: "The field is reqired"
    },
    shape: {
        required: "The field is reqired"
    }
};