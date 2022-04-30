import { useState, useEffect } from "react";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { FaNetworkWired, FaBoxOpen, FaPenFancy, FaDatabase, FaBezierCurve, FaMobile, FaCogs, FaEnvelopeOpen, FaPaperPlane,  FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdPeople, MdTimer, MdHearing, MdPower, MdThumbUp, MdImage, MdIntegrationInstructions, MdContactPhone } from 'react-icons/md'

const Home = () => {
  const [role, setRole] = useState('Developer')

  useEffect(() => {
    var roles = ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "UI/UX Designer"];
    var roleIndex = 0;
    setInterval(() => {
      setRole(roles[roleIndex]);
      roleIndex++;
      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }, 5000);
  },[])

  return (
    <>
      <Head>
        <title>Pascall de creator | Home</title>
      </Head>
      <section className="w-screen h-screen flex aurora-outer">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h1 className='text-3xl md:text-5xl text-center text-white w-10/12 leading-normal'>Hi, I Am Pascal Nkornyui And I Am A<br/><span className='text-blue-800'>{role}</span></h1>
          <div className='relative -bottom-[100px] animate-bounce'><Image src="/mouse.svg" alt="scroll" width={50} height={50} /></div>
        </div>
      </section>
      <section className="w-screen">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h1 className='text-3xl text-center text-primary my-5'>Services I Offer</h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 mb-5">
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaBoxOpen /></div>
              <h3 className='text-xl text-primary mb-2'>Full Stack Dev</h3>
              <p className='text-base dark:text-white'>I develop fully functional and beautiful websites for the Internet</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaPenFancy /></div>
              <h3 className='text-xl text-primary mb-2'>Front End Dev</h3>
              <p className='text-base dark:text-white'>I develop beautiful, interactive and fast websites for the internet</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaDatabase /></div>
              <h3 className='text-xl text-primary mb-2'>Back End Dev</h3>
              <p className='text-base dark:text-white'>I develop Quick and reliable APIs, databases and backend transactions or websites</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaBezierCurve /></div>
              <h3 className='text-xl text-primary mb-2'>UI / UX Design</h3>
              <p className='text-base dark:text-white'>I design responsive and nice user interfaces and user-friendly experience designs</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaMobile /></div>
              <h3 className='text-xl text-primary mb-2'>Mobile Dev</h3>
              <p className='text-base dark:text-white'>I develop cross-platform mobile software with full functionlity</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaCogs /></div>
              <h3 className='text-xl text-primary mb-2'>Software Engineering</h3>
              <p className='text-base dark:text-white'>I create fast and reliable software with data-driven functionality</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-gray-200 dark:bg-slate-600">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className='text-3xl text-center text-primary my-5'>Skill Board</h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 mb-5">
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPeople /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Teamwork</h3>
              <p className='text-base dark:text-white text-center'>Developing along side other developers and working together on projcts</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdTimer /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Timing</h3>
              <p className='text-base dark:text-white text-center'>Working well and quickly under time, doing work a fast as possible</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdHearing /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Hearing</h3>
              <p className='text-base dark:text-white text-center'>Working with instructions and paying attention to details in my work</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPower /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Energy</h3>
              <p className='text-base dark:text-white text-center'>Working under pressure, working well and working quickly</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdThumbUp /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Good work</h3>
              <p className='text-base dark:text-white text-center'>Working beyond expectations, good delivery with commendable results</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdImage /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Beauty</h3>
              <p className='text-base dark:text-white text-center'>Developing and building every element with beautiful and unique design</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdIntegrationInstructions /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Efficiency</h3>
              <p className='text-base dark:text-white text-center'>Developing in the most resourceful way and saving resources </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col items-center">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdContactPhone /></div>
              <h3 className='text-xl text-primary mb-2 text-center'>Communication</h3>
              <p className='text-base dark:text-white text-center'>Always updateded on relivant information and important trends</p>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="w-screen">
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
          <h1 className='text-3xl text-center text-primary my-5'>Some Of My Work</h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 mb-5">
            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-md shadow-md flex flex-col">
              <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaNetworkWired /></div>
              <h3 className='text-xl text-primary mb-2'>Full Stack Dev</h3>
              <p className='text-base dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, enim?</p>
            </div>
          </div>
        </div>
      </section> 
      */}
      <section className="w-screen aurora-outer">
        <div className="py-10 container mx-auto flex flex-col items-center justify-center">
          <div className="w-8/12 p-4 bg-white dark:bg-slate-800 rounded-md shadow-md">
            <div className="w-max h-max mx-auto relative -top-[40px] p-4 bg-primary rounded-full text-white"><FaEnvelopeOpen /></div>
            <h3 className='w-full text-xl text-primary mb-2 text-center -mt-9'>Get In Touch</h3>
            <textarea className="w-full p-2 border-2 focus:outline-none focus:ring-2 md:min-h-[230px] dark:bg-slate-800 dark:text-white rounded-md border-gray-500" name="mail" id="mail-area"></textarea>
            <button className="p-2 mx-auto rounded-md flex items-center bg-primary hover:bg-cyan-500 focus:outline-none focus:ring-2 text-white"><p className="mr-2">Send</p><FaPaperPlane /> </button>
          </div>
          <div className="flex mt-5">
            <Link href=""><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white"><FaGithub /></a></Link>
            <Link href=""><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white"><FaLinkedin /></a></Link>
            <Link href=""><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white"><FaTwitter /></a></Link>
            <Link href=""><a className="p-4 mx-2 bg-primary rounded-full shadow-md text-white"><FaInstagram /></a></Link>
          </div>
        </div>
      </section>
      <footer className="p-3 pb-[90px]">
        <p className='text-base dark:text-white text-center'>Copyrighted . © All Rights Reserved . Pascall de Creator</p>
      </footer>
    </>
  );
}
 
export default Home;