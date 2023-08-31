import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  if (!session) return <Link href={"/api/auth/signin"}>Sign in</Link>;
  //   console.log(session);
  return (
    <div className="flex flex-grow bg-red-100 items-center justify-center">
      <div className="flex flex-col gap-2">
        <p>{session.user?.name}</p>
        <p>{session.user?.email}</p>
        <div className="w-[80px] h-[80px] relative rounded-full overflow-hidden">
          <Image
            src={session?.user?.image as string}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
