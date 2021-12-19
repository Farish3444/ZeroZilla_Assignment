import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ProductName,image,AddToCart,visible=true}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"50px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ProductName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {visible  ?<Button onClick={AddToCart} size="small" color="primary">
          Add to Cart
        </Button> : null }
      </CardActions>
    </Card>
  );
}
