import styled from "styled-components"; 

export const HeroContainer = styled.section` 
  background: whitesmoke;
	color: #F0EDEE;
	font-family: 'Montserrat';
  margin-top: -60px;
`
export const HeroWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 24px 75px 24px;

	display: flex;
  flex-direction: column;
	justify-content: start;
	align-items: center;
`
export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  margin-bottom: 75px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: #D47734;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 12px;
  }
`
export const Subtitle  = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  font-family: 'Montserrat';
  color: #13131A;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const BtnWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;


  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`;
export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;
