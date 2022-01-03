import Head from 'next/head'
import getCommerce from '../utils/commerce'
import { Container, GridWrapper } from '../components/UsefulComponents';
import Layout from '../components/Layout';

import { collection, addDoc, getDocs } from 'firebase/firestore'
import fireDB from '../firebase/initFirebase'
import { useEffect, useState } from 'react';
import IphoneCard from '../components/IphoneCard';

/**
const iPhonesList = [
	{
		"name": "iPhone 11",
		"description": "Super Retina XDR display with ProMotion. Experience a faster, brighter, more responsive display.",
		"price": 4999,
		"category": "iPhone",
		"imageURL": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082"
	},
	{
		"name": "iPhone SE",
		"description": "A15 Bionic, the world’s fastest smartphone chip. Superfast 5G for faster download speeds and high-quality streaming.",
		"price": 3699,
		"category": "iPhone",
		"imageURL": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1586574259457"
	},
	{
		"name": "iPhone 12",
		"description": "Ceramic Shield is tougher than any smartphone glass. And you get dust, spill, and water resistance.",
		"price": 6499,
		"category": "iPhone",
		"imageURL": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000"
	},
	{
		"name": "iPhone 12 mini",
		"description": "Cinematic mode adds shallow depth of field automatically. You can also shift focus after you shoot.",
		"price": 5699,
		"category": "iPhone",
		"imageURL": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-purple-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1617130317000"
	},
]
 */

export async function getStaticProps() {
  const FirebaseProducts = await getDocs(collection(fireDB, "products"));
	const products = []
	FirebaseProducts.forEach((doc) => {
	const obj = {
		id: doc.id,
		...doc.data()
	}

	products.push(obj)
	});

  return {
    props: {
      products
    }
  }
}

export default function Home(props) {
  const { products } = props;


	//Firebase Test Start//
	/**
	const [iPhones, setIPhones] = useState([])

	useEffect(() => {
		getProductsData()
	}, [])
	 */

	/**
  async function adddata() {
    try{
      await addDoc(collection(fireDB, "users") , {name: 'Jéssica' , age: 25})
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }
	 */

	/**
	function addProductsData() {
    iPhonesList.map(async (iPhone) => {
			try {
				await addDoc(collection(fireDB, "products"), iPhone)
			} catch(error) {
				console.log(error)
				alert(error)	
			}
		})
	}
	 */

	/**
  async function getdata() {
    try{
      const users = await getDocs(collection(fireDB, "users"));
      const usersArray = []
      users.forEach((doc) => {

        const obj = {
          id: doc.id,
          ...doc.data()
        }

        usersArray.push(obj)
      });

      console.log(usersArray)
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }
	 */

	async function getProductsData() {
    try{
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = []
      users.forEach((doc) => {

        const obj = {
          id: doc.id,
          ...doc.data()
        }

        productsArray.push(obj)
      });

			setIPhones(productsArray)
    } catch(error) {
      console.log(error)
      alert(error)
    }
  }
	//Firebase Test End//
  
	return (
    <Layout commercePublicKey={props.commercePublicKey} >
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <GridWrapper>
          {products.map((iPhone) => (
            <IphoneCard key={iPhone.id} product={iPhone} />
          ))}
        </GridWrapper>
      </Container>
    </Layout>
  )
}
