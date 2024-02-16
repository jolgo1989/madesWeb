import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const images = [
  {
    url: "https://www.clinicaveterinariazarpa.com/wp-content/uploads/2020/11/consejos-cuidar-iguana.jpg",
    title: "titulo1",
    Typography: "text1",
  },
  {
    url: "https://static.miscota.com/consejos/wp-content/uploads/2016/12/shutterstock_433466308-720x387.jpg",
    title: "titulo2",
    Typography: "text2",
  },
  {
    url: "https://media.istockphoto.com/id/622013488/es/foto/drag%C3%B3n-de-mar-chino.webp?b=1&s=170667a&w=0&k=20&c=F8WWe-KY1wGRHEUuIhobTWuw7MTRlCJBn8XZxnt4Ddo=",
    title: "titulo3",
    Typography: "text3",
  },
];

const Noticias = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {images.map((image) => (
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
      ))}
    </Card>
  );
};

export default Noticias;

// https://html5up.net/helios
