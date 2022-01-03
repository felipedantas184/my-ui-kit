import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { MobileIcon, LogoWrapper, NavbarContainer, NavbarLogo, NavbarWrapper, Badge } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';
import Router from 'next/router';

const Navbar = ({ toggle, cart }) => {
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

	const proccessToCartHandler = () => {
    Router.push('/cart');
  };

	return ( 
		<NavbarContainer scrollNav={scrollNav}>
			<NavbarWrapper>
				<LogoWrapper>
						<Image src="/vercel.svg" width={50} height={50} />
				</LogoWrapper>
				<Link href="/" passHref>
					<NavbarLogo scrollNav={scrollNav} onClick={toggleHome}>LOGO</NavbarLogo>
				</Link>
				{/** 
				<MobileIcon onClick={toggle}>
					<FaBars color="#D47734" />
				</MobileIcon>
				*/}

				<MobileIcon onClick={proccessToCartHandler} >
				{cart.loading ? (
						<FaShoppingCart color='#D47734' />
					) : cart.data.total_items > 0 ? (
					<>
						<FaShoppingCart color='#D47734' />
						<Badge>{cart.data.total_items}</Badge>
					</>
				) : (
					<FaShoppingCart color='#D47734' />
				)}	
				</MobileIcon>
			</NavbarWrapper>
		</NavbarContainer>
		);
}
 
export default Navbar;