import { useTheme } from "@emotion/react";
import { Box, Container, Stack, Typography, Button, Rating } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
function Main() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const theme = useTheme();
  return (
    <Container >
      <Stack
        direction={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={5}
        gap={2.5}
      >
        <Box>
          <Typography
            variant="h5"
            textAlign={{ md: "left", xs: "center" }}
            color="inherit"
          >
            Selected Products
          </Typography>
          <Typography variant="body" color={theme.palette.neutral.main}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <Box display={"flex"} gap={1}>
          {["All Products", "Men Category", "Women Category"].map(
            (categoryName) => (
              <Button
                key={categoryName}
                sx={{
                  bgcolor:
                    selectedCategory === categoryName ? "gray" : "transparent",
                  borderColor:
                    selectedCategory === categoryName ? "inherit" : "gray",
                  p: 1.5,
                  margin: 1,
                  transition: "0.3s",
                }}
                variant="outlined"
                aria-label={`${categoryName} button`}
                onClick={() => setSelectedCategory(categoryName)}
              >
                <Typography variant="body2" color={theme.palette.text.primary}>
                  {categoryName}
                </Typography>
              </Button>
            )
          )}
        </Box>
      </Stack>
<Stack direction={"row"}
          flexWrap={"wrap"}
          justifyContent={'space-evenly'}
        gap={1}  >
      {  ['aaa' , 'bbb' , 'ccc'].map((item) => (    
        <Card key={item}  sx={{ maxWidth: 333  , mt:6 , ":hover .MuiCardMedia-root ": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },}}>
          <CardMedia
          
            component="img"
            alt="green iguana"
            height="277"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
          <Stack
                      direction={"row"}
                      
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        title
                      </Typography>

                      <Typography variant="subtitle1" component="p">
                      price
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button size="small">
            <Button
                    
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      add to cart
                    </Button>
            </Button>
            <Rating
                      precision={0.1}
                      name="read-only"
                      value={4}
                      readOnly
                    />
          </CardActions>
        </Card>))
      }
      </Stack>
      
      
    </Container>
  );
  }

export default Main;
