import Head from 'next/head'
import Container from '../components/Container/Container'
import Preview from '../components/Preview/Preview'
import HomeCollection from '../components/HomeCollection/HomeCollection'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Sample Ocean V2</title>
        <link rel='icon' href='/favicon.ico' />
        <script type='text/javascript' src='/js/ico.js'></script>
      </Head>
      <Container>
        <Preview />
        <HomeCollection />
      </Container>
    </div>
  )
}

export default Home
