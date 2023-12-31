'use client';

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10 ">
        <Link href="/">
          <Image
            src="/logo2.png"
            width={60}
            height={60}
            alt="Find Talent"
          />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto

            <Link href="/create-project" >
              Share Your Work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar;