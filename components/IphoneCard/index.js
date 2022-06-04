import { BuyButton, Card, ProductPrice, ProductTitle } from './IphoneCardStyles';
import Image from 'next/image'; 
import Link from 'next/link';
import { ImageWrapper } from '../UsefulComponents';

const IphoneCard = ({product}) => {
	return (
		<Link href={'/' + product.id} passHref>
			<Card>
				<ImageWrapper>
					<Image src={product.imageURL} alt={product.name} layout='fill'  />
				</ImageWrapper>
				<ProductTitle>{product.name}</ProductTitle>
				<ProductPrice>{product.price}</ProductPrice>
			</Card>
		</Link>
	);
}
 
export default IphoneCard;