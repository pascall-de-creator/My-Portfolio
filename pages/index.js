import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';

import { RiComputerLine, RiDatabase2Line, RiStackLine, RiQuillPenLine, RiTeamFill, RiStackFill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight, MdWeb } from 'react-icons/md';
import { AiOutlineMobile, AiOutlineFieldTime, AiFillPhone, AiOutlineAim, AiFillHeart, AiFillHighlight, AiTwotoneCode } from 'react-icons/ai';

export const getServerSideProps = async() => {
  const res = await fetch(`https://api.github.com/users/pascall-de-creator/repos`)
  const data = await res.json()
  return { props: { data } }
}

const Home = (data) => {
  const [role, setRole] = useState('Developer')

  const [serviceHeadings, setServiceHeadings] = useState([])
  const [serviceParagraphs, setServiceParagraphs] = useState([])
  const [activeServiceDetail, setActiveServiceDetail] = useState('')

  const showServiceDetails = (service) => {
    headers = ["", "", ""]
    paragraphs = ["", ""]
    activeServiceDetail = ""

    if (service == 'fullstack'){
      activeServiceDetail = 'fullstack'
      headers[0] = "Full Stack Dev"
      headers[1] = "text-2xl text-primary mt-4'>What Is Full Stack Development?"
      paragraphs[0] = "It refers to the development of both front end(client side) and back end(server side) portions of web application, the client side deals with the interface users see and interact with and the server side deals with APIs databases etc."
      headers[2] = "Why Me?"
      paragraphs[0] = "I will be a very good or even the best pick for full stack development because, I priovide interactive, beautiful, and secure websites while making it fast for users on the web." 
    }
    else if (service == 'frontend'){
      activeServiceDetail = 'frontend'
      headers[0] = "Front-end Dev"
      headers[1] = "What Is Front-end Development?"
      paragraphs[0] = "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, JavaScript and other libraries or frameworks like reactjs, nextjs and angularjs, so that users can view and interact with that website."
      headers[2] = "Why Me?"
      paragraphs[1] = "I will be a very good or even the best pick for front-end development because, I priovide interactive beautiful and creative websites while making it fast for users on the web."
    }
    else if (service == 'backend'){
      activeServiceDetail = 'backend'
      headers[0] = "Back-end Dev"
      headers[1] = "What Is Back-end Development?"
      paragraphs[0] = "back-end web development is the development of the server-side functions like APIs Databases and web transactions."
      headers[2] = "Why Me?"
      paragraphs[1] = "I will be a very good or even the best pick for back-end development because, I priovide secure and dependable server-side functions while making it faster."
    }
    else if (service == 'uix'){
      activeServiceDetail = 'uix'
      headers[0] = "UI/UX Dev"
      headers[1] = "What Is UI/UX Designing?"
      paragraphs[0] = "It refers to designing and structuring the UI(user interface) and UX(user experience) of any software in a way is is easier to use and also looks cool."
      headers[2] = "Why Me?"
      paragraphs[1] = "I will be a very good or even the best pick for UI/UX design because, I priovide interactive beautiful and creative design."
    }
    else if (service == 'mobile'){
      activeServiceDetail = 'mobile'
      headers[0] = "Mobile Dev"
      headers[1] = "What Is Mobile Designing?"
      paragraphs[0] = "It refers to designing and building of software for mobile phones and tablets."
      headers[2] = "Why Me?"
      paragraphs[1] = "I will be a very good or even the best pick for mobile development because, I priovide interactive beautiful and creative mobile apps."
    }
    else if (service == 'desktop'){
      activeServiceDetail = 'desktop'
      headers[0] = "Desktop Dev"
      headers[1] = "What Is Desktop development?"
      paragraphs[0] = "It refers to designing and development of software that run on laptops or PCs with an OS like linux, MacOS or windows."
      headers[2] = "Why Me?"
      paragraphs[1] = "I will be a very good or even the best pick for desktop development because, I priovide interactive beautiful and creative desktop applications."
    }
    setActiveServiceDetail(activeServiceDetail)
    setServiceHeadings(headers)
    setServiceParagraphs(paragraphs)
  }
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

    showServiceDetails('frontend')
  },[])
  const renderRepos = (repos) => {
    var rendredRepos = []
    var sortedRepo = repos.data.slice(0);
    sortedRepo.sort(function(a,b) {
        return a.stargazers_count - b.stargazers_count;
    });
    for (let index = 0; index < 4; index++) {
      if (sortedRepo[index].description != null){
        var repo = ( 
          <Link href={sortedRepo[index].html_url}>
            <a>
              <div className="w-[220px] p-4 min-h-30 h-max bg-gray-100 dark:bg-slate-700 rounded-md shadow-md hover:scale-110">
                <h1 className='text-xl text-primary'>{sortedRepo[index].name}</h1>
                <p className='text-md leading-loose mt-2 dark:text-white'>{sortedRepo[index].description}</p>
              </div>
            </a>
          </Link> 
        )
        rendredRepos.push(repo)
      } else {
        index -= 1
      }
    }
    return rendredRepos
  }
  return (
    <>
      <div className="h-screen overflow-y-scroll md:snap-mandatory snap-y">
        <section className="h-screen w-screen flex aurora-outer snap-start">
          <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
            <h1 className='text-2xl md:text-5xl text-center text-white w-10/12 leading-normal'>Hi, I Am Pascal Nkornyui And I Am A <span className='text-blue-800'>{role}</span></h1>
            <div className='relative -bottom-[100px] animate-bounce'><Image src="/mouse.svg" alt="scroll" width={50} height={50} /></div>
          </div>
        </section>
        <section className="min-h-screen h-max w-screen flex snap-start">
          <div className="md:px-5 container py-10 mx-auto w-full md:flex justify-between items-center">
            <div className="px-10 md:px-0 md:w-max md:mr-5">
              <h1 className='text-3xl text-primary'>Services I Offer</h1>
              <div className="flex flex-col ml-2 mt-2">
                <a href="#service-detail" onClick={() => showServiceDetails('fullstack')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'fullstack'? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><RiStackLine /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">Fullstack Development</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
                <a href="#service-detail" onClick={() => showServiceDetails('frontend')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'frontend' ? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><MdWeb /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">Frontend Development</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
                <a href="#service-detail" onClick={() => showServiceDetails('backend')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'backend' ? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><RiDatabase2Line /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">Backend Development</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
                <a href="#service-detail" onClick={() => showServiceDetails('uix')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'uix' ? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><RiQuillPenLine /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">UI/UX design</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
                <a href="#service-detail" onClick={() => showServiceDetails('mobile')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'mobile' ? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><AiOutlineMobile /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">Mobile Development</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
                <a href="#service-detail" onClick={() => showServiceDetails('desktop')} className={`my-2 w-full md:w-max flex items-center justify-between bg-gray-100 dark:bg-slate-700 shadow-md p-4 rounded-md hover:translate-x-5 ${ activeServiceDetail === 'desktop' ? "translate-x-5" : ""}`}>
                  <i className="text-2xl mr-4 dark:text-white"><RiComputerLine /></i>
                  <p className="text-lg mr-4 text-black dark:text-white">Desktop Development</p>
                  <i className="text-xl dark:text-white"><MdOutlineKeyboardArrowRight /></i>
                </a>
              </div>
            </div>
            <div id="service-detail" className="px-10 md:m-0 md:w-6/12 flex flex-col ">
              <h1 className='text-4xl text-primary'>{ serviceHeadings[0] }</h1>
              <h3 className='text-2xl text-primary mt-4'>{ serviceHeadings[1] }</h3>
              <p className='text-md leading-loose mt-2 dark:text-white'>{ serviceParagraphs[0] }</p>
              <h3 className='text-2xl text-primary mt-4'>{ serviceHeadings[2] }</h3>
              <p className='text-md leading-loose mt-2 dark:text-white'>{ serviceParagraphs[0] }</p>
            </div>
          </div>
        </section>
        <section className="bg-slate-800 dark:bg-slate-700 h-max w-screen flex snap-start">
          <div className="px-10 md:px-5 container mx-auto my-5">
            <h1 className='text-3xl text-primary'>Skills and Experience</h1>
            <p className='text-md leading-loose mt-2 text-white'>👾🤖🎯 My Skill Set And Experience From Years Of Ninja Development And Designing 🥋🐱‍👤🍜</p>
            <div className="md:flex mt-5 justify-between">
              <div className=" mx-auto mt-5 md:mt-0 md:mx-0 w-full md:w-[25rem] h-max grid justify-items-center md:justify-items-start grid-flow-rows grid-cols-3 sm:grid-cols-4 gap-4">
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><RiTeamFill /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Teamwork</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiOutlineFieldTime /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Speed</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiFillPhone /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Clearity</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiOutlineAim /></div>
                  <p className='text-md leading-loose mt-2  text-white'>precision</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><RiStackFill /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Order</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiFillHighlight /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Design</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiTwotoneCode /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Code</p>
                </div>
                <div className="w-max h-max flex flex-col items-center">
                  <div className="p-4 w-max h-max bg-black shadow-md rounded-full text-2xl mb-[5px] text-white"><AiFillHeart /></div>
                  <p className='text-md leading-loose mt-2  text-white'>Passion</p>
                </div>
              </div>
              <img src="/laptop.jpg" className="aspect-auto mx-auto mt-5 md:mt-0 md:mx-0 w-full md:w-6/12 rounded-md" alt="laptop" />
            </div>
          </div>
        </section>
        <section className="h-max w-screen flex snap-start">
          <div className="px-10 md:px-5 container mx-auto my-5">
            <h1 className='text-3xl text-primary'>Some Of My Work.</h1>
            <div className="grid grid-flow-rows grid-cols-4 gap-5 mt-5">{ renderRepos(data) }</div>
          </div>
        </section>
      </div>
    </>
  );
}
 
export default Home;