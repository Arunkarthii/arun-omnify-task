"use client";
import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./components/SideMenu";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCollapse, setIsCollapse] = useState(false)

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
    <div className="flex h-screen">
      <div className={`bg-[#F8FAFC] hidden md:block transition-all duration-300 ease-in-out ${isCollapse ? 'w-[100px]' : 'w-[350px]'}`}>
        <SideMenu isCollapse={isCollapse} toggle={handleCollapse} />
      </div>
      <div className="bg-slate-100 w-full">
        <div className="md:hidden bg-white m-5 p-5 flex justify-between items-center rounded-md">
          <h1 className="text-black">Frondend</h1>
          <span className="text-black"><AiOutlineMenu /></span>
        </div>
      </div>
    </div>
  );
}
