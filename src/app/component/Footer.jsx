"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter,FaTiktok } from "react-icons/fa6"; // New X (Twitter) logo

export default function Footer() {
  return (
    <>
         <footer className="bg-[#071026] text-blue-100 text-center py-8 px-4">  
  <h1 className="text-xl" >Follow Me</h1>
  <div className="max-w-[600px] mx-auto">


    <div className="mt-10 flex justify-center gap-5 text-2xl">
      <a href="https://x.com/Da_Son_Of_God?t=np-SCifB5g65Xz8qPz2lSA&s=09
" className="cursor-pointer transition-transform duration-300 text-blue-200 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">    <FaXTwitter/>  </a>
      <a href="https://www.facebook.com/shittuomogbolahan" className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">     <FaFacebookF />  </a>
      <a href="https://www.instagram.com/shittuomogbolahangabriel?igsh=eXE0cjd5ejNpdzR5" className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">         <FaInstagram /></a>
         <a href="https://www.linkedin.com/in/omogbolahanshittu?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">  
               <SiLinkedin />  </a>
        <a href="https://vm.tiktok.com/ZMHWuh46PkYy8-lBOAo/"> <FaTiktok/> </a>       
    </div>



    <p className="mt-4 text-sm text-blue-100">
      © 2025 SOG | Built by Ayokunle Shittu.

    </p>

  </div>
</footer>
    </>
  );
}





