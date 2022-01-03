import { BuyButton, Card, ProductPrice, ProductTitle } from './ProductCardStyles';
import Image from 'next/image'; 
import Link from 'next/link';
import { ImageWrapper } from '../UsefulComponents';

const ProductCard = ({product}) => {
	return (
		<Link href={'/products/' + product.permalink} passHref>
			<Card>
				<ImageWrapper>
					<Image src={product.image.url} alt={product.name} layout='fill'  />
				</ImageWrapper>
				<ProductTitle>{product.name}</ProductTitle>
				<ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
			</Card>
		</Link>
	);
}
 
export default ProductCard;