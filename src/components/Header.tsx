"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-screen justify-center flex">
      <div className="fixed justify-start w-screen md:w-auto bg-opacity-75 hover:bg-opacity-100 transition-all pt-4 h-16 border-l border-r border-b border-neutral-600 z-50 px-8 py-4 rounded-b-lg bg-neutral-950 text-neutral-200">
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
