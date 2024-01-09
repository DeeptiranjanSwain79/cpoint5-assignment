import { Box, Modal, Paper, Stack, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import BackendAPI from '../Axios.client';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import { red } from '@mui/material/colors';

type Props = {
    open: boolean;
    onClose: () => void;
}

const CreateItemModal: React.FC<Props> = ({ open, onClose }) => {

    const [isRequest, setIsRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const createGroceryItemForm = useFormik({
        initialValues: {
            name: "",
            description: "",
            category: "",
            price: "",
            quantity: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Item name is required"),
            description: Yup.string()
                .required("Item description is required"),
            category: Yup.string()
                .required("Category is required"),
            price: Yup.number()
                .required("Price is required"),
            quantity: Yup.number()
                .required("Quantity is required"),

        }),
        onSubmit: async values => {
            try {
                console.log(values)
                setErrorMessage(undefined);
                setIsRequest(true);
                const response = await BackendAPI.post('/create', values);
                setIsRequest(false);
                if (response && response.data && response.status === 200) {
                    onClose();
                    toast.success("Grocery item created successfully")
                }
            } catch (error: any) {
                setErrorMessage(error?.data?.message);
            }
        }
    })
    
    return (
        <Modal open={open} onClose={onClose}>
            <Paper
                sx={{
                    width: "90%",
                    padding: 4,
                    outline: "none",
                    margin: "auto",
                    marginTop: { md: "5%", xs: "2vh" },
                }}
                className={`bg-[#1e2e67]`}
            >
                <Box
                    component={'form'}
                    style={{
                        width: "99%",
                        margin: "auto",
                    }}
                    onSubmit={createGroceryItemForm.handleSubmit}
                >
                    <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <TextField
                                type="text"
                                label="Item name"
                                name="name"
                                required
                                sx={{ width: "49%" }}
                                value={createGroceryItemForm.values.name}
                                onChange={createGroceryItemForm.handleChange}
                                color="success"
                                error={createGroceryItemForm.touched.name && createGroceryItemForm.errors.name !== undefined}
                                helperText={createGroceryItemForm.touched.name && createGroceryItemForm.errors.name}
                            />
                            <TextField
                                type="text"
                                label="Item Category"
                                name="category"
                                sx={{ width: "49%" }}
                                value={createGroceryItemForm.values.category}
                                onChange={createGroceryItemForm.handleChange}
                                color="success"
                                error={createGroceryItemForm.touched.category && createGroceryItemForm.errors.category !== undefined}
                                helperText={createGroceryItemForm.touched.category && createGroceryItemForm.errors.category}
                            />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <TextField
                                type="number"
                                label="Item Price"
                                name="price"
                                sx={{ width: "49%" }}
                                value={createGroceryItemForm.values.price}
                                onChange={createGroceryItemForm.handleChange}
                                color="success"
                                error={createGroceryItemForm.touched.price && createGroceryItemForm.errors.price !== undefined}
                                helperText={createGroceryItemForm.touched.price && createGroceryItemForm.errors.price}
                            />
                            <TextField
                                type="number"
                                label="Quantity"
                                name="quantity"
                                sx={{ width: "49%" }}
                                value={createGroceryItemForm.values.quantity}
                                onChange={createGroceryItemForm.handleChange}
                                color="success"
                                error={createGroceryItemForm.touched.quantity && createGroceryItemForm.errors.quantity !== undefined}
                                helperText={createGroceryItemForm.touched.quantity && createGroceryItemForm.errors.quantity}
                            />
                        </Box>

                        <TextField
                            multiline
                            rows={5}
                            label="Quantity"
                            name="description"
                            fullWidth
                            value={createGroceryItemForm.values.description}
                            onChange={createGroceryItemForm.handleChange}
                            color="success"
                            error={createGroceryItemForm.touched.description && createGroceryItemForm.errors.description!== undefined}
                            helperText={createGroceryItemForm.touched.description && createGroceryItemForm.errors.description}
                        />

                        {errorMessage !== undefined && <Typography color={red}>{errorMessage}</Typography>}

                        <LoadingButton variant='contained' loading={isRequest} type='submit'>
                            Submit
                        </LoadingButton>
                    </Stack>
                </Box>
            </Paper>
        </Modal>
    )
}

export default CreateItemModal