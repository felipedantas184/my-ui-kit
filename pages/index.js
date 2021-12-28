import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/ButtonElement'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>

      <Button>Click Here</Button>
    </Container>
  )
}
