import React from "react";
import Link from "next/link";
import Image from "next/image";

import {TITLE} from "@/app/metadata";

export default function Navbar(): React.ReactElement {
    return (
        <header
            role="banner"
            className="flex w-full flex-row max-sm:flex-wrap items-center overflow-y-hidden mx-auto justify-between"
        >
            <div className="flex flex-col justify-center gap-2 h-full">
                <h1 className="text-left text-3xl font-bold leading-tight text-white">{ TITLE }</h1>
                <p className="text-base leading-normal mr-5 md:text-left md:text-lg">
                    The SOC Club at AUS.
                </p>
                <nav id="header-links" className="flex gap-2 text-white text-lg underline no-modify">
                    <Link href={"/"}>home</Link>
                    <Link href={"/faq"}>faq</Link>
                    <Link href={"/resources"}>resources</Link>
                    <Link href={"/about"}>about us</Link>
                </nav>
            </div>
            <Image priority={true} src={"/soc.png"} alt="Club Logo" width={300} height={300}/>
        </header>
    );
}
