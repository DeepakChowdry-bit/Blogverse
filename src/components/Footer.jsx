import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center h-14">
        <div className="flex items-center justify-between w-11/12 md:w-10/12">
          <div className="flex items-center text-s gap-1">
            <h3 className="uppercase font-semibold">
              Blog<span className="font-black">Verse</span>
            </h3>
            - All rights reserved
          </div>
          <p className="text-s">238 Blogs</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
