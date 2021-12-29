import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, ExtLink } from './FooterStyles'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref onClick={toggleHome}>
							<SocialLogo>
								CARCARÁ
							</SocialLogo>
            </Link>
            <WebsiteRights>CARCARÁ © {new Date().getFullYear()} Criado por Felipe Dantas.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink rel="noreferrer" href='https://www.instagram.com/aaacarcara/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.instagram.com/aaacarcara/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href="mailto:atleticamedufpi@gmail.com" target='_blank' arial-label='Email'>
                <FaEnvelope />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.instagram.com/aaacarcara/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.youtube.com/channel/UCJ58jGeYDkfiuIhejZUFKVA' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
