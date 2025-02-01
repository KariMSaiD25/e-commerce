import {
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Paper,
  Typography,
  Box,
  ListItemIcon,
  ListItemText,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WindowIcon from "@mui/icons-material/Window";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";
//import ListItemIcon from '@mui/material/ListItemIcon';

function Header3() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container  sx={{ display: "flex", justifyContent: "space-between", alignItems:'end' , mt:1,p :2}}>
      <Paper elevation={2} sx={{ width: "220px" }}>
        <Button
          sx={{ p: "7px 4px", width: "100%",  bgcolor:theme.palette.myColor.main }}
          color="inherit"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowIcon />

          <Typography variant="body2" mx={"4px"}>
            Categories
          </Typography>

          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          sx={{ ".MuiList-root": { width: 215 } }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Paper>
      <div>
        {useMediaQuery("(min-width:1090px)") && (
          <Stack direction={"row"}  justifyContent={'space-between'}   gap={3}  >
            <Links title="home" />
            <Links title="Page Menu" />
            <Links title="Full Screen Menu" />
            <Links title='Page'/>
            <Links title="User Account" />
            <Links title="Vendor Account" />
            
          </Stack>
        )}

        {useMediaQuery("(max-width:1090px)") && (
          <IconButton
            aria-label="menu-button"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <Drawer
        elevation={0}
        sx={{
          ".MuiPaper-root": { width: "20rem", bgcolor: theme.palette.primary },
          ".MuiAccordion-root": { m: 0, py: "5px" },
        }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <IconButton
          sx={{
            justifyContent: "start",
            width: "2.5rem",
            margin: "1.5rem 0.5rem",
            ":hover": { color: " red", rotate: "180deg", transition: "0.3s" },
          }}
          aria-label="close-menu"
          onClick={toggleDrawer("right", false)}
        >
          <CloseIcon />
        </IconButton>

        {[
          { mainLink: "Home", subLink: ["link1", "link2", "link3"] },
          { mainLink: "Home1", subLink: ["link1", "link2", "link3"] },
          { mainLink: "Home2", subLink: ["link1", "link2", "link3"] },
        ].map((item) => (
          <Accordion key={item.mainLink}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ py: 0, my: 0 }} component="span">
                {item.mainLink}
              </Typography>
            </AccordionSummary>
            <List>
              {item.subLink.map((link) => (
                <ListItem key={link} sx={{ py: 0, my: 0 }}>
                  <ListItemButton>
                    <ListItemText primary={link} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Accordion>
        ))}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>hello world</AccordionDetails>
        </Accordion>
      </Drawer>
    </Container>
  );
}
export default Header3;
