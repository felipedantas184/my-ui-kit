import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Navbar = (props) => {
    return ( 
        <nav className="nav">
            <div className="NavbarContainer">
                <Link href="/">
                    <a className="NavLogo">LOGO</a>
                </Link>
                <div className="mobileIcon">
                    <FaBars />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;