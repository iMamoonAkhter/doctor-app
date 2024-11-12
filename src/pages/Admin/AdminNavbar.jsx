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
            <BootstrapNavbar bg="light" expand="lg" className="d-flex justify-content-between">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <BootstrapNavbar.Brand href="#">EveCare Hospital - Admin Panel</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <button className="btn btn-link" aria-label="Logout" onClick={handleLogout}>
                            <FaSignOutAlt size={24} />
                        </button>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>

            {/* Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Home" onClick={()=> handleNavigation('/admin')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Reviews" onClick={()=> handleNavigation('/admin/reviews')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Experties" onClick={()=> handleNavigation('/admin/experties')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Add Doctor" onClick={()=> handleNavigation('/admin/workinghours')} />
                    </ListItem>
                    
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
