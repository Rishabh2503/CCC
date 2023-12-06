import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CCCLogo from "../../assest/Images/CCCLogo.png"; 
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 p-4 flex items-center space-x-24">
      
      <Link href="/" className="btn btn-ghost text-2xl font-bold">
        <Image src={CCCLogo} alt="CCC-logo" priority className="w-[5rem]" />
      </Link>

      <div className="flex space-x-32 text-2xl">
        <NavLink href="/" text="Home" isActive={router.pathname === "/"} />
        <NavLink
          href="/about"
          text="About"
          isActive={router.pathname === "/about"}
        />
        <NavLink
          href="/faculty"
          text="Faculty"
          isActive={router.pathname === "/faculty"}
        />
        <NavLink
          href="/register"
          text="Register"
          isActive={router.pathname === "/register"}
        />
      </div>
    </div>
  );
};

const NavLink = ({ href, text, isActive }) => {
  const linkClass = `btn text-white ${isActive ? "bg-primary rounded" : ""}`;

  return (
    <Link href={href} className={linkClass}>
      {text}
    </Link>
  );
};

export default Navbar;
