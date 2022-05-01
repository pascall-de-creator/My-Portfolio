import '../styles/globals.css'
import Head from 'next/head'

import Overlay from '../components/Overlay'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pascal Nkornyui Developer Portfolio . Best Developer for frontend backend and fullstack developing . Pascall de creator . Pascall de developer ." />
        <meta name="keywords" content="Portfolio , developer , best , frontend - front end development , backend - back end developing , full stack development , pascall de crreator , pascall de developer , pascal nkornyui" /> 
      </Head>
      <div className='flex flex-col items-center'>
        <Component {...pageProps} />
        <Overlay />
      </div>
    </>
  )
}

export default MyApp
