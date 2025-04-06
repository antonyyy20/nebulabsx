"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@heroui/react";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png"

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Services",
    "Projects",
    "Pricing"
  ];
  return (
    <Navbar className=" text-white rounded-2xl w-[90%] border-white border-1 top-5">
        <NavbarContent className="" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} width={80} height={80}alt="Logo" className="mr-2"></Image>
         
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#features" className="cursor-pointer   group relative transition-all duration-200 ease-in-out shadow hover:shadow-lg">
          <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Services
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Services
          </span>
        </span>
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link aria-current="page" href="" className="cursor-pointer   group relative transition-all duration-200 ease-in-out shadow hover:shadow-lg">
          <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Projects
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Projects
          </span>
        </span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#pricing" className="cursor-pointer   group relative transition-all duration-200 ease-in-out shadow hover:shadow-lg ">
          <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Pricing
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Pricing
          </span>
        </span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
        <button className="cursor-pointer   group relative    text-sm px-4 py-3 rounded-medium bg-black transition-all duration-200 ease-in-out shadow hover:shadow-lg ">
      <Link href="/book-a-call">
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Contact Us
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Contact Us
          </span>
        </span>
        
        <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24">
          <circle fill="currentColor" r={11} cy={12} cx={12} />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="black" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
        </svg>
      </div>
      </Link>
    </button>
         
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-white mt-4 text-center gap-5 flex justify-start items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              className="w-full text-2xl "
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="xl"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

  );
}
