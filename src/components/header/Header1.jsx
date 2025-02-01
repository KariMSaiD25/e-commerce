import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import { Box, IconButton, useTheme, Typography, Stack, MenuItem, Menu, ListItemText, List, ListItem, Container} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
const options = [
  'AR', 
  'EN'
];
function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] =useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ bgcolor: "#283445"   , py :'4px'}}>
    <Container>
      <Stack direction={"row"} alignItems={"center"}  >
        <Typography
          variant="body2"
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#D23F57",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          HOT
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
        >
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                localStorage.setItem("mode", (theme.palette.mode = "dark"));
                colorMode.toggleColorMode();
              }}
            >
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem("mode", (theme.palette.mode = "light"));
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>

        <List   sx={{p :0, m:0 , }}
        
        component="nav"
        aria-label="Device settings"
      
      >
        <ListItem
            sx={{'&:hover':{cursor:'pointer'} , p:1, bgColor:"#283445"}}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            
        sx={{'.MuiTypography-root':{fontSize:'12px',color:"white"} }}    secondary={options[selectedIndex]}
          />

          <ExpandMore  fontSize="small" sx={{color:"white"}} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:'11px' , p :'3px 10px' , minHeight:'10px' }} 
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

        <Twitter
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <Facebook
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <Instagram
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </Stack>
      </Container>
    </Box>
  );
}

export default Header;
