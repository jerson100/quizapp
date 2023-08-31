import React from "react";
import Logo from "@/assets/images/logo.svg";
import Merck from "@/assets/images/merck.svg";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";

const MainHeader = async () => {
  const session = await getServerSession();
  return (
    <header className="h-[167px] bg-white py-[20px] fixed left-0 top-0 w-full">
      <div className="container">
        <div className="flex justify-between">
          <Image
            src={Logo}
            width={313}
            height={104}
            alt="Sociedad Peruana de Endocronología"
            className=""
          />
          <div className="flex gap-4">
            {session?.user && (
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
                  <p className="text-primary font-gordita-bold">
                    {session.user.name as string}
                  </p>
                </div>
              </Link>
            )}

            <div className="flex flex-col gap-2 items-end">
              <span className="text-primary font-inter-regular text-[20px]">
                Auspiciado por:
              </span>
              <Image
                src={Merck}
                alt="Merck"
                className=""
                width={127}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
