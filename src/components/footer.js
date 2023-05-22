import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import navLink from "@/config/navLink";
import { getAllSocialMedia } from "@/data/platforms";
import { Icon } from "@iconify/react";
import Link from "next/link";

const navButton = navLink.map((val, idx) => (
  <li
    key={idx}
    className="text-primary-900 hover:font-bold active:bg-primary-900 rounded-sm transition-all md:ml-7 px-2 my-5 md:my-0"
  >
    <Link href={val.href} as={val.href} scroll={false}>
      {val.name}
    </Link>
  </li>
));

export default function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSocialMedia().then(({ data }) => setData(data.data));
  }, []);

  return (
    <div className="bg-primary-300 text-primary-900 z-0 relative px-0 lg:px-12">
      <footer className="container mx-auto items-center">
        <section className="flex flex-col lg:flex-row lg:justify-between py-7">
          <a href="#" className="mx-auto lg:m-0">
            <Image src={logo} alt="logo" height={35} />
          </a>
          <ul className="flex font-poppins items-center flex-row mx-auto mt-5 lg:m-0">
            {navButton}
          </ul>
        </section>
        <hr className="w-full border-primary-900" />
        <section className="flex items-center lg:justify-between py-7 font-poppins flex-col-reverse lg:flex-row">
          <span className="text-center lg:text-left">
            Copyright © 2023{" "}
            <span className="text-primary-900 font-bold">Raps Company</span>, All rights
            reserved.
          </span>
          <span className="text-primary-900 mb-3 lg:mb-0 flex gap-4 flex-col lg:flex-row">
            {data.map((val, idx) => (
              <a
                key={idx}
                href={val.link}
                className="flex items-center gap-1"
                target="_blank"
              >
                <Icon
                  icon={`fa6-brands:${val.platform.toLowerCase()}`}
                  className="text-2xl"
                />{" "}
                {val.username}
              </a>
            ))}
          </span>
        </section>
      </footer>
    </div>
  );
}
