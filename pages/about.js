import { DiNetbeans } from 'react-icons/di';
import Image from "next/image";

const About = () => {
    return (
        <>
        <section className="width-screen h-screen">
            <div className="container mx-auto flex flex-col md:flex-row gap-8 pt-28">
                <p className="w-ful sm:text-base">
                The individual in question is a highly skilled and experienced professional with a passion for creating cutting-edge technology solutions. With 5 years of experience as a full-stack developer, UI/UX designer, mobile app developer, and software engineer, this individual possesses a diverse skill set and a deep understanding of the entire software development life cycle.
                <br /><br />
                This individual has a unique ambition to recreate the web and software, driven by a desire to push the boundaries of what is possible and to create innovative and user-friendly solutions. Their experience in UI/UX design enables them to create intuitive and visually appealing interfaces that enhance user experience, while their expertise in mobile app development allows them to create dynamic and responsive apps that deliver value to users.
                </p>
                <img src="/desktop-mockup.png" className="w-10/12 h-10/12 mx-auto md:w-80 md:h-80 bg-secondary-900 hover:translate-x-8 hover:-translate-y-8 hover:rotate-12"/>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center p-8 bg-secondary-900">
                <h2 className="mb-4 text-3xl font-bold">Contributions To</h2>
                <div className="flex items-center gap-8">
                    <Image width={200} height={50} src="/microsoft.png"/>
                    <Image width={200} height={50} src="/vercel.png"/>
                    <Image width={200} height={50} src="/tailwind-css.png"/>
                    <Image width={200} height={50} src="/godot.png"/>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center gap-4 p-8">
                <div className="w-64 p-4 pt-16 flex flex-col bg-secondary-900 rounded-lg border-2 border-secondary-700 gap-2">
                    <div className="w-max rounded-full p-4 bg-secondary-700"><DiNetbeans /></div>
                    <h3 className='text-xl'>Web development</h3>
                    <p className='text-base w-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</p>
                </div>
                <div className="w-64 p-4 pt-16 flex flex-col bg-secondary-900 rounded-lg border-2 border-secondary-700 gap-2">
                    <div className="w-max rounded-full p-4 bg-secondary-700"><DiNetbeans /></div>
                    <h3 className='text-xl'>Web development</h3>
                    <p className='text-base w-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</p>
                </div>
                <div className="w-64 p-4 pt-16 flex flex-col bg-secondary-900 rounded-lg border-2 border-secondary-700 gap-2">
                    <div className="w-max rounded-full p-4 bg-secondary-700"><DiNetbeans /></div>
                    <h3 className='text-xl'>Web development</h3>
                    <p className='text-base w-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</p>
                </div>
                <div className="w-64 p-4 pt-16 flex flex-col bg-secondary-900 rounded-lg border-2 border-secondary-700 gap-2">
                    <div className="w-max rounded-full p-4 bg-secondary-700"><DiNetbeans /></div>
                    <h3 className='text-xl'>Web development</h3>
                    <p className='text-base w-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</p>
                </div>
                <div className="w-64 p-4 pt-16 flex flex-col bg-secondary-900 rounded-lg border-2 border-secondary-700 gap-2">
                    <div className="w-max rounded-full p-4 bg-secondary-700"><DiNetbeans /></div>
                    <h3 className='text-xl'>Web development</h3>
                    <p className='text-base w-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</p>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default About;