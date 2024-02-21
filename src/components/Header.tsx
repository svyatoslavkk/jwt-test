import { SIGN_IN_TITLE } from "~/constants"; 
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/triangle.svg" alt="Triangle" width={52} height={52} />
      <h2 className="text-blueLight text-blue-600 font-normal text-3xl">
        {SIGN_IN_TITLE}
      </h2>
    </div>
  );
}