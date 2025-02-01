/* eslint-disable react/prop-types */
import { ExpandMore } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function Links({ title }) {
  return (
    <Box
      display={"flex"}
      sx={{
        cursor: "pointer",
        position: "relative",
        height: "1.9rem",
        ":hover .show-when-hover": { display: "block" },
      }}
    >
      <Typography variant="body" color="inherit">
        {title}
      </Typography>
      <ExpandMore />
      <Paper
        elevation={3}
        className="show-when-hover "
        sx={{
          width: "8rem",
          position: "absolute",
          transform: " translateX(-50% ) ",
          left: "50%",
          top: "100%",
          display: "none",
          zIndex: "2",
        }}
      >
        <nav aria-label="drop menu">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                  primary="Dashboard"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                ":hover .show-when-hover-on-products": { display: "block" },
              }}
            >
              <ListItemButton component="a" href="#simple-list">
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                  primary="Products"
                />

                <KeyboardArrowRightOutlinedIcon />
              </ListItemButton>
              <Box
                className="show-when-hover-on-products"
                sx={{
                  width: "7.3rem",
                  position: "absolute",
                  left: "100%",
                  top: "20%",
                  display: "none",
                  pl: "0.3rem",
                }}
              >
                <Paper elevation={3}>
                  <nav aria-label="drop menu">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": { fontSize: "13px", p: 0 },
                            }}
                            primary="Add products"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{ ".MuiTypography-root": { fontSize: "13px" } }}
                            primary="Edit Products"
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Paper>
              </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                  primary="Orders"
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                  primary="Profile"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>{" "}
    </Box>
  );
}

export default Links;
