import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Link from "next/link";


const Navbar = () => {

    const router = useRouter();

    useEffect(() => {
        let route = router.asPath.split("/")[1]
        const margin = 18
        const linkIndex = { "": 0, "works": 1, "achivements": 2, "about": 3}
        const menuItems = document.getElementsByClassName("menu__item")
        const activeLinkIndicatior = document.getElementById("active_link_indicator")
        const menu = document.getElementsByClassName("menu")[0]

        activeLinkIndicatior.style.transform = `
            translate(${menuItems[linkIndex[route] || 0].offsetLeft + margin}px, 0px) 
            scale(${menuItems[linkIndex[route] || 0].offsetWidth / menu.offsetWidth - (margin / menu.offsetWidth) * 2}, 1)
        `;
        console.log(route)
    }, [router.asPath]);

    return (
        <>
        <div className="menu">
            <div className="menu__inner">
                <div className="menu__content">
                    <ul className="flex text-white">
                        <li className="flex-1 menu__item">
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="flex-1 menu__item">
                            <Link href="/works">
                                <span>Work</span>
                            </Link>
                        </li>
                        <li className="flex-1 menu__item">
                            <Link href="/achivements">
                                <span>Achivements</span>
                            </Link>
                        </li>
                        <li className="flex-1 menu__item">
                            <Link href="/about">
                                <span>About</span>
                            </Link>
                        </li>
                    </ul>
                    <div id="active_link_indicator" className="bg-primary-200 absolute left-0 bottom-1/4 w-full h-[3px] bg-white origin-left js-menu-line"></div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;