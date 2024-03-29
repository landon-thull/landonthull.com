"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen fixed z-50 justify-center flex">
      <div className="fixed justify-start w-screen pt-4 h-16 border-b border-neutral-600 z-50 px-8 py-4 bg-neutral-950 text-neutral-200">
        <nav className="h-full flex items-center justify-center gap-x-8 font-light">
          <Link href="/" className="hover:text-lg transition-all">
            Home
          </Link>
          <Link href="/projects" className="hover:text-lg transition-all">
            Projects
          </Link>
          {/* <Link href="/contact" className="hover:text-lg transition-all">
            Contact
          </Link> */}
        </nav>
      </div>
    </div>
  );
}
