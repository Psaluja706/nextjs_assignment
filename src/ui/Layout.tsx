/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Layout = () => {
  const router: any = useRouter();
  console.log(router.pathname);
  return (
    <div className="bg-red h-[83vh] w-[20vw] bg-greyLayout p-5 rounded-xl flex-col justify-center items-center">
      <div className="text-black text-2xl font-extrabold mb-4 text-center">
        PopDop
      </div>
      <div>
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className={`text-sm`}>home</div>
          </div>
        </Link>
        <Link href="/population">
          <div className="flex items-center gap-2">
            <div className="text-sm">population</div>
          </div>
        </Link>
        <Link href="/about">
          <div className="flex items-center gap-2">
            <div className="text-sm">about</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
