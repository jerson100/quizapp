import React from "react";
import Logo from "@/assets/images/logo.svg";
import Merck from "@/assets/images/merck.svg";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";

const MainHeader = async () => {
  const session = await getServerSession();
  return (
    <header className="h-[100px] py-[20px] fixed left-0 top-0 w-full border-b border-solid bg-white z-20">
      <div className="container h-full">
        <div className="flex justify-between h-full">
          {/* <Image
            src={Logo}
            width={313}
            height={104}
            alt="Sociedad Peruana de Endocronología"
            className=""
          /> */}
          <svg
            // width="200"
            height="80"
            viewBox="0 0 40 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-hHTYSt jNNSaN h-full"
          >
            <path
              d="M6.25085 6.70596L20 0.547861L33.7491 6.70596L39.4646 21.626L33.7491 36.5461L20 42.7042L6.25085 36.5461L0.535431 21.626L6.25085 6.70596Z"
              stroke="#CD2368"
            ></path>
            <path
              d="M16.1307 16.8182H17.3636V24.0966C17.3636 24.7462 17.2443 25.2981 17.0057 25.7521C16.767 26.2062 16.4306 26.5509 15.9964 26.7862C15.5623 27.0215 15.0502 27.1392 14.4602 27.1392C13.9034 27.1392 13.4079 27.0381 12.9737 26.8359C12.5395 26.6304 12.1982 26.3388 11.9496 25.9609C11.701 25.5831 11.5767 25.134 11.5767 24.6136H12.7898C12.7898 24.902 12.861 25.1539 13.0036 25.3693C13.1494 25.5814 13.3482 25.7472 13.6001 25.8665C13.852 25.9858 14.1387 26.0455 14.4602 26.0455C14.8149 26.0455 15.1165 25.9709 15.3651 25.8217C15.6136 25.6726 15.8026 25.4538 15.9318 25.1655C16.0644 24.8738 16.1307 24.5175 16.1307 24.0966V16.8182ZM19.8345 27V16.8182H23.2749C24.0703 16.8182 24.7232 16.9541 25.2337 17.2259C25.7441 17.4943 26.1219 17.8639 26.3672 18.3345C26.6125 18.8052 26.7351 19.3404 26.7351 19.9403C26.7351 20.5402 26.6125 21.0722 26.3672 21.5362C26.1219 22.0002 25.7457 22.3648 25.2386 22.63C24.7315 22.8918 24.0836 23.0227 23.2947 23.0227H20.5107V21.9091H23.255C23.7985 21.9091 24.236 21.8295 24.5675 21.6705C24.9022 21.5114 25.1442 21.286 25.2933 20.9943C25.4458 20.6993 25.522 20.348 25.522 19.9403C25.522 19.5327 25.4458 19.1764 25.2933 18.8714C25.1409 18.5665 24.8973 18.3312 24.5625 18.1655C24.2277 17.9964 23.7853 17.9119 23.2351 17.9119H21.0675V27H19.8345ZM24.6271 22.4261L27.1328 27H25.701L23.2351 22.4261H24.6271Z"
              fill="#CD2368"
            ></path>
          </svg>
          <div className="flex gap-4">
            {session?.user && (
              <ul className="flex gap-4 items-center">
                <li>
                  <Link
                    href="/admin/questions/new"
                    className="bg-text-primary text-white px-5 py-2 rounded-md"
                  >
                    Crear Cuestionario
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <div className="flex flex-col gap-1 items-center">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image
                          src={session.user.image as string}
                          alt={session.user.name as string}
                          title={session.user.name as string}
                          fill={true}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-text-primary font-gordita-bold">
                        {session.user.name as string}
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
