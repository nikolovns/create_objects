import React, { useContext, useState } from 'react';
import { ProductProps, ProductType } from '../../../@types/ProductTypes';
import { ProductPropsTypes } from '../../../@types/ProductTypes';
import ProductContext from '../../../contexts/ProductContext';
import { EditProduct } from '../EditProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system';

export const DoorItem: React.FC<ProductProps> = (door) => {

    const [showEdit, setShowEdit] = useState(false)

    const { deleteProduct } = useContext(ProductContext) as ProductPropsTypes;

    const handleDelete = (id: number | undefined) => {
        if (!id) {
            return;
        }

        deleteProduct(id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    return (
        <Card>
            <CardContent sx={{ pd: "2px" }}>
                <i
                    onClick={() => handleDelete(door.id)}
                    style={{ cursor: "pointer" }}
                >
                    <DeleteIcon />
                </i>
                <i
                    onClick={handleEdit}
                    style={{ cursor: "pointer" }}
                >
                    <EditIcon />
                </i>
            </CardContent>

            {
                showEdit ?
                    <div>
                        <EditProduct product={door} handleEdit={handleEdit} />
                    </div>
                    :

                    <CardContent sx={{ mb: '20px' }}>
                        <Typography>
                            Product type: {door.productType}
                        </Typography>

                        <Typography>
                            Product model: {door.model}
                        </Typography>

                        <Typography>
                            <Box component="span" sx={{ display: 'inline-block', pr: '10px' }}>
                                W: {door.width}
                            </Box>
                            <Box component="span" sx={{ display: 'inline-block', pr: '10px' }}>
                                H: {door.height}
                            </Box>
                        </Typography>

                        <Typography>
                            Product shape: {door.shape}
                        </Typography>
                    </CardContent>
            }
        </Card>
    )
}