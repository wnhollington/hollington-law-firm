import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaPhone } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderMenu from "./menus/header-menu";
import { useSiteMetadata } from "../utilities/use-site-metadata";

export default function Header() {
  const { contact, title } = useSiteMetadata();
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* 🚀 always fixed, highest z on site except drawer */
    <header className="fixed inset-x-0 top-0 z-[96]">
      <div
        className={`bg-white shadow-lg transition-all duration-200
        ${scrolled ? "py-1" : "py-3"}`}
      >
        <div className="flex items-center justify-between px-2">
          <Link to="/" aria-label={title}>
            <StaticImage
              src="../images/logo.webp"
              width={300}
              alt="Hollington Law Firm, LLC"
              loading="eager"
            />
          </Link>

          {/* desktop nav bar */}
          <nav
            className="hidden items-center gap-12 lg:flex header-navigation"
            aria-label="Primary"
          >
            <HeaderMenu />
          </nav>

          {/* phone CTA desktop */}
          <a
            href={`tel:${contact.phone}`}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-b
            from-primary to-red-800 text-white text-xl p-2 rounded-md
            hover:shadow-lg"
          >
            <FaPhone />
            <span>{contact.phone}</span>
          </a>

          {/* hamburger */}
          <button
            className="p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setDrawer(true)}
          >
            <FaBars className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* mobile drawer, higher z than header */}
      {drawer && (
        <div className="fixed inset-0 z-[97] lg:hidden" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setDrawer(false)}
          />
          <div className="relative ml-auto h-full w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <button
              className="absolute top-6 right-6 p-1"
              aria-label="Close menu"
              onClick={() => setDrawer(false)}
            >
              <FaTimes className="w-6 h-6 text-gray-700" />
            </button>

            <div className="mt-14 space-y-8 header-navigation mobile-menu">
              <HeaderMenu placement="bottom-start" onClick={() => setDrawer(false)} />
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={`tel:${contact.phone}`}
                className="flex gap-2 bg-gradient-to-b from-primary to-red-800 p-3
                 rounded-lg text-lg font-semibold text-gray-100 hover:text-gray-200
                 hover:shadow-lg transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}