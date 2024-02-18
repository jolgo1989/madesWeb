import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaDisplay } from "react-icons/fa6";

const images = [
  {
    url: "https://www.clinicaveterinariazarpa.com/wp-content/uploads/2020/11/consejos-cuidar-iguana.jpg",
    title: "titulo1",
    Typography:
      " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    url: "https://static.miscota.com/consejos/wp-content/uploads/2016/12/shutterstock_433466308-720x387.jpg",
    title: "titulo2",
    Typography:
      " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    url: "https://media.istockphoto.com/id/622013488/es/foto/drag%C3%B3n-de-mar-chino.webp?b=1&s=170667a&w=0&k=20&c=F8WWe-KY1wGRHEUuIhobTWuw7MTRlCJBn8XZxnt4Ddo=",
    title: "titulo3",
    Typography:
      " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const Noticias = () => {
  return (
    <Card
      sx={{
        background: "#303030",
        display: "flex",
        maxWidth: "90%",
      }}
    >
      {images.map((image) => (
        <CardActionArea
          sx={{
            padding: 2,
          }}
        >
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
      ))}
    </Card>
  );
};

export default Noticias;

// https://html5up.net/helios
