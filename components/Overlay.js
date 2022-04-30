import Link from 'next/link';
import { AiOutlineHome, AiFillHome, AiOutlineTrophy, AiFillTrophy, AiOutlinePhone, AiFillPhone } from 'react-icons/ai';
import { RiUserLine, RiUserFill, RiBuilding2Line, RiBuilding2Fill } from 'react-icons/ri';
import { BsBook, BsBookFill } from 'react-icons/bs';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useEffect, useState } from 'react';

const Overlay = () => {
    const [route, setRoute] = useState("")
    const [theme, setTheme] = useState("light")

    const toogleTheme = (isLoad = 0) => {
        window.localStorage.removeItem('theme')
        window.localStorage.setItem('theme', '')

        document.getElementsByTagName('html')[0].classList.remove('dark')
        document.getElementsByTagName('html')[0].classList.remove('light')
        if (isLoad != 1){
            if (theme == "dark"){
                window.localStorage.theme ='light'
            }
            else if (theme == "light"){
                window.localStorage.theme = 'dark'
            }
        } else {
            if (window.localStorage.theme != null){
                window.localStorage.theme = 'dark'
            }
        }
        setTheme(window.localStorage.theme)
        document.getElementsByTagName('html')[0].classList.add(theme)
    }
    useEffect(() => {
        setRoute(window.location.pathname.split('/')[1])
    },[route])
    useEffect(() => {
        toogleTheme(1)
    },[])
    
    return ( 
        <>
            <div className="fixed bottom-4 bg-white dark:bg-slate-900 backdrop-blur-md opacity-90 rounded-md shadow-2xl p-1 flex">
                <Link href="/"><a title="Home" className={`text-[120%]  p-2 sm:text-3xl mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == '' ? 'text-primary' : ' ' }`}>{ route === ''? <AiFillHome /> : <AiOutlineHome/> }</a></Link>
                <Link href="/about"><a title="About" className={`text[120%] p-2 sm:text-3xl mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == 'about' ? 'text-primary' : ' ' }`}>{ route === 'about'? <RiUserFill /> : <RiUserLine/> }</a></Link>
                <Link href="/my-work"><a title="My Works" className={`text-[120%] p-2 sm:text-3xl mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == 'my-work' ? 'text-primary' : ' ' }`}>{ route === 'my-work'? <RiBuilding2Fill /> : <RiBuilding2Line/> }</a></Link>
                <Link href="/skills"><a title="Skills" className={`text-[120%] p-2 sm:text-3xl mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == 'skills' ? 'text-primary' : ' ' }`}>{ route === 'skills'? <BsBookFill /> : <BsBook /> }</a></Link>
                <Link href="/achivements"><a title="Achivements" className={`hidden text-3xl sm:block mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == 'achivements' ? 'text-primary' : ' ' }`}>{ route === 'achivements'? <AiFillTrophy /> : <AiOutlineTrophy/> }</a></Link>
                <Link href="/contact"><a title="Contact" className={`text-[120%] p-2 sm:text-3xl mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100 ${ route == 'contact' ? 'text-primary' : ' ' }`}>{ route === 'contact'? <AiFillPhone /> : <AiOutlinePhone/> }</a></Link>
                <div title="Settings" onClick={() => toogleTheme()} className={`hidden text-3xl sm:block mx-2 bg-white dark:bg-slate-900 dark:text-white rounded-md sm:p-4 hover:-translate-y-5 hover:scale-110 hover:shadow-md hover:text-primary hover:opacity-100`}>{ theme == "light" ? <BiMoon /> : <BiSun /> }</div>
            </div>
        </>
    );
}
 
export default Overlay;