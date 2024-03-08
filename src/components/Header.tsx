"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-screen flex justify-center">
      <div className="fixed justify-center bg-opacity-75 hover:bg-opacity-100 transition-all top-10 h-16 border border-neutral-200 z-50 mx-auto px-8 py-4 rounded-full bg-black text-neutral-200">
        <nav className="h-full flex items-center justify-center gap-x-8 font-light">
          <Link href="/" className="hover:text-lg transition-all">
            Home
          </Link>
          <Link href="/projects" className="hover:text-lg transition-all">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-lg transition-all">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
