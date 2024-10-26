import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg" className="d-flex justify-content-between">
            <BootstrapNavbar.Brand>EveCare Hospital - Admin Panel</BootstrapNavbar.Brand>
            <div className="ml-auto">
                <button className="btn btn-link" aria-label="Logout">
                    <FaSignOutAlt size={24} />
                </button>
            </div>
        </BootstrapNavbar>
    );
};

export default Navbar;
