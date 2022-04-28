import '../styles/globals.css'

import Overlay from '../components/Overlay'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col items-center'>
      <Component {...pageProps} />
      <Overlay />
    </div>
  )
}

export default MyApp
