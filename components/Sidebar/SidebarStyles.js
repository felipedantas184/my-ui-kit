import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #151E3F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.7s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '100%')};

	font-family: 'Montserrat';
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  user-select: none;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media  screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 02s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    color: #D2593C;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled.p`
  background: #D2593C;
  white-space: nowrap;
  padding: 16px 64px;
  color: #FFF;
  font-size: 24px;
  outline:  none;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 13px 27px -5px, rgba(0, 0, 0, 0.9) 0px 8px 16px -8px;	

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #D4D4D4;
    color: #010606;
	  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`
export const ExtLink = styled.a`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`