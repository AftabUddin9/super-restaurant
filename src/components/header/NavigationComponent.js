import { Navbar, NavbarBrand } from 'reactstrap';

const NavigationComponent = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/"> Super Restaurant </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default NavigationComponent;