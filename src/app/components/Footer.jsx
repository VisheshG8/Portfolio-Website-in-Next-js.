import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex" style={{justifyContent:'center'}}>
      <Image
          src="/images/Vishesh Portfolio signature.png"
          alt="Vishesh Signature" // Add alt text for accessibility
          width={100} // Specify the width of the image
          height={100} // Specify the height of the image
        />
        <b style={{display:'flex', alignItems:'center', textAlign:'center'}}> All rights reserved.</b>
      </div>
    </footer>
  );
};

export default Footer;
