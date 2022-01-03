import Head from 'next/head'
import getCommerce from '../utils/commerce'
import ProductCard from '../components/ProductCard';
import { Container, GridWrapper } from '../components/UsefulComponents';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    }
  }
}

export default function Home(props) {
  const { products } = props;

  return (
    <Layout commercePublicKey={props.commercePublicKey} >
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <GridWrapper>
          {products.length === 0 && <alert>No Product Found</alert>}

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </GridWrapper>
      </Container>
    </Layout>
  )
}
