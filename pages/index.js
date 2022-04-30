import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';

import { RiComputerLine, RiDatabase2Line, RiStackLine, RiQuillPenLine, RiTeamFill, RiStackFill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight, MdWeb } from 'react-icons/md';
import { AiOutlineMobile, AiOutlineFieldTime, AiFillPhone, AiOutlineAim, AiFillHeart, AiFillHighlight, AiTwotoneCode } from 'react-icons/ai';

export const getServerSideProps = async() => {
  // const res = await fetch(`https://api.github.com/users/pascall-de-creator/repos`)
  // const data = await res.json()
  return { 
    props: { 
      data : {}
    } 
  }
}

const Home = (data) => {
  const [role, setRole] = useState('Developer')

  const [serviceHeadings, setServiceHeadings] = useState([])
  const [serviceParagraphs, setServiceParagraphs] = useState([])
  const [activeServiceDetail, setActiveServiceDetail] = useState('')

  const showServiceDetails = (service) => {
    let headers = ["", "", ""]
    let paragraphs = ["", ""]

    if (service == 'fullstack'){
      activeServiceDetail = 'fullstack'
      headers[0] = "Full Stack Dev"
      headers[1] = "What Is Full Stack Development?"
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
    setServiceHeadings(headers)
    setServiceParagraphs(paragraphs)
    setActiveServiceDetail(service)
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
  // const renderRepos = (repos) => {
  //   var rendredRepos = []
  //   var sortedRepo = repos.data.slice(0);
  //   sortedRepo.sort(function(a,b) {
  //       return a.stargazers_count - b.stargazers_count;
  //   });
  //   for (let index = 0; index < 4; index++) {
  //     if ( sortedRepo[index].description != null ){
  //       var repo = ( 
  //         <Link href={ sortedRepo[index].html_url }>
  //           <a>
  //             <div className="w-[220px] p-4 min-h-30 h-max bg-gray-100 dark:bg-slate-700 rounded-md shadow-md hover:scale-110">
  //               <h1 className='text-xl text-primary'>{ sortedRepo[index].name }</h1>
  //               <p className='text-md leading-loose mt-2 dark:text-white'>{ sortedRepo[index].description }</p>
  //             </div>
  //           </a>
  //         </Link> 
  //       )
  //       rendredRepos.push(repo)
  //     } else {
  //       index -= 1
  //     }
  //   }
  //   return rendredRepos
  // }
  return (
    <>
      <div className="h-screen overflow-y-scroll">
        <section className="h-screen w-screen flex aurora-outer">
          <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
            <h1 className='text-3xl md:text-5xl text-center text-white w-10/12 leading-normal'>Hi, I Am Pascal Nkornyui And I Am A<br/><span className='text-blue-800'>{role}</span></h1>
            <div className='relative -bottom-[100px] animate-bounce'><Image src="/mouse.svg" alt="scroll" width={50} height={50} /></div>
          </div>
        </section>
      </div>
    </>
  );
}
 
export default Home;