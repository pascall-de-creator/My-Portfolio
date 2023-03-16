import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5
      }
    }
  }

  return (
    <div className='main-wrapper'>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div  key={asPath} variants={variants} animate="in" initial="out" exit="out">
          <main>
            { children }
          </main>
          <Footer/>
        </motion.div>
      </AnimatePresence>
      <Navbar/>
    </div>
  )
}