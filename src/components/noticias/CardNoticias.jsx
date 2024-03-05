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

const ImgCard = ({ image }) => {
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

const CardNoticias = () => {
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
      <Box
        sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Card>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/2014342/pexels-photo-2014342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        </Card>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {images.map((image, index) => (
            <ImgCard key={index} image={image} />
          ))}
        </Box>
      </Box>

      <Card sx={{ width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

export default CardNoticias;

// https://html5up.net/helios
