import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, LogoWrapper } from './SidebarStyles'
import Image from 'next/image';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LogoWrapper>
        <Image src="/LogoCarcara.png" width={70} height={70} />
      </LogoWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='teachers' onClick={toggle}>Produtos</SidebarLink>
          <SidebarLink to='highlights' onClick={toggle}>Eventos</SidebarLink>
          <SidebarLink to='perks' onClick={toggle}>Vantagens</SidebarLink>
          <SidebarLink to='start' onClick={toggle}>Instagram</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ExtLink href="https://www.instagram.com/aaacarcara/" target="blank" passHref >
            <SidebarRoute>Seja Sócio</SidebarRoute>
          </ExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
