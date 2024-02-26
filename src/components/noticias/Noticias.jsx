import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { images } from "./Data";

const NoticiaCard = ({ image }) => {
  return (
    <Card sx={{ width: "25%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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

const Noticias = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        maxWidth: 1366,
        margin: "auto",
      }}
    >
      <Card sx={{ width: "70%" }}>
        <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.clinicaveterinariazarpa.com/wp-content/uploads/2020/11/consejos-cuidar-iguana.jpg"
            alt="green iguana"
            sx={{ width: "88%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
          {images.map((image, index) => (
            <NoticiaCard key={index} image={image} />
          ))}
        </Box>
      </Card>

      <Card sx={{ width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.clinicaveterinariazarpa.com/wp-content/uploads/2020/11/consejos-cuidar-iguana.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              molestiae! Laboriosam excepturi fugiat ex cupiditate et eius quos
              magni reprehenderit nobis aspernatur eveniet, facere sunt unde
              iure doloremque corrupti repellat. Lizards are a widespread group
              of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur, molestiae! Laboriosam
              excepturi fugiat ex cupiditate et eius quos magni reprehenderit
              nobis aspernatur eveniet, facere sunt unde iure doloremque
              corrupti repellat.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Noticias;

// https://html5up.net/helios
