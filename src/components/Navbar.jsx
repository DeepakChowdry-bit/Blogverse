import React from "react";
import { Button } from "./ui/button";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaPenFancySolid } from "react-icons/lia";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center h-fit py-3 sticky top-0 bg-background shadow-sm">
        <div className="flex items-center justify-between w-11/12 md:w-10/12">
          <div className="flex items-center gap-10">
            <div className="sm:flex items-center space-x-3 text-xs hidden">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
            </div>
            <Link href={"/new-blog"}>
              <Button
                variant="custom"
                className="flex items-center gap-1 text-xs"
              >
                <LiaPenFancySolid />
                Write Blog
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-3xl font-semibold">
              BLOG<span className="font-black">VERSE</span>
            </h2>
            <p className="uppercase tracking-[1px] md:tracking-[3px] text-s md:text-xs font-medium">
              Multiverse of blogs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
