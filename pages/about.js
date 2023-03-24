import { HiLocationMarker } from 'react-icons/hi';
import { BsFillLaptopFill } from 'react-icons/bs';
import { FaDatabase, FaMobile } from 'react-icons/fa';
import { AiOutlineDesktop } from 'react-icons/ai';
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiFirebase, SiDjango, SiWebassembly,  SiMongodb, SiExpress, SiReact, SiRedux, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiBootstrap } from 'react-icons/si';

import Image from "next/image";
import Link from 'next/link';

const About = () => {
    return (
        <section className='p-2'>
            <div className='p-4 flex flex-col gap-4'>
                <div className="flex gap-4 items-center">
                    <Image width={60} height={60} src="/logo.png" className='rounded-full'/>
                    <div>
                        <h2 className='text-2xl font-bold'>Pascal Nkornyui</h2>
                        <Link href="https://github.com/pascall-de-creator">@Pascall-de-creator</Link>
                    </div>
                </div>
                <p className='text-base'>
                The individual in question is a highly skilled and experienced professional with a passion for creating cutting-edge technology solutions. With 5 years of experience as a full-stack developer, UI/UX designer, mobile app developer, and software engineer, this individual possesses a diverse skill set and a deep understanding of the entire software development life cycle.
                </p>
                <div className="p-4 border-2 border-primary-400 bg-secondary-700 rounded-lg flex items-center justify-center">
                    <Link href="#" className=''>View CV</Link>
                </div>
                <ul>
                    <li>
                        <div className='flex items-center gap-2'>
                            <HiLocationMarker className='w-[24px] h-[24px]'/>
                            <p>Accra, Ghana.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='mb-[100px]'>
                <div className='p-4 flex flex-col items-center gap-4 bg-secondary-900 rounded-lg'>
                    <h2>Contributions To</h2>
                    <div className='flex flex-wrap gap-4 items-center justify-center'>
                        <Image width={100} height={20} src="/microsoft.png" />
                        <Image width={100} height={20} src="/vercel.png" />
                        <Image width={100} height={20} src="/tailwind.png" />
                        <Image width={100} height={20} src="/godot.png" />
                    </div>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4'>
                    <h2>What I Do</h2>
                    <div className='flex flex-wrap gap-4 items-center'>
                    <div className="card">
                            <div className='card--icon'>
                                <BsFillLaptopFill />
                            </div>
                            <div>
                                <h3>Frontend Developer.</h3>
                                <p>Design and develop user-facing software, including websites, mobile apps, and interactive interfaces, using programming languages and tools.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className='card--icon'>
                                <FaDatabase />
                            </div>
                            <div>
                                <h3>Backend Developer.</h3>
                                <p>Develops and maintains server-side applications, APIs, and databases for web and mobile applications.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className='card--icon'>
                                <FaMobile />
                            </div>
                            <div>
                                <h3>Mobile App Developer.</h3>
                                <p>Develops mobile applications for various platforms to meet business and customer needs.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className='card--icon'>
                                <AiOutlineDesktop />
                            </div>
                            <div>
                                <h3>Desktop App Developer.</h3>
                                <p>Design and develop desktop applications with proficiency in programming languages and problem-solving skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4'>
                    <h2>My Skills</h2>
                    <div className='w-full flex flex-wrap gap-4 justify-between'>
                        <ul className='list-disc'>
                            <li>
                                <div className='flex gap-2 items-center'>
                                    <SiHtml5 />
                                    <p>HTML</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiCss3 />
                                    <p>CSS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiPython />
                                    <p>Python</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiJavascript />
                                    <p>Javascript</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiTypescript />
                                    <p>Typescript</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiWebassembly />
                                    <p>WASM</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className='flex gap-2 items-center'>
                                    <SiNodedotjs />
                                    <p>Node JS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiExpress />
                                    <p>Express js</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiReact />
                                    <p>React</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiRedux />
                                    <p>Redux</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiNextdotjs />
                                    <p>Next JS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiVuedotjs />
                                    <p>Vue JS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiDjango />
                                    <p>Django</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className='flex gap-2 items-center'>
                                    <SiTailwindcss />
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiBootstrap />
                                    <p>Bootstrap CSS</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiFirebase />
                                    <p>Firebase</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <SiMongodb />
                                    <p>Mongo DB</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4'>
                    <h2>My Works</h2>
                    <div className='w-full grid grid-col-3 gap-4'>
                        <div className='w-full h-full bg-secondary-900 relative z-20'></div>
                        <div className='aspect-video bg-secondary-600 '>01</div>
                        <div className='aspect-video bg-secondary-600 '>02</div>
                        <div className='aspect-video bg-secondary-600 row-col-2'>03</div>
                        <div className="p-4 border-2 border-primary-400 bg-secondary-700 rounded-lg flex items-center justify-center">
                            <Link href="/works" className=''>See More</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4'>
                    <h2>Achivements</h2>
                    <div className='w-full grid grid-col-3 gap-4'>
                        <div className='w-full h-full bg-secondary-900 relative z-20'></div>
                        <div className='aspect-video bg-secondary-600 '>01</div>
                        <div className='aspect-video bg-secondary-600 '>02</div>
                        <div className='aspect-video bg-secondary-600 row-col-2'>03</div>
                        <div className="p-4 border-2 border-primary-400 bg-secondary-700 rounded-lg flex items-center justify-center">
                            <Link href="/achivements" className=''>See More</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4'>
                    <h2>Let's Connect</h2>
                    <p>Let's connect and create something great together.</p>
                    <div className='w-full grid grid-col-3 gap-4'>
                        <div className="p-4 border-2 border-primary-400 bg-secondary-700 rounded-lg flex items-center justify-center">
                            <Link href="/achivements" className=''>Reach out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;