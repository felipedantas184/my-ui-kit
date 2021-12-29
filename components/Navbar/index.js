import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, LogoWrapper, NavbarContainer, NavbarLogo, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

	return ( 
		<NavbarContainer scrollNav={scrollNav}>
			<NavbarWrapper>
				<LogoWrapper>
						<Image src="/vercel.svg" width={50} height={50} />
				</LogoWrapper>
				<Link href="/" passHref>
					<NavbarLogo scrollNav={scrollNav} onClick={toggleHome}>LOGO</NavbarLogo>
				</Link>
				<MobileIcon onClick={toggle}>
					<FaBars color="#D47734" />
				</MobileIcon>
			</NavbarWrapper>
		</NavbarContainer>
		);
}
 
export default Navbar;