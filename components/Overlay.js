import Link from 'next/link';
import { AiOutlineHome, AiFillHome, AiOutlineTrophy, AiFillTrophy, AiOutlinePhone, AiFillPhone } from 'react-icons/ai';
import { RiUserLine, RiUserFill, RiBuilding2Line, RiBuilding2Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const Overlay = () => {
    const [route, setRoute] = useState("")

    useEffect(() => {
        setRoute(window.location.pathname.split('/')[1])
    },[route])
    
    return ( 
        <>
            <nav>
                <Link href="/"><a title="Home" className={`nav-item${ route === '' ? ' text-primary' : '' }`}>{ route === ''? <AiFillHome /> : <AiOutlineHome/> }</a></Link>
                <Link href="/about"><a title="About" className={`nav-item${ route === 'about' ? ' text-primary' : '' }`}>{ route === 'about'? <RiUserFill /> : <RiUserLine/> }</a></Link>
                <Link href="/skills"><a title="Skills" className={`nav-item${ route === 'skills' ? ' text-primary' : '' }`}>{ route === 'skills'? <AiFillTrophy /> : <AiOutlineTrophy/> }</a></Link>
                <Link href="/my-work"><a title="My Works" className={`nav-item${ route === 'my-work' ? ' text-primary' : '' }`}>{ route === 'my-work'? <RiBuilding2Fill /> : <RiBuilding2Line/> }</a></Link>
                <Link href="/contact"><a title="Contact" className={`nav-item${ route === 'contact' ? ' text-primary' : '' }`}>{ route === 'contact'? <AiFillPhone /> : <AiOutlinePhone/> }</a></Link>
            </nav>
        </>
    );
}
 
export default Overlay;