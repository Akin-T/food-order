import { use, useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";

const Header = () => {

    const [IsSearchModal, setIsSearchModal] = useState(false);
    const [IsMenuModal, setIsMenuModal] = useState(false);

    const router = useRouter();

    return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"
            }`}>
            <div className="container mx-auto text-white flex justify-between items-center h-full">
                <Logo />
                <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${IsMenuModal === true && "!grid place-content-center"
                    }`}  >

                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="">Anasayfa</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="">Menu</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="">Hakkımızda</a>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <a href="">Book Table</a>
                        </li>
                    </ul>
                    {IsMenuModal && (
                        <button
                            className="absolute  top-4 right-4 z-50"
                            onClick={() => setIsMenuModal(false)}
                        >
                            <GiCancel size={25} className=" transition-all" />
                        </button>
                    )}
                </nav>
                <div className="flex gap-x-4 items-center">
                    <a href="#">
                        <FaUserAlt className="hover:text-primary transition-all" />
                    </a>
                    <a href="#">
                        <FaShoppingCart className="hover:text-primary transition-all" />
                    </a>
                    <button onClick={() => setIsSearchModal(true)}>
                        <FaSearch className="hover:text-primary transition-all" />
                    </button>
                    <a href="#" className="md:inline-block hidden sm">
                        <button className="btn-primary">Online Sipariş</button>
                    </a>
                    <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}
                    >
                        <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
                    </button>
                </div>
            </div>
            {IsSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        </div>
    );
};
export default Header;