import Head from 'next/head'
import fireDB from '../firebase/initFirebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import Layout from '../components/Layout';
import { Container, GridWrapper, HalfWrapper, Heading, Subtitle, SubtitlePrice, TextWrapper, Topline } from '../components/UsefulComponents';
import { Button } from '../components/ButtonElement';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const getStaticPaths = async () => {
	const firebaseProducts = await getDocs(collection(fireDB, "products"));
	const products = []
	firebaseProducts.forEach((doc) => {
		const obj = {
			id: doc.id,
			...doc.data()
		}
		products.push(obj)
	});

	const paths = products.map(item => {
		return {
			params: { id: item.id }
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const data = await getDoc(doc(fireDB, "products", id));
	const firebaseData = data.data()

  return {
    props: { product: firebaseData }
  }
}


const ProductDetails = (props) => {
	const { product } = props;
	const {cartItems} = useSelector(state=>state.cartReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}, [cartItems])

	const addToCart = (product) => {
		dispatch({type:'ADD_TO_CART', payload: product})
	}

	return ( 
		<Layout commercePublicKey={props.commercePublicKey}>
      <Head>
        <title>Homepage</title>
      </Head>

			<Container>
        <GridWrapper>
          <HalfWrapper>
						{/**<img src={product.imageURL} alt={product.name} />*/}						
						<Image src={product.imageURL} alt={product.name} width={470} height={556} />						
					</HalfWrapper>
					<HalfWrapper>
						<TextWrapper>
							<Topline>Novidade</Topline>
							<Heading>{product.name}</Heading>
							<SubtitlePrice>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(product.price)}</SubtitlePrice>
							<Subtitle>{product.description}</Subtitle>
						</TextWrapper>
						<Button onClick={() => addToCart(product)} >Comprar Agora</Button>
					</HalfWrapper>
        </GridWrapper>
      </Container>
		</Layout>
		);
}
 
export default ProductDetails;