import Head from 'next/head'
import Link from 'next/link'

import { FaEnvelopeOpen, FaPaperPlane,  FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'


const Contact = () => {
    return (
      <>
        <Head>
          <title>Pascall de creator | Contact</title>
        </Head>
        <section className="w-screen aurora-outer h-screen flex flex-col justify-center ">
          <div className="py-10 container mx-auto flex flex-col items-center justify-center">
            <form action="mailto:pascall.de.creator@outlook.com" method="post" encType="text/plain" className="w-8/12 p-4 bg-slate-800 rounded-md shadow-md">
              <div className="w-max h-max mx-auto relative -top-[40px] p-4 bg-primary rounded-full text-white"><FaEnvelopeOpen /></div>
              <h2 className='w-full text-xl text-primary mb-2 text-center -mt-9'>Get In Touch</h2>
              <label htmlFor="mail-area" className='sr-only'>Body</label>
              <textarea className="w-full p-2 border-2 focus:outline-none focus:ring-2 md:min-h-[230px] bg-slate-800 text-white rounded-md border-gray-500" name="mail" id="mail-area"></textarea>
              <button className="p-2 mx-auto rounded-md flex items-center bg-primary hover:bg-cyan-500 focus:outline-none focus:ring-2 text-white"><p className="mr-2">Send</p><FaPaperPlane /> </button>
            </form>
            <div className="flex mt-5">
              <Link href="https://github.com/pascall-de-creator"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">github @pascall de creator</span><FaGithub /></a></Link>
              <Link href="https://gh.linkedin.com/in/pascall-de-creator-150b73215"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">linked in @pascall de creator</span><FaLinkedin /></a></Link>
              <Link href="https://twitter.com/pascall_creator"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">twitter @pascall de creator</span><FaTwitter /></a></Link>
              <Link href="https://www.instagram.com/pascall.de_creator/"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">instagram @pascall de creator</span><FaInstagram /></a></Link>
              {/* <Link href="tel+233"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">tel</span><FaPhone /></a></Link> */}
            </div>
          </div>
      </section>
      </>
    );
  }
   
  export default Contact;