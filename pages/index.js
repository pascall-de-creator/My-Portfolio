import { useState, useEffect } from "react";
import Image from 'next/image'

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