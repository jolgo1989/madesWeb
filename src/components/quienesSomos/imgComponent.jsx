import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./imgComponent.scss";

const images = [
  {
    url: "https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "MISIÓN",
    width: "30%",
  },
  {
    url: "https://images.pexels.com/photos/1518761/pexels-photo-1518761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "VISIÓN",
    width: "40%",
  },
  {
    url: "https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "OBJETIVOS",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const imgComponent = () => {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            border: "0.5px solid gray",
            height: "90%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <div className="button">
              <div class="btn-border-dark">
                <div class="btn-border-dark-inner">
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className="Typography"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                  </Typography>
                </div>
              </div>
            </div>
          </Image>
        </ImageButton>
      ))}

      {/*Efecto tomado de: https://frontendresource.com/css-border-animations/ */}
    </Box>
  );
};

export default imgComponent;
