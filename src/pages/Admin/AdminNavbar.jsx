import { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleLogout = () => {
        console.log("Logout");
    };
    const handleNavigation = (path) => {
        navigate(path);
        toggleDrawer(false)(); // Close the drawer after navigation
    };
    return (
        <>
            {/* Navbar */}
            <BootstrapNavbar bg="light" expand="lg" className="d-flex">
                <div style={{marginRight:"1vw"}}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                </div>
                <div>
                <BootstrapNavbar.Brand>EveCare Hospital - Admin Panel</BootstrapNavbar.Brand>

                </div>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
            </BootstrapNavbar>

            {/* Drawer */}
            <Drawer
            sx={{
                width: 240,  // Change this value to increase the width
                flexShrink: 0, // Prevents Drawer from shrinking
                '& .MuiDrawer-paper': {
                  width: 240, // Set width of the Drawer content
                  backgroundColor: 'lightgray', // Optional: customize background color
                },
              }}
               anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Home" onClick={()=> handleNavigation('/admin')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Reviews" onClick={()=> handleNavigation('/admin/reviews')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Experties" onClick={()=> handleNavigation('/admin/experties')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Add Doctor" onClick={()=> handleNavigation('/admin/workinghours')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="About" onClick={()=> handleNavigation('/admin/bio')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Setting" onClick={()=> handleNavigation('/admin/settings')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{cursor:"pointer"}} primary="Logout" onClick={()=> handleLogout()} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
