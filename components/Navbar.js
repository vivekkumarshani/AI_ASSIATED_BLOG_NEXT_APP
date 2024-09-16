"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathName = usePathname()
  useEffect(() => {
   setProgress(20)
  setTimeout(() => {
    setProgress(40)
  }, 400);
  setTimeout(() => {
    setProgress(100)
  }, 500);
  
  }, [pathName])
  
  return (
    <nav className=" p-2 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className=" text-lg font-bold">VivekBlog</div>
        </Link>

        <div className=" w-full lg:flex lg:items-center lg:w-auto">
          <div className="hidden  md:flex space-x-4 items-center justify-end">
            <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">Home</Link>
            <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
            <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
            <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
            <div className="flex items-center gap-1">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              SignIn
            </Button>
            <ModeToggle/>
            </div>
          </div>
        </div>
        <div className=" md:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
              <span className="mx-2">
              <ModeToggle/>
              </span>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle className="ont-bold my-4">VivekBlog</SheetTitle>
                <SheetDescription>
                  <div className=" flex flex-col gap-6 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <div>
                    <Button className="mx-1 text-sm" variant="outline">
                      Login
                    </Button>
                    <Button className="mx-1 text-sm" variant="outline">
                      SignIn
                    </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
