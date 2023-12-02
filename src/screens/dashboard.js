import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Paper,
  Box

} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {Grid} from "@mui/system/Unstable_Grid/Grid";
import { Grid } from "@mui/material";
import SalesChart from ".//..//components/SalesChart";


const Dashboard = ({averageSales}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState("");

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const date = new Date().toLocaleDateString();

  const texts = [
    'product listing',
    'Client Listing',
    'New Request',
    'All Request',
  ];


  return (
    <div
      style={{
        overflowY: "auto",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    top: 0,
    zIndex: 1000,
    position: "fixed",
    left: 0,
    bottom: 0,
    padding: "20px", // Adding padding to avoid content overflow
    boxSizing: "border-box", // Include padding in the width/height calculation
    display: "flex", // Ensure flex display
    flexDirection: "column",
      }}
    >
      {/* Your dashboard content */}

      <div style={{ marginTop: "100px", }}>
        <div style={{ display: 'flex' }}>
          {/* Sidebar navigation */}
          <Drawer
            variant="permanent"
            sx={{
              display: "flex",
              width: { xs: "100%", sm: 240 }, // Adjust width based on screen size
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: { xs: "100%", sm: 240 }, // Adjust width of Drawer content
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <div>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white", // Button background color
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  marginTop: "10px",
                  fontSize: "md", // Set font size
                  color: "navy", // Text color
                  display: "flex", // Make the button a flex container
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px", // Add margin between buttons
                  textAlign: "center",
                  boxShadow: "none",
                  // Add transition for smooth effect
                  "&:hover": {
                    backgroundColor: "#1769aa", // Change background color on hover
                    color: "white", // Change text color on hover // Scale the button on hover
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  Dashboard
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white", // Button background color
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start", // Align content to the left
                  fontSize: "md", // Set font size
                  color: "navy", // Text color
                  display: "flex", // Make the button a flex container
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px", // Add margin between buttons
                  textAlign: "center",
                  boxShadow: "none",
                  // Add transition for smooth effect
                  "&:hover": {
                    backgroundColor: "#1769aa", // Change background color on hover
                    color: "white", // Change text color on hover
                    // Scale the button on hover
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  Professional Listing
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  fontSize: "md",
                  color: "navy",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#1769aa",
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  Client Listing
                </Typography>
              </Button>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  fontSize: "md",
                  color: "navy",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#1769aa",
                    color: "white",
                  },
                }}
                onClick={(event) => handleClick(event, "open")}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  All Request
                </Typography>
                <ExpandMoreIcon /> {/* Icon for the submenu */}
              </Button>
              {/* Submenu */}
              {menuType === "open" && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  getContentAnchorEl={null}
                  PaperProps={{
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "none", // Remove box shadow
                      margin: "0", // Remove default margin
                      top: "unset", // Position the menu properly in the navbar
                      left: "unset", // Position the menu properly in the navbar
                      right: "unset", // Position the menu properly in the navbar
                      borderRadius: "0", // Remove border radius
                      width: "15%", // Set width to match button width
                      color: "navy",
                    },
                  }}
                  MenuListProps={{
                    sx: {
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "#1769aa", // Change background color on hover
                        color: "white", // Change text color on hover
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{/* Icon for submenu item 1 */}</ListItemIcon>
                    <ListItemText primary="Currently added" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{/* Icon for submenu item 2 */}</ListItemIcon>
                    <ListItemText primary="Closed Requests" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{/* Icon for submenu item 3 */}</ListItemIcon>
                    <ListItemText primary="Hired Requests" />
                  </MenuItem>
                </Menu>
              )}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  fontSize: "md",
                  color: "navy",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#1769aa",
                    color: "white",
                  },
                }}
                onClick={(event) => handleClick(event, "new")}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  New Requests
                </Typography>
                <ExpandMoreIcon />
              </Button>
              {/* Submenu */}

              {menuType === "new" && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  getContentAnchorEl={null}
                  PaperProps={{
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "none",
                      margin: "0",
                      top: "unset",
                      left: "unset",
                      right: "unset",
                      borderRadius: "0",
                      width: "15%",
                      color: "navy",
                    },
                  }}
                  MenuListProps={{
                    sx: {
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "#1769aa",
                        color: "white",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{/* Icon for submenu item 1 */}</ListItemIcon>
                    <ListItemText primary="Open Request" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{/* Icon for submenu item 2 */}</ListItemIcon>
                    <ListItemText primary="Closed Request" />
                  </MenuItem>
                </Menu>
              )}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white", // Button background color
                  width: "100%",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  marginTop: "10px",
                  fontSize: "md", // Set font size
                  color: "navy", // Text color
                  display: "flex", // Make the button a flex container
                  alignItems: "center",
                  padding: "10px 20px",
                  marginBottom: "20px", // Add margin between buttons
                  textAlign: "center",
                  boxShadow: "none",
                  // Add transition for smooth effect
                  "&:hover": {
                    backgroundColor: "#1769aa", // Change background color on hover
                    color: "white", // Change text color on hover // Scale the button on hover
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  Setting Page
                </Typography>
              </Button>
            </div>
          </Drawer>

          {/* Main content area */}
          <main style={{
      flexGrow: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div
        style={{
          backgroundColor: '#1769aa',
          borderRadius: '12px',
          marginBottom: '20px',
          padding: '8px',
        }}
      >
        <Typography variant="h6" style={{ color: 'white' }}>{date}</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper style={{
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#1769aa',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
          }}>
            <Typography variant="subtitle1"> {texts[0]}</Typography>
            
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#ff9800',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
          }}>
            <Typography variant="subtitle1">{texts[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#1769aa',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
          }}>
            {/* <Typography variant="subtitle1"> Average Sales of Month: {new Intl.NumberFormat('en-US').format(averageSales)}</Typography> */}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#ff9800',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
          }}>
            <Typography variant="subtitle1">{texts[3]}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
      <Box>
        <SalesChart />
      </Box>
      <div></div>
    </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
