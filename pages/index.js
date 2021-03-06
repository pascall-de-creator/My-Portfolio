import { useState, useEffect } from "react";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { FaBoxOpen, FaPenFancy, FaDatabase, FaBezierCurve, FaMobile, FaCogs, FaEnvelopeOpen, FaPaperPlane,  FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaSpinner, FaArrowCircleDown, FaCode } from 'react-icons/fa'
import { MdPeople, MdTimer, MdHearing, MdPower, MdThumbUp, MdImage, MdIntegrationInstructions, MdContactPhone, MdOutlineOpenInNew } from 'react-icons/md'

const Home = () => {
  const [isfetchSuccessful, setIsfetchSuccessful] = useState(false)
  const [isfetching, setIsfetching] = useState(false)
  const [renderedRepos, setRenderedRepos] = useState([])

  const LoadRepos = async () => {
    setIsfetching(true)
    try {
      let repos = []
      await fetch('https://api.github.com/users/pascall-de-creator/repos?sort=-stargazers_count,forks,watchers')
        .then(response => response.json())
        .then(data => {
        for (let index = 0; index < 8; index++) {
          let repoCardComp = (
              <Link href={data[index].html_url}>
                <a key={ data[index].id } className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                  <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaCode /></div>
                  <h3 className='text-xl text-primary mb-2 text-center'>{ data[index].name }</h3>
                  <p className='text-base text-white text-center text-ellipsis overflow-hidden w-full max-h-[4.5rem]'>{ data[index].description != null? data[index].description : `This Repository does not have a description yet click for the readme` }</p>
                </a>
              </Link>
          )
          repos.push(repoCardComp)
        }
      })
      setRenderedRepos(repos)
      setIsfetchSuccessful(true)
    } 
    catch {
      setIsfetchSuccessful(false)
    }
    setIsfetching(false)
  }

  useEffect(() => {
    LoadRepos()
  },[])

  return (
    <>
      <Head>
        <title>Pascall de creator | Home</title>
      </Head>
      <section className="w-screen h-screen flex aurora-outer">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h1 className='text-3xl md:text-5xl text-center text-white w-10/12 leading-normal'>Hi, I Am Pascal Nkornyui And I Am A<br/><span className='text-blue-800'>Developer</span></h1>
          <div className='relative -bottom-[100px] animate-bounce'><Image src="/mouse.svg" alt="scroll" width={50} height={50} /></div>
        </div>
      </section>
      <section className="w-screen bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h2 className='text-3xl text-center text-primary my-5'>Services I Offer</h2>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 m-3 mb-5">
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaBoxOpen /></div>
              <h3 className='text-xl text-primary mb-2'>Full Stack Dev</h3>
              <p className='text-base text-white'>I develop fully functional and beautiful websites for the Internet</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaPenFancy /></div>
              <h3 className='text-xl text-primary mb-2'>Front End Dev</h3>
              <p className='text-base text-white'>I develop beautiful, interactive and fast websites for the internet</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaDatabase /></div>
              <h3 className='text-xl text-primary mb-2'>Back End Dev</h3>
              <p className='text-base text-white'>I develop Quick and reliable APIs, databases and backend transactions or websites</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaBezierCurve /></div>
              <h3 className='text-xl text-primary mb-2'>UI / UX Design</h3>
              <p className='text-base text-white'>I design responsive and nice user interfaces and user-friendly experience designs</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaMobile /></div>
              <h3 className='text-xl text-primary mb-2'>Mobile Dev</h3>
              <p className='text-base text-white'>I develop cross-platform mobile software with full functionality </p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaCogs /></div>
              <h3 className='text-xl text-primary mb-2'>Software Engineering</h3>
              <p className='text-base text-white'>I create fast and reliable software with data-driven functionality</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-slate-600">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className='text-3xl text-center text-primary my-5'>Board Of Ethics</h2>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 m-3">
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPeople /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Teamwork</h3>
              <p className='text-base text-white text-center'>Developing along side other developers and working together on projects</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdTimer /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Timing</h3>
              <p className='text-base text-white text-center'>Working well and quickly under time, doing work a fast as possible</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdHearing /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Hearing</h3>
              <p className='text-base text-white text-center'>Working with instructions and paying attention to details in my work</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPower /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Energy</h3>
              <p className='text-base text-white text-center'>Working under pressure, working well and working quickly</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdThumbUp /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Good work</h3>
              <p className='text-base text-white text-center'>Working beyond expectations, good delivery with commendable results</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdImage /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Beauty</h3>
              <p className='text-base text-white text-center'>Developing and building every element with beautiful and unique design</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdIntegrationInstructions /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Efficiency</h3>
              <p className='text-base text-white text-center'>Developing in the most resourceful way and saving resources </p>
            </div>
            <div className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdContactPhone /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Communication</h3>
              <p className='text-base text-white text-center'>Always updated on relevant information and important trends</p>
            </div>
          </div>
          <Link href="/about"><a className="flex items-center text-white text-md p-2 border-2 border-gray-500 border-dashed rounded-md mb-5 focus:outline-none focus:border-primary focus:border-solid hover:bg-primary"><span className="mr-2">More About Me</span><MdOutlineOpenInNew /></a></Link>
        </div>
      </section>
      <section className="w-screen bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h2 className='text-3xl text-center text-primary my-5'>Some Of My Work</h2>
          {
          isfetchSuccessful?
          <>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 m-3 mb-5">
              { renderedRepos }
            </div>
            <Link href="/my-work"><a className="mx-auto flex w-max items-center text-white text-md p-2 border-2 border-gray-500 border-dashed rounded-md mb-5 focus:outline-none focus:border-primary focus:border-solid hover:bg-primary"><span className="mr-2">See More Of My Work</span><MdOutlineOpenInNew /></a></Link>
          </>
          :
          <div className="flex flex-col items-center justify-center">
            <button className="p-2 flex items-center bg-primary text-white rounded-md mb-5 hover:bg-cyan-500" onClick={() => LoadRepos()} ><span>{ !isfetching && "Retry" }</span>{isfetching? <div className="animate-spin"><FaSpinner /></div> : <div className="ml-2"><FaArrowCircleDown /></div> }</button>
          </div>
          }
        </div>
      </section>
      <section className="w-screen aurora-outer">
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
            <Link href="https://linkedin.com/in/pascall-de-creator"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">linked in @pascall de creator</span><FaLinkedin /></a></Link>
            <Link href="https://twitter.com/pascall_creator"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">twitter @pascall de creator</span><FaTwitter /></a></Link>
            <Link href="https://www.instagram.com/pascall.de_creator/"><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white hover:scale-125 focus:outline-none focus:ring-2"><span className="sr-only">instagram @pascall de creator</span><FaInstagram /></a></Link>
          </div>
        </div>
      </section>
      <footer className="p-3 pb-[95px] bg-slate-800 w-full">
        <p className='text-base text-white text-center'>Copyrighted . ?? All Rights Reserved . Pascall de Creator</p>
      </footer>
    </>
  );
}
 
export default Home;