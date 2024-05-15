"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/ui/active-section-context";

function Navbar() {
  const links = [
    {
      name: "Home",
      hash: "/",
    },
    {
      name: "About",
      hash: "/about",
    },

    {
      name: "Service",
      hash: "/service",
    },

    {
      name: "Contact",
      hash: "/contact",
    },
  ] as const;

  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <motion.nav
        ref={ref}
        className="fixed top-0 left-0 right-0 z-[999] bg-white  backdrop-blur-sm shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-black ">
                Mistar Fotocopy
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex ite space-x-4 gap-8 text-lg">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      className={clsx(" text-black hover:text-blue-500", {
                        "": activeSection === link.name,
                      })}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className={clsx(
                  "text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
