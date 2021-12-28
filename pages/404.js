import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container404 } from '../styles/pages/404'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 400000)
  }, [])

  return (
    <Container404>
      <h1>Erro 404</h1>
      <h2>Oops! A página não foi encontrada:(</h2>
      <p>Redirecionando para <Link href="/"><a className="BackLink">Homepage</a></Link> em alguns segundos ;)...</p>
    </Container404>
  );
}
 
export default NotFound;