import { Heading, HeroContainer, HeroWrapper, Subtitle, TextWrapper } from "./HeroStyles";
import Image from 'next/image';
import Link from "next/link";
import { Button, ButtonWrapper } from "../ButtonElement";

const Hero = () => {
	return ( 
		<HeroContainer>
			<HeroWrapper>
				<TextWrapper>
					<Heading>A.A.A. <br />CARCARÁ</Heading>
					<Subtitle>Associação Atlética Acadêmica<br />da Medicina UFPI</Subtitle>
				</TextWrapper>
			</HeroWrapper>
		</HeroContainer>
		);
}
 
export default Hero;