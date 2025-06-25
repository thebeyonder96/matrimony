"use client";
import { BASE_URL } from "@/configs/constants";
import { useAuth } from "@/store/authStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { user, fetchUser } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  const handleClick = async () => {
    window.location.href = `${BASE_URL}/auth/google`;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-2 md:py-2 sticky top-0 drop-shadow-2xl ${
        scrolled
          ? "bg-white/30 backdrop-blur-[1px] shadow-md"
          : "bg-transparent"
      }`}
    >
      <Link href={"/"} className="font-bold text-2xl red text-shadow-md">
        Destiné
      </Link>
      {pathName === "/" ? (
        <div className="hidden md:block">
          <Link href={"#why"}>Why choose us?</Link>
        </div>
      ) : (
        ""
      )}
      <div>
        {user ? (
          <Link
            href={"/profile"}
            className="flex items-center justify-center gap-2"
          >
            <img
              className="w-5 h-5 bg-white rounded-full object-cover p-2"
              src={user.picture}
              alt=""
            />
            <p>{user.name}</p>
          </Link>
        ) : (
          <button
            onClick={handleClick}
            className="dark:bg-neutral-300/20 px-4 py-2 bg-neutral-300/30 red font-bold border border-neutral-300/30 rounded-md cursor-pointer hover:bg-neutral-400/40 transition-all"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
