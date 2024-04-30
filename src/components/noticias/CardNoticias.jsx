import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { images } from "./NewsData";

import "./CardNoticias.scss";

const ImgCard = ({ image, size }) => {
  const className = `card-size-${size}`;
  return (
    <Card className={className}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image={image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {image.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {image.Typography}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CardNoticias = () => {
  return (
    <Box className="container">
      {images.map((image, index) => {
        // lógica para asignar tamaños
        // Por ejemplo, asignar tamaños basados en el índice:
        let size;
        if (index % 3 === 0) {
          size = 1; // Tamaño pequeño
        } else if (index % 3 === 1) {
          size = 2; // Tamaño mediano
        } else if (index % 3 === 2) {
          size = 3; // Tamaño mediano
        }

        return <ImgCard key={index} image={image} size={size} />;
      })}
    </Box>
  );
};

export default CardNoticias;
