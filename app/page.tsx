"use client";
import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./containers/SideMenu";
import { useEffect, useState } from "react";
import Outlet from "./containers/Outlet";
import Image from "next/image";

export default function Home() {
  const [isCollapse, setIsCollapse] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300) {
        setIsCollapse(true);
      } else {
        setIsCollapse(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className={`bg-[#F8FAFC] hidden md:block transition-all duration-300 ease-in-out ${isCollapse ? 'w-[100px]' : 'w-[350px]'}`}>
        <SideMenu isCollapse={isCollapse} toggle={handleCollapse} />
      </div>
      <div className="bg-slate-100 w-full">
        <div className="md:hidden bg-white m-5 p-5 flex justify-between items-center rounded-md">
          <div className="flex items-center">
            <Image height={10} width={30} className="h-8" src="/images/Rectangle-85-+-Group-Copy-21.png" alt="logo" />
            <h1 className="text-black text-lg ms-2 font-bold">Front.Desk</h1>
          </div>
          <span onClick={() => setOpenModal(true)} className="text-black"><AiOutlineMenu size={20} /></span>
        </div>

        <div className="px-5 py-3 md:py-10">
          <Outlet isCollapse={isCollapse} />
        </div>

        {openModal && (
          <div onClick={() => setOpenModal(false)} className="fixed top-0 right-0 w-full bg-black/60" >
            <div className="bg-white relative w-[80%] sm:w-[50%] md:w-[40%] h-screen flex flex-col justify-between text-black">
              <SideMenu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
