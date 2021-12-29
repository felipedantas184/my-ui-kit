import styled from "styled-components"; 
import { Link as LinkS } from 'react-scroll'

export const NavbarContainer = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#13131A' : 'transparent')};
	color: #F0EDEE;
	font-family: 'Montserrat';
	position: sticky;
  top: 0;
	z-index:10;
	transition: all 0.5s ease-in-out;
`
export const NavbarWrapper = styled.div`
	max-width: 1100px;
	height: 60px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 24px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const NavbarLogo = styled.a`
	text-decoration: none;
	font-size: 26px;
  font-weight: 500;
  color: ${({scrollNav}) => (scrollNav ? '#F6F6F6' : '#D47734')};
  transition: all 1s ease-in-out;
`
export const LogoWrapper = styled.div`
  display: none;
	
	@media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
		display: flex;
  }
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 27.5px;
    cursor: pointer;
    color: #fff;
    width: 50px;
    height: 27.5px;
		display: flex;
		justify-content: center;
		align-items: center;
}
`