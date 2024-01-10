import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

// Define the props type for the component
interface CardHousingProps {
    url: string;
    title: string;
    description: string;
    price: string;
}

const CardHousing: React.FC<CardHousingProps> = ({ url, title, description, price }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: "2em", fontFamily: "Cambria"}}>
            <CardMedia component="img" alt="picture of housing" sx={{ height: 200}} image={url} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{fontStyle: 'oblique'}}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" sx={{
                    textAlign: "justify",
                    fontSize: "13px",
                    color: "grey",
                    marginBottom: "10px"
                }}>
                    {description}
                </Typography>
                <section className={"flex items-center justify-between"}>
                    <Typography variant="body2">
                        {price} $ / night
                    </Typography>
                    <IconButton aria-label="delete" size="large">
                        <ShoppingCartIcon fontSize="inherit" />
                    </IconButton>
                </section>
            </CardContent>
        </Card>
    );
};

export default CardHousing;
