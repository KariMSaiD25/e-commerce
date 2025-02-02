import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"



function ProductDetails() {
  return (
    <Box display={'flex'} gap={3} alignItems={'center'} flexDirection={{xs:'column' , sm:'row' }} >
      <Box display={'flex'} >
<img src='../../../public/images/1.jpg' alt="" width={265}   />
      </Box>
      <Box textAlign={{xs:'center' , sm:'left'}}>

      <Typography variant="h5">
        category
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
        price
        </Typography>
        <Typography variant="body1">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>

      <Stack py={2}   direction={'row'} justifyContent={{xs:'center' , sm:'start' }} gap={2}> 
        {  ['../../../public/images/1.jpg' , '../../../public/images/2.jpg'].map((item) =>(
             
              <img src={item} alt="" key={item} width={60}  style={{borderRadius:2}}/>
          
        ))
         }
          </Stack>
          <Button variant="contained" sx={{textTransform:'capitalize' , mb:2}}>
          <AddShoppingCartOutlined  fontSize="small" sx={{ mr: 1 }} />
          Buy now
          </Button>
      </Box>
    </Box>
  )
}

export default ProductDetails
