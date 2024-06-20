import Image from "next/image";
import Link from "next/link";
import navLogo from '@/public/lws_logo.png'

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          className="max-w-[100px] md:max-w-[165px]"
          src={navLogo}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
