import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { MdPeople, MdCode, MdLocationPin } from 'react-icons/md'
import { MdTimer, MdHearing, MdPower, MdThumbUp, MdImage, MdIntegrationInstructions, MdContactPhone, MdOutlineOpenInNew } from 'react-icons/md'


export async function getServerSideProps() {
  const response = await fetch(`https://api.github.com/users/pascall-de-creator`)
  const json = await response.json()

  return { 
    props: {
      json: json
    } 
  }
}

const About = (json) => {
  const [ activeTab, setActiveTab ] = useState(0)

    return (
      <>
        <Head>
          <title>Pascall de creator | About me</title>
        </Head>
        <div className="md:flex lg:container mx-auto">
          <section className="h-max w-11/12 m-4 p-4 rounded-lg shadow-md bg-slate-900 md:w-80">
            <div className="flex mb-3">
              <div className="overflow-hidden rounded-full h-[50px] w-[50px]"><Image src='/laptop.jpg' objectFit="cover" alt="Avatar" width={50} height={50}></Image></div>
              <p className="text-lg text-primary ml-2 h-max">{ json.json.name }</p>
            </div>
            <div>
              <p className="text-white">{ json.json.bio }</p>
              <div className="flex items-center mt-2 text-white">
                  <MdLocationPin />
                  <p className="ml-2">{ json.json.location }</p>
                </div>
              <div className="flex items-center pt-2 flex-wrap text-white">
                <div className="flex items-center mr-4 mb-2">
                  <MdPeople />
                  <p className="ml-2">{ json.json.followers } Followers</p>
                </div>
                <div className="flex items-center">
                  <MdCode />
                  <p className="ml-2">{ json.json.public_repos + json.json.public_gists } repos</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-11/12 m-4 mb-[100px] p-4 rounded-lg shadow-md bg-slate-900 md:8/12 md:h-[82vh] md:mb-0 md:overflow-y-scroll">
            <div className="flex items-center w-max mx-auto">
              <button onClick={() => setActiveTab(0)} className={`text-white border-primary hover:border-b-2 focus:border-b-2 focus:outline-none mx-2 ${activeTab == 0? "border-b-2" : "" } `}>My Story</button>
              {/* <button onClick={() => setActiveTab(1)} className={`text-white border-primary hover:border-b-2 focus:border-b-2 focus:outline-none mx-2 ${activeTab == 1? "border-b-2" : "" } `}>Resume</button> */}
            </div>
            <div className="flex flex-col items-center justify-center">
            { activeTab == 0?
              <>
                  <h1 className='text-3xl text-center text-primary my-5'>Brief</h1>
                  <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2">
                    
                  </div>
                  <h1 className='text-3xl text-center text-primary my-5'>Board Of Ethics</h1>
                  <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 m-3">
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPeople /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Teamwork</h3>
                      <p className='text-base text-white text-center'>Developing along side other developers and working together on projects</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdTimer /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Timing</h3>
                      <p className='text-base text-white text-center'>Working well and quickly under time, doing work a fast as possible</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdHearing /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Hearing</h3>
                      <p className='text-base text-white text-center'>Working with instructions and paying attention to details in my work</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdPower /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Energy</h3>
                      <p className='text-base text-white text-center'>Working under pressure, working well and working quickly</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdThumbUp /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Good work</h3>
                      <p className='text-base text-white text-center'>Working beyond expectations, good delivery with commendable results</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdImage /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Beauty</h3>
                      <p className='text-base text-white text-center'>Developing and building every element with beautiful and unique design</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdIntegrationInstructions /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Efficiency</h3>
                      <p className='text-base text-white text-center'>Developing in the most resourceful way and saving resources </p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                      <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><MdContactPhone /></div>
                      <h3 className='text-xl text-primary mb-2 text-center'>Communication</h3>
                      <p className='text-base text-white text-center'>Always updated on relevant information and important trends</p>
                    </div>
                  </div>
              </>
              :
              <>
              
              </>
            }
            </div>
          </section>
        </div>

      </>
    );
  }
   
  export default About;