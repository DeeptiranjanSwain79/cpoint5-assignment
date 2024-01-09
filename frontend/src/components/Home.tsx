import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BackendAPI from '../Axios.client';
import Loader from './Loader';
import CreateItemModal from './CreateItemModal';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);;

    // Function to get all the grocery items
    const getAllGroceryItems = async () => {
        try {
            setLoading(true);
            const response = await BackendAPI.get('/get');

            if (response && response.data && response.status === 200) {
                // console.log(response.data.items);
                setItems(response.data.items);
                setLoading(false);
            }
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }

    const onModalCloseFunc = () => {
        setOpenModal(false);
        getAllGroceryItems();
    }

    useEffect(() => {
        getAllGroceryItems();
    }, []);

    if (loading) return <Loader />

    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "2vmax" }}>
            <Button onClick={() => setOpenModal(true)} variant='contained'
                sx={{
                    width: '90%',
                    borderRadius: "0.5rem"
                }}
            >Add Grocery Item</Button>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: "1vmax",
                }}
            >
                {
                    items.length !== 0 && items.map((item: any, index: number) => (
                        <Card
                            key={index}
                            sx={{
                                width: { md: '30%', xs: '90%' },
                                margin: '1rem',
                                height: { md: '12rem', xs: 'auto' },
                                cursor: 'pointer',
                                overflow: 'auto',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardContent sx={{ overflow: "auto" }}>
                                <Typography variant="h6">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" textTransform="capitalize">
                                    Price: ${item.price} | Quantity: {item.quantity}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Created at: {new Date(item.timestamp).toLocaleString()}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description: {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Box>

            {openModal && <CreateItemModal open={openModal} onClose={onModalCloseFunc} />}
        </Box>
    )
}

export default Home