import Head from 'next/head'
import dynamic from 'next/dynamic';
import getCommerce from '../utils/commerce'
import ProductCard from '../components/ProductCard';
import { Container, GridWrapper, Heading, OneQuarterWrapper, RemoveButton, Subtitle, SubtotalButton, SubtotalCard, SubtotalValue, TableCell, TableLine, TableWrapper, TextWrapper, ThreeQuartersWrapper, TitleText } from '../components/UsefulComponents';
import Layout from '../components/Layout';
import { useContext } from 'react';
import { Store } from '../components/Store';
import { FiX } from 'react-icons/fi'
import Router from 'next/router';
import { CART_RETRIEVE_SUCCESS } from '../utils/constants';
import Link from 'next/link';

function Cart(props) {
  const { products } = props;

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

	const removeFromCartHandler = async (lineItem) => {
    const commerce = getCommerce(props.commercePublicKey);
    const cartData = await commerce.cart.remove(lineItem.id);
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
  };
  const quantityChangeHandler = async (lineItem, quantity) => {
    const commerce = getCommerce(props.commercePublicKey);
    const cartData = await commerce.cart.update(lineItem.id, {
      quantity,
    });
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
  };

  const proccessToCheckoutHandler = () => {
    Router.push('/checkout');
  };

  return (
    <Layout commercePublicKey={props.commercePublicKey} >
			<Head>
				<title>Homepage</title>
			</Head>

				<Container>
	        <GridWrapper>
					{cart.loading ? (
					<TextWrapper>
						<Heading>Carrinho</Heading>
						<Subtitle>Estamos carregando o seu carrinho de compras! ;-)</Subtitle>
					</TextWrapper>
				) : cart.data.line_items.length === 0 ? (
					<TextWrapper>
						<Heading>Carrinho Vazio :(</Heading>
						<Subtitle>Seu carrinho de compras está vazio... <br /><Link href={'/'} >Clique aqui</Link> para escolher seus produtos!</Subtitle>
					</TextWrapper>
				) : (
					<>
          <ThreeQuartersWrapper>
              <Heading>Shopping Cart</Heading>
              <TableWrapper>
								<TableLine head>
									<TableCell name='true' >Nome</TableCell>
									<TableCell>Qntd.</TableCell>
									<TableCell>Preço</TableCell>
									<TableCell>Ação</TableCell>
								</TableLine>

								{cart.data.line_items.map((cartItem) => (
									<TableLine key={cartItem.name}>
										<TableCell name='true' >{cartItem.name}</TableCell>
										<TableCell>{cartItem.quantity}</TableCell>
										<TableCell>{cartItem.price.formatted_with_symbol}</TableCell>
										<TableCell>
											<RemoveButton onClick={() => removeFromCartHandler(cartItem)} >
												X
											</RemoveButton>
										</TableCell>
									</TableLine>
								))}
              </TableWrapper>
          </ThreeQuartersWrapper>
          <OneQuarterWrapper>
						<SubtotalCard>
							<TitleText>Subtotal</TitleText>
							<SubtotalValue>{cart.data.subtotal.formatted_with_symbol}</SubtotalValue>
							<SubtotalButton onClick={proccessToCheckoutHandler} >Checkout</SubtotalButton>
						</SubtotalCard>
          </OneQuarterWrapper>
					</>
					)
				}
        </GridWrapper>
      </Container>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Cart), {
  ssr: false,
});