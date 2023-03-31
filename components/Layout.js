import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    const blob = document.getElementById("cursor-blob");
  
    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
  }, [])

  const { asPath } = useRouter();

  const variants = {
    scaleDown: {
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    },
    in: {
      scale: 0.8,
      y: "150%",
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    },
    out: {
      y: "-150%",
      transition: {
        duration: 0.4,
        delay: 0.5,
        ease: "easeIn"
      }
    },
    center: {
      y: 0,
      scale: 0.8,
      transformOrigin: 'top',
      transition: {
        duration: 0.4
      }
    },
    scaleUp: {
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.5
      }
    },
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div  key={asPath} variants={variants} animate={["center", "scaleUp"]} initial="in"  exit={["scaleDown", "out"]}>
          <div className='bg-secondary-800 pointer-events-none'>
            <main className='relative z-30 w-screen h-screen overflow-y-auto'>
              { children }
            </main>
          </div>
          <Footer/>
        </motion.div>
      </AnimatePresence>
      <div id="cursor-blob"></div>
      <Navbar/>
    </>
  )
}