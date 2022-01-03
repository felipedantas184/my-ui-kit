import Head from 'next/head'
import getCommerce from '../../utils/commerce'
import ProductCard from '../../components/ProductCard';
import { Container, GridWrapper, HalfWrapper, Heading, ImageWrapper, Subtitle, SubtitlePrice, TextWrapper, Topline } from '../../components/UsefulComponents'
import Image from 'next/image';
import { Button } from '../../components/ButtonElement';
import { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import { Store } from '../../components/Store';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const commerce = getCommerce();
  const product = await commerce.products.retrieve(id, {
		type: 'permalink',
	});
  return {
    props: {
      product,
    }
  }
}

export default function Product(props) {
  const { product } = props;

	const [quantity, setQuantity] = useState(1);

	const { state, dispatch } = useContext(Store);
  const { cart } = state;

	const addToCartHandler = async () => {
    const commerce = getCommerce(props.commercePublicKey);
    const lineItem = cart.data.line_items.find(
      (x) => x.product_id === product.id
    );
    if (lineItem) {
      const cartData = await commerce.cart.update(lineItem.id, {
        quantity: quantity,
      });
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
      //Router.push('/cart');
    } else {
      const cartData = await commerce.cart.add(product.id, quantity);
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
      //Router.push('/cart');
    }
  };

  return (
		<Layout commercePublicKey={props.commercePublicKey} >
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <GridWrapper>
          <HalfWrapper>
						<Image src={product.image.url} alt={product.name} width={470} height={556} />						
					</HalfWrapper>
					<HalfWrapper>
						<TextWrapper>
							<Topline>Novidade</Topline>
							<Heading>{product.name}</Heading>
							<SubtitlePrice>{product.price.formatted_with_symbol}</SubtitlePrice>
							<Subtitle>Our biggest camera upgrade ever. All-new Pro camera system. Advanced low-light performance. Incredible detail with macro photography.</Subtitle>
							<input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
						</TextWrapper>
						<Button onClick={addToCartHandler} >Comprar Agora</Button>
					</HalfWrapper>
        </GridWrapper>
      </Container>
		</Layout>
  )
}
