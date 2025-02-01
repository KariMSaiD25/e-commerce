import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  alpha,
  Container,
  InputBase,
  Stack,
  styled,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useState } from "react";

import { useTheme } from "@emotion/react";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  flexGrow: "0.4",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  borderRadius: "50px",
  border: "1px solid  #777",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "18rem",
  height: "2.5rem",
  [theme.breakpoints.up("sm")]: {
    width: "20rem",
    height: "2.8rem",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "Car", "Clothes", "Electronics"];

function Header2() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    <Container sx={{ display: "flex", mt: 2, justifyContent: "space-between"  }}>
      <Stack
        alignItems={"center"}
        sx={{
          fontSize: {
            xs: "11px", // Extra-small screens
            sm: "14px", // Small screens
            md: "16px", // Medium screens
          },
        }}
      >
        <ShoppingCartOutlined />
        E-commerce
      </Stack>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <List
          sx={{
            height: "100%",
            m: 0,
            bgcolor: theme.palette.myColor.main,
            width: "11rem",
          }}
          component="nav"
          aria-label="Device settings"
        >
          <ListItem
            sx={{ "&:hover": { cursor: "pointer" }, p: "0 5px" }}
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{
                ".MuiTypography-root": {
                  fontSize: "14px",
                  fontWeight: "500",
                  Width: "9rem",
                  textAlign: "center",
                  cursor: "pointer",
                },
              }}
              secondary={options[selectedIndex]}
            />

            <ExpandMore fontSize="small" />
          </ListItem>
        </List>
        <Menu elevation={3}
          sx={{ 
            width:'10rem' ,
            position: "absolute",
            left: "1%",
            top:'2%'
             }}
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{ fontSize: "14px", p: "3px 10px", minHeight: "10px" }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary"></StyledBadge>{" "}
          <ShoppingCartIcon />{" "}
        </IconButton>{" "}
        <IconButton aria-label="profile">
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}

export default Header2;
